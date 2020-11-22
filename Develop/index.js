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

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
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
            message: 'Enter the GitHub link to your project. (Required)',
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
            message: 'What is the authors name? (Enter other contributors after)',
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
            type: 'input',
            name: 'license',
            message: 'What is the license on this project?',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter a license!');
                    return false; 
                }
            }
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