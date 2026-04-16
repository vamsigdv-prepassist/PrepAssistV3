const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:\\Users\\ADMN\\Downloads\\vamsiprodupscappfinal-main\\PrepAssistV2\\legacy.json', 'utf8'));

const keys = ['A', 'B', 'C', 'D'];

function escapeCSV(str) {
  if (str == null) return '""';
  // Replace newlines and commas by quoting the entire string, and escape quotes with double quotes.
  let clean = String(str).replace(/"/g, '""');
  return `"${clean}"`;
}

// Columns: Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Explanation
const csvRows = [];
// Add header
csvRows.push(["Question", "OptionA", "OptionB", "OptionC", "OptionD", "CorrectAnswer", "Explanation"].join(","));

data.forEach(q => {
  const answerKey = keys[q.answer]; // e.g. 2 -> 'C'
  const row = [
    escapeCSV(q.text),
    escapeCSV(q.options[0]),
    escapeCSV(q.options[1]),
    escapeCSV(q.options[2]),
    escapeCSV(q.options[3]),
    escapeCSV(answerKey),
    escapeCSV(q.explanation)
  ];
  csvRows.push(row.join(","));
});

fs.writeFileSync('C:\\Users\\ADMN\\Downloads\\vamsiprodupscappfinal-main\\PrepAssistV2\\legacy_questions.csv', csvRows.join("\n"));
console.log('Successfully generated legacy_questions.csv! Rows: ', csvRows.length - 1);
