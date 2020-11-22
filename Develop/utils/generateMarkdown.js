// function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}

  # Description
  
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
}

module.exports = generateMarkdown;
