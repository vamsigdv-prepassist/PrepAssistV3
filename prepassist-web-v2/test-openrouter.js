const fs = require('fs');

async function test() {
  const envFile = fs.readFileSync('.env.local', 'utf-8');
  const match = envFile.match(/OPENROUTER_API_KEY=(.*)/);
  const openRouterKey = match ? match[1].trim() : null;
  
  if(!openRouterKey) return console.log('no key');

  // minimal blank image base64
  const imageBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

  const basePrompt = 'You are an expert... Provide JSON.\n{\n"score": 80,\n"examinerRemark": "Good"\n}';

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openRouterKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: basePrompt },
              { type: 'image_url', image_url: { url: imageBase64 } }
            ]
          }
        ],
        temperature: 0.7
      })
  });
  
  const data = await response.json();
  console.log('Status:', response.status);
  console.log('Data:', JSON.stringify(data, null, 2));
}
test();
