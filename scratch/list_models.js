const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

async function listModels() {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    console.error("No API key found in .env");
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  
  // Try v1
  console.log("--- Models in v1 ---");
  try {
     const response = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
     const data = await response.json();
     console.log(JSON.stringify(data, null, 2));
  } catch (e) {
     console.error("Error listing v1 models:", e);
  }

  // Try v1beta
  console.log("\n--- Models in v1beta ---");
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.error("Error listing v1beta models:", e);
  }
}

listModels();
