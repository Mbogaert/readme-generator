// function to generate markdown for README
const generateMarkdown = (data) => {
    return `
  # ${data.title}
  ![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)

  # Description
  ${data.description}
  
  # Table of Contents:
    * [Description](#description)
    * [Installation](#installation)
    * [Built With](#built-with)
    * [Repository](#repository)
    * [Usage](#usage)
    * [Contributions](#contributions)
    * [License](#license)

  # Installation
  ${data.installation}

  # Built With
  ${data.builtWith}

  # Repository
  [Repository Link](${data.link})

  # Useage
  ${data.useage}

  # Contributions
  Made with Pride by ${data.name}
  Other contributions:
  ${data.credits}

  # License
  This application is covered by the ${data.license} license. 

  # Tests
  ${data.tests}

  # Questions
  If you have any questions about this project, the author can be contacted on their GitHub page: [Github User Link](https://github.com/${data.github})
  Or via email: ${data.email}
  
`;
};

module.exports = generateMarkdown;
