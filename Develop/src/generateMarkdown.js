// function to generate markdown for README
const generateMarkdown = (fileName, data) => {
    return `
  # ${data}

  # Description (purpose)
    ${fileName}
  
  # Table of Contents (Optional)

  # Installation

  # Built With

  # Website

  # Usage

  # Contributions
  Made with Pride by (author)
  Other contributions below

  # License

`;
};

module.exports = generateMarkdown;
