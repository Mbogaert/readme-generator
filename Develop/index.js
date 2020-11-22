const inquirer = require("inquirer");
const { fetchAsyncQuestionPropertyQuestionProperty } = require("inquirer/lib/utils/utils");

// const fs = require('fs');

// const generatePage = require('./src/generateMarkdown.js');

// const pageReadMe = generatePage(fileName, data);

// fs.writeFile('./utils/README.md', pageReadMe, err => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('README file created!')
//   });

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How does someone install this project?'
        },
        {
            type: 'checkbox',
            name: 'builtWith',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'input',
            name: 'useage',
            message: 'How will this project be used? (useage)'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the authors name? (Enter other contributors after)'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List the collaborators on the projects (with links):'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What is the license on this project?'
        }
        // May add Badges, Features, Contributing, Tests later
        // Maybe add a prompt to create another Readme?
    ]);
};
    questions().then(answers => console.log(answers));

// // function to write README file
// const writeToFile = (fileName, data) => {
// };

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();