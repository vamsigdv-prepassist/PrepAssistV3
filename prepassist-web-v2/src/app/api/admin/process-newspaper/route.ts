import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'nodejs';
export const maxDuration = 300; // Allows up to 5 minutes for massive payload inference

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const fileUrl = reqBody.fileUrl;
    const newspaperType = reqBody.provider;

    if (!fileUrl || !newspaperType) {
      return NextResponse.json({ error: "Missing PDF fileUrl or provider type" }, { status: 400 });
    }

    // 1. Download stream natively from Firebase bypassing constraints
    const pdfResponse = await fetch(fileUrl);
    if (!pdfResponse.ok) {
        throw new Error(`Cloud Storage Native Fetch Failed: ${pdfResponse.statusText}`);
    }

    const arrayBuffer = await pdfResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Bypassing Next.js Turbopack CJS interop bugs by using the completely async, DOM-independent pdf2json engine
    const PDFParser = require("pdf2json");
    
    let extractedText = await new Promise<string>((resolve, reject) => {
       const pdfParser = new PDFParser(null, 1);
       pdfParser.on("pdfParser_dataError", (errData: any) => reject(errData.parserError));
       pdfParser.on("pdfParser_dataReady", () => {
          resolve(pdfParser.getRawTextContent());
       });
       pdfParser.parseBuffer(buffer);
    });

    // Clean structural metadata tags out of the raw stream to calculate TRUE extracted word count
    const trueOCRWordCount = extractedText.replace(/-+Page \(\d+\) Break-+/g, "").trim().length;

    if (trueOCRWordCount < 100) {
       console.log("No readable text found via pdf2json. Engaging Google Cloud Vision OCR Fallback Pipeline...");
       
       try {
           const { ImageAnnotatorClient } = require('@google-cloud/vision');
           const { PDFDocument } = require('pdf-lib');

           // 1. Slice PDF to max 5 pages for synchronous Vision OCR limits.
           const pdfDoc = await PDFDocument.load(buffer);
           const totalPages = pdfDoc.getPageCount();
           const pagesToExtract = Math.min(totalPages, 5);
           
           const newPdf = await PDFDocument.create();
           const copiedPages = await newPdf.copyPages(pdfDoc, Array.from({length: pagesToExtract}, (_, i) => i));
           copiedPages.forEach((page: any) => newPdf.addPage(page));
           
           const slicedPdfBytes = await newPdf.save();
           const slicedBase64 = Buffer.from(slicedPdfBytes).toString('base64');
           
           // 2. Instantiate Vision Client using standard ENV overrides or GCP Default chaining.
           let visionClient;
           if (process.env.GCP_PRIVATE_KEY && process.env.GCP_CLIENT_EMAIL) {
              visionClient = new ImageAnnotatorClient({
                 credentials: {
                    client_email: process.env.GCP_CLIENT_EMAIL,
                    private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, '\n'),
                 },
                 projectId: process.env.GCP_PROJECT_ID,
              });
           } else {
              visionClient = new ImageAnnotatorClient(); // Relies natively on GOOGLE_APPLICATION_CREDENTIALS
           }

           // 3. Dispatch to GCP processing engine
           const [result] = await visionClient.batchAnnotateFiles({
              requests: [{
                 inputConfig: {
                    mimeType: 'application/pdf',
                    content: slicedBase64
                 },
                 features: [{ type: 'DOCUMENT_TEXT_DETECTION' }],
                 pages: Array.from({length: pagesToExtract}, (_, i) => i + 1)
              }]
           });

           // 4. Re-construct the massive OCR text payload
           extractedText = "";
           const responses = result.responses?.[0]?.responses || [];
           responses.forEach((pageResponse: any) => {
               if (pageResponse.fullTextAnnotation?.text) {
                  extractedText += pageResponse.fullTextAnnotation.text + "\n\n";
               }
           });

           if (!extractedText || extractedText.trim().length < 100) {
              throw new Error("GCP Vision engine finalized analysis but found zero comprehensible text block structures.");
           }
           
       } catch (ocrError: any) {
           throw new Error("GCP Vision OCR Fallback engaged but crashed: " + ocrError.message + ". Ensure GCP_PRIVATE_KEY Env variables or GOOGLE_APPLICATION_CREDENTIALS are linked!");
       }
    }

    // AI Context window guardrail: 
    // Truncate to ~100,000 chars to comfortably fit inside GPT-4o's 128k context without timing out the severless function setup.
    if (extractedText.length > 100000) {
       extractedText = extractedText.substring(0, 100000); 
    }

    const openRouterKey = process.env.OPENROUTER_API_KEY;
    const googleApiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || "";

    const prompt = `You are a top-tier UPSC Civil Services Examiner analyzing today's ${newspaperType}. 
    Extract the MOST EXHAUSTIVE, critical high-yield topics from this newspaper's text.
    You MUST extract a MINIMUM of 10 to 12 completely distinct, highly important articles. 

    You MUST output your ENTIRE response as a RAW JSON array of objects.
    Each object MUST have:
    - title (String): The exact UPSC Syllabus topic name.
    - tags (Array of Strings): e.g. ["GS2", "International Relations"].
    - content (String): A detailed UPSC Mains analysis.
    
    Format using explicit sub-headings within the 'content' string.`;

    let resultText = "";

    // STRIP OPENROUTER COMPLETELY (Credits Exhausted)
    // EXCLUSIVE GEMINI 2.5 FLASH INFERENCE
    if (!googleApiKey) {
       throw new Error("CRITICAL: Both GOOGLE_API_KEY and GOOGLE_GENERATIVE_AI_API_KEY are missing from environment keys.");
    }

    console.log("Engaging Gemini 2.5 Flash for Newspaper Synthesis...");
    try {
        const genAI = new GoogleGenerativeAI(googleApiKey);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.0-flash", 
            generationConfig: {
                responseMimeType: "application/json",
            }
        });
        const genResult = await model.generateContent([prompt, extractedText]);
        resultText = genResult.response.text().trim();
    } catch (gError: any) {
        throw new Error(`Gemini Validation Crash: ${gError.message}`);
    }
    
    if (!resultText) {
       throw new Error(`The AI successfully read the document but output 0 items! Ensure the document isn't purely custom fonts.`);
    }
    
    // Attempt parsing directly (responseMimeType guarantees JSON array)
    try {
       const parsedResults = JSON.parse(resultText);
       // Check if response is raw dict or array
       if (Array.isArray(parsedResults)) {
           return NextResponse.json({ results: parsedResults });
       } else if (parsedResults && Array.isArray(parsedResults.results)) {
           return NextResponse.json({ results: parsedResults.results });
        } else {
           throw new Error("Invalid output format schema natively.");
       }
    } catch (parseError: any) {
        throw new Error(`Gemini generated structured JSON incorrectly. Error: ${parseError.message} || RAW TEXT: ${resultText}`);
    }
      
  } catch (err: any) {
    console.error("Newspaper Extraction Error:", err);
    return NextResponse.json({ 
       error: "Execution crashed at: " + (err.message || String(err)),
       stack: err.stack 
    }, { status: 500 });
  }
}
