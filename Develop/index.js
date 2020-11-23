const inquirer = require("inquirer");

const fs = require('fs');

const generateMarkdown = require('./src/generateMarkdown.js');

// array of questions for user
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project:',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How does someone install this project?',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter a description of how someone can install this project!');
                    return false; 
                }
            }
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
            message: 'Enter the link to the Github Repository for this project (Required):',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter a link!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'useage',
            message: 'How will this project be used? (useage)',
            validate: useageInput => {
                if (useageInput) {
                    return true;
                } else {
                    console.log('Please describe how this project can be used!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the authors name? (Enter other contributors later)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the authors name!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the authors github username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the authors github username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List the collaborators on the projects: (with GitHub links)',
            validate: creditInput => {
                if (creditInput) {
                    return true;
                } else {
                    console.log('Please enter at least one collaborator or third-party asset!');
                    return false; 
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the license on this project?',
            choices: ['Apache', 'Boost', 'BSDv3', 'BSDv2', 'CCO', 'EPLv1', 'Mozilla', 'GNUv3', 'MIT', 'Perl', 'Unlicensed']
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write out some tests for this application (optional):'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the authors email?',
            validate: creditInput => {
                if (creditInput) {
                    return true;
                } else {
                    console.log('Please enter at least one mode of contact!');
                    return false; 
                }
            }
        }
    ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README file has been created!")
    })
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then (data => {
        const generateData = generateMarkdown(data);
        writeToFile('./dist/README.md', generateData);
    });

};

// function call to initialize program
init();