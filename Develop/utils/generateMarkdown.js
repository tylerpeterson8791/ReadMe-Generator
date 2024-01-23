//Declare variables globally
let badgeSyntax
let licenseLink
let licenseSection



//This function matches the corresponding ReadMe Syntax Ready Badge
function renderLicenseBadge(license) {
  let badgeSyntax = "";

  if (license === "Apache License (ASF)") {
    badgeSyntax = "![License Badge ASF](https://img.shields.io/badge/License-Apache-yellow.svg)";
  } else if (license === "Berkley License (BSD)") {
    badgeSyntax = "![License Badge BSD](https://img.shields.io/badge/License-BSD-yellow.svg)";
  } else if (license === "Creative Commons License (CC)") {
    badgeSyntax = "[![License Badge CC0](https://img.shields.io/badge/License-CC0-yellow.svg)]";
  } else if (license === "General Public License (GNU)") {
    badgeSyntax = "![License Badge GNU](https://img.shields.io/badge/License-GNU-yellow)";
  } else if (license === "MIT License") {
    badgeSyntax = "![License Badge MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "NONE (No License)") {
    badgeSyntax = "";
  }
  return badgeSyntax;
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// It'll probably be best to do a if/else and have the links for all my options pop into a variable linkLicense.  This ties to #6 on previous page.
function renderLicenseLink(license) {
  let licenseLink = "";

  if (license) {
    if (license === "Apache License (ASF)") {
      licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
    }
    else if (license === "Berkley License (BSD)") {
      licenseLink = "https://choosealicense.com/licenses/bsd-3-clause/";
    }
    else if (license === "Creative Commons License (CC)") {
      licenseLink = "https://choosealicense.com/licenses/cc0-1.0/";
    }
    else if (license === "General Public License (GNU)") {
      licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
    }
    else if (license === "MIT License") {
      licenseLink = "https://choosealicense.com/licenses/mit/";
    }
    else if (license === "NONE (No License)") {
      licenseLink = "";
    }
  }
  return licenseLink;

}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Here is where we smash together a message 'Licensed by' + Link + Name of License
// Should be fairly straightforward
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license) {licenseSection = `${renderLicenseBadge(license)}   Licensed under ${license}  ${renderLicenseLink(license)}`}
  return licenseSection;
}




// TODO: Create a function to generate markdown for README
// Below is the outline from the Professional README Guide.
//is the Table of contents the correct syntax?


function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  
  ${data.descMotivation}<br/>
  ${data.descWhyBuild}<br/>
  ${data.descProbSolve}<br/>
  ${data.descLearn}
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#contributing)
  - [Tests](#tests)
  - [Contact](#contact)

  ## Installation
  
  ${data.installSteps}
  
  ## Usage
  
  ${data.usageInfo}
  
  
  ## Credits

  ${data.credits}

  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing

  ${data.howToContrib}
  
  ## Tests

  ${data.testInstructions}
  
  ## Contact

  GitHub profile: [www.github.com/${data.gitHubUser}/](https://www.github.com/${
    data.gitHubUser}/)
  
  Email address: ${data.email}
   
`;
}

module.exports = generateMarkdown;