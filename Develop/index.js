const inquirer = require("inquirer");

// const fs = require('fs');

// const generatePage = require('./src/generateMarkdown.js');

// const pageReadMe = generatePage(fileName, data);

// fs.writeFile('./utils/README.md', pageReadMe, err => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('README file created!')
//   });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        }
    ])
    .then(answers => console.log(answers));

// array of questions for user
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