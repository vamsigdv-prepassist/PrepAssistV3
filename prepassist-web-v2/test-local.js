const fs = require('fs');

async function testLocally() {
  const imageBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

  const response = await fetch('http://localhost:3000/api/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imageBase64: imageBase64,
        questionContext: 'Test question',
        wordLimit: 250,
        includeNotes: true,
        includeCurrentAffairs: false
      })
  });
  
  const text = await response.text();
  console.log('Status:', response.status);
  console.log('Data:', text);
}
testLocally();
