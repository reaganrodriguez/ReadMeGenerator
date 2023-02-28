// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title} 📓    
    
  ![badge](https://img.shields.io/badge/license-${data.license}-green)   
  
  # Description
  📜   
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  # Installation
  🛠️  
  ${data.installation}
  # Usage
  💻  
  ${data.usage}
  # Contribution
  📌   
  ${data.contribution}
  # Test
  🎯 
  ${data.test}
  # License
  🛬  
  ![badge](https://img.shields.io/badge/license-${data.license}-green)

  <br />

  This application is covered by the ${data.license} license. 

  # Questions❓
  My GitHub link: [${data.username}](https://github.com/${data.username})  <br />
  
  <br />
   📩 If you have any question, email me here: maxireagan@gmail.com  <br />   <br />

 📠 My repo link: ${data.repo}</li>
 
`;
}

module.exports = generateMarkdown;
