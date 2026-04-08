const fs = require('fs');

const fileCode = fs.readFileSync('C:\\Users\\ADMN\\Downloads\\vamsiprodupscappfinal-main\\upsc-quiz.jsx', 'utf-8');

// Find the start of the questions array
const startIndex = fileCode.indexOf('const questions = [');
// Find the end of the array by searching for the semicolon before TOTAL
const endIndex = fileCode.indexOf(';', fileCode.indexOf(']', startIndex));

const arrayCode = fileCode.substring(startIndex + 'const questions = '.length, endIndex);

// Using new Function to safely evaluate the JS object array
const parsedArray = new Function(`return ${arrayCode}`)();

fs.writeFileSync('C:\\Users\\ADMN\\Downloads\\legacy.json', JSON.stringify(parsedArray, null, 2));
console.log('Successfully extracted ' + parsedArray.length + ' legacy questions to legacy.json');
