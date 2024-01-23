// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//start by letting this variable (URL) = "" set the NONE option to "" as well OR i just have a URL pop and have an instance for each one available?
//Here's an example of a MIT badge https://img.shields.io/badge/License-MIT-yellow.svg I gotta go through and grab the naming of the others
//Create a badge URL that pops in the value with a template literal.  Maybe research some examples.  If enough time let user pick color?
// Readme syntax: ![alt text](https://img.shields.io/badge/License-MIT-yellow.svg)

// If Apache License (ASF) THEN ![License Badge ASF](https://img.shields.io/badge/License-Apache-yellow.svg)
// If Berkley License (BSD) THEN ![License Badge BSD](https://img.shields.io/badge/License-BSD-yellow.svg)
// If Creative Commons License (CC) THEN [![License Badge CC0](https://img.shields.io/badge/License-CC0-yellow.svg)]
// If General Public License (GNU) THEN = ![License Badge GNU](https://img.shields.io/badge/License-GNU-yellow)
// If MIT License THEN ![License Badge MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
// If NONE (No License) THEN ""
function renderLicenseBadge(license) {}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// It'll probably be best to do a if/else and have the links for all my options pop into a variable linkLicense.  This ties to #6 on previous page.
function renderLicenseLink(license) {}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Here is where we smash together a message 'Licensed by' + Link + Name of License
// Should be fairly straightforward
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
// Below is the outline from the Professional README Guide.
// Use this as a template for the markdown.  As I build questions pop the variables defined into here so I can keep track and run the whole thing down.


/* # <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
*/

function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
