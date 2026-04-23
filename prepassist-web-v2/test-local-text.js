const fs = require('fs');

async function testLocallyText() {

  const response = await fetch('http://localhost:3000/api/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        answerText: 'This is a test answer for the evaluation system.',
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
testLocallyText();
