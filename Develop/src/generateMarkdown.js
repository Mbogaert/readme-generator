// function to generate markdown for README
const generateMarkdown = (fileName, data) => {
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

module.exports = generateMarkdown;
