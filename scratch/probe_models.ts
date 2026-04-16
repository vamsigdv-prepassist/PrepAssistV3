import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

async function listModels() {
  const apiKey = process.env.GOOGLE_API_KEY || "";
  const genAI = new GoogleGenerativeAI(apiKey, { apiVersion: 'v1' });
  try {
    // There is no direct listModels in the JS SDK usually, it's in the REST API.
    // But we can try to probe.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }, { apiVersion: "v1" });
    const result = await model.generateContent("test");
    console.log("gemini-1.5-flash works!");
  } catch (e) {
    console.error("gemini-1.5-flash failed:", e);
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }, { apiVersion: "v1" });
    const result = await model.generateContent("test");
    console.log("gemini-1.5-flash works!");
  } catch (e) {
    console.error("gemini-1.5-flash failed:", e);
  }
}

listModels();
