const fs = require('fs');
let code = fs.readFileSync('C:\\Users\\ADMN\\Downloads\\vamsiprodupscappfinal-main\\upsc-quiz.jsx', 'utf8');

code = code.replace(/import.*?['"'].*?['"];?/g, '');
code = code.replace(/const TOTAL = questions\.length;\s*export default function UPSCQuiz[\s\S]*/, '');

// FIX UNESCAPED NEWLINES INSIDE STRINGS!
// This regex matches double quoted strings and escapes literal newlines inside them so Node.js can parse it.
code = code.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/g, (match) => match.replace(/\r?\n/g, '\\n'));

code += `
const fs = require('fs');

function escapeCSV(str) {
  if (str == null) return '""';
  let clean = String(str).replace(/"/g, '""');
  return '"' + clean + '"';
}

const csvRows = [];
csvRows.push(["Question", "OptionA", "OptionB", "OptionC", "OptionD", "CorrectAnswer", "Explanation"].join(","));

const keys = ['A', 'B', 'C', 'D'];

questions.forEach(q => {
  const row = [
    escapeCSV(q.text),
    escapeCSV(q.options[0]),
    escapeCSV(q.options[1]),
    escapeCSV(q.options[2]),
    escapeCSV(q.options[3]),
    escapeCSV(keys[q.answer]),
    escapeCSV(q.explanation)
  ];
  csvRows.push(row.join(","));
});

fs.writeFileSync('C:\\\\Users\\\\ADMN\\\\Downloads\\\\vamsiprodupscappfinal-main\\\\PrepAssistV2\\\\legacy_questions.csv', csvRows.join("\\n"));
console.log('Successfully generated legacy_questions.csv with ' + questions.length + ' rows.');
`;

fs.writeFileSync('C:\\Users\\ADMN\\Downloads\\vamsiprodupscappfinal-main\\PrepAssistV2\\runner.js', code);
