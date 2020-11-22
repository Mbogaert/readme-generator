const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [fileName, data] = profileDataArgs;

// // array of questions for user
// const questions = [

// ];

// // function to write README file
const writeToFile = (fileName, data) => {
    return `
  # ${data}

  # Description
    ${fileName}
  
  # Table of Contents (Optional)

  # Installation

  # Usage

  # Credits

  # License

  # Badges (Optional)

  # Features

  # Contributing

  # Tests (Extra)

`;
};

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


fs.writeFile('./utils/README.md', writeToFile(fileName, data), err => {
    if (err) {
      return console.log(err);
    }
    console.log('README file created!')
  });