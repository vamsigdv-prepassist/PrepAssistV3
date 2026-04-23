import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Native Fallback Engine Initialization or Main Engine
const apiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: Request) {
  try {
    const { imageBase64, answerText, questionContext, wordLimit, includeNotes, includeCurrentAffairs } = await req.json();

    if (!imageBase64 && !answerText) {
      return NextResponse.json({ error: "No answer provided" }, { status: 400 });
    }

    if (!apiKey) {
      console.warn("No Google API key found. Returning mock evaluation.");
      return NextResponse.json({
        score: 72,
        examinerRemark: "Good structural flow, but the content needs tighter alignment with the specific word limit constraint.",
        strengths: ["Clear introduction", "Good legibility and formatting", "Solid constitutional baseline"],
        weaknesses: ["Missed contemporary SC judgements", "Word limit could be better respected"],
        improvementPlan: ["Add recent Supreme Court citations", "Map keywords directly to the GS syllabus"],
        rewrittenIntro: "To begin with, the multifaceted nature of the topic demands a constitutional approach. The foundational ethos dictates that administration must serve the marginalized...",
        rewrittenConclusion: "Conclusively, embracing a cooperative model ensures sustainable civil development, cementing the democratic framework for the future...",
        detailedFeedback: {
            content: "Relevant core points but relies on generic filler in body paragraphs.",
            structure: "Well separated paragraphs, introduction hooks the reader.",
            language: "Clear and concise, with no major grammatical errors.",
            arguments: "Needs more empirical data backing for justification.",
            upscRelevance: "Matches GS Paper 2 standards accurately."
        },
        ocrText: imageBase64 ? "This is a mocked transcription of your handwritten document representing the essay content." : undefined
      });
    }

    let ragConfiguration = "";

    if (includeNotes) {
        ragConfiguration += "\n- STRICTLY verify if the answer reflects deep, personalized subject-matter knowledge found in standard UPSC vault notes.";
    }
    if (includeCurrentAffairs) {
        ragConfiguration += "\n- STRICTLY evaluate the inclusion of contemporary events, metrics, and Current Affairs related precisely to the topic over the past 12 months.";
    }

    const basePrompt = `You are an expert UPSC essay examiner with 20+ years of experience.
${imageBase64 ? 'First, carefully TRANSCRIBE the handwritten essay in the image.' : ''}
Evaluate the essay written for UPSC Mains examination based on the ${imageBase64 ? 'transcribed text' : 'provided text'}.

**Question Context / Topic:** ${questionContext || "General Essay/Answer"}
**Target Word Limit:** ${wordLimit} words. Please penalize in the detailed feedback if the answer significantly exceeds or falls short of this limit.

${answerText ? `**Essay Answer Text:**\n${answerText}\n` : ''}

**IMPORTANT RAG / METRIC EVALUATION CONSTRAINTS:**${ragConfiguration}

Please provide a comprehensive evaluation in the following JSON format (respond ONLY with valid JSON, no markdown or extra text):

{
  ${imageBase64 ? '"ocrText": "<FULL_TRANSCRIPTION_OF_THE_ESSAY>",' : ''}
  "score": <number between 0-100>,
  "examinerRemark": "<overall assessment in 2-3 sentences>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "improvementPlan": ["<specific actionable improvement 1>", "<specific improvement 2>"],
  "rewrittenIntro": "<rewrite the introduction paragraph to make it more impactful>",
  "rewrittenConclusion": "<rewrite the conclusion paragraph to make it more powerful>",
  "detailedFeedback": {
    "content": "<feedback on relevance, depth of analysis, factual accuracy (30%)>",
    "structure": "<feedback on introduction, body paragraphs, conclusion, flow (20%)>",
    "language": "<feedback on grammar, vocabulary, clarity, coherence (15%)>",
    "arguments": "<feedback on quality of arguments, use of examples, case studies (25%)>",
    "upscRelevance": "<how well it addresses UPSC multi-dimensional requirements (10%)>"
  }
}

Be honest, constructive, and specific in your feedback. The score should reflect stringent UPSC Mains standards.`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const parts: any[] = [];
    
    parts.push({ text: basePrompt });

    if (imageBase64) {
        // Strip data:image/jpeg;base64, prefix properly
        const match = imageBase64.match(/^data:(image\/[a-zA-Z+]+);base64,(.+)$/);
        let mimeType = "image/jpeg";
        let base64Data = imageBase64;
        
        if (match) {
            mimeType = match[1];
            base64Data = match[2];
        } else if (imageBase64.includes(";base64,")) {
            mimeType = imageBase64.split(";")[0].split(":")[1];
            base64Data = imageBase64.split(";base64,")[1];
        }
        
        parts.push({
            inlineData: {
                data: base64Data,
                mimeType: mimeType
            }
        });
    }

    const result = await model.generateContent(parts);
    const resultText = result.response.text();
    
    const cleanJson = resultText.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();
    const evaluation = JSON.parse(cleanJson);

    if (typeof evaluation.score !== 'number' || evaluation.score < 0 || evaluation.score > 100) {
        evaluation.score = 65;
    }

    return NextResponse.json(evaluation);
  } catch (error) {
    console.error("Evaluation Error:", error);
    return NextResponse.json({ error: "Failed to evaluate the answer accurately." }, { status: 500 });
  }
}
