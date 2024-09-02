const fs = require('fs');
const { get } = require('http');

const getFirstLine = ()=> {
  try {
    const data = fs.readFileSync("./log.txt", 'utf8'); // Read the file synchronously
    const lines = data.split('\n'); // Split the content by newlines
    return lines[0]; // Return the first line
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
    return null; // Return null or an appropriate error value
  }
}

module.exports = getFirstLine;