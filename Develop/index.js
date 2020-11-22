const fs = require('fs');

const generatePage = require('./src/generateMarkdown.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [fileName, data] = profileDataArgs;

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// const writeToFile = (fileName, data) => {
// };

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


fs.writeFile('./utils/README.md', generatePage(fileName, data), err => {
    if (err) {
      return console.log(err);
    }
    console.log('README file created!')
  });