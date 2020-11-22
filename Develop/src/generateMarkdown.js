// function to generate markdown for README
const generateMarkdown = (data) => {
    return `
  # ${data.title}

  # Description (purpose)
    ${data.description}
  
  # Table of Contents (Optional)

  # Installation
  ${data.installation}

  # Built With
  ${data.builtWith}

  # Website
  ${data.link}

  # Usage
  ${data.usage}

  # Contributions
  Made with Pride by ${data.name}
  Other contributions:
  ${data.credits}

  # License
  ${data.license}

`;
};

module.exports = generateMarkdown;
