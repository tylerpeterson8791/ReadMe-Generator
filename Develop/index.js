// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
/*
Here's what we need for questions and the TYPE
1. Title of project - input
2. For the description the Guide suggests the following (all should be input):
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
3. Installation - What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (input as well)
4. Usage - Provide instructions and examples for use. Include screenshots as needed. (Is this input?  Can I prompt to upload screenshot?  Play with this one.)
 - Have fields where they can add or not the following:
    -usage information, 
    -contribution guidelines, 
    -test instructions
5. Credits - Keep this open-ended?  Collaborators?  Resources? Shoutouts? Code credits? Give the user suggestions?  Figure out how to word this part.
6. License - This one will be a list.  Pop in 3-4 common ones.  Look up the most used.
7. GitHub Username.  Input.  This question should be earlier.
8. Email address. Input.  This question should be earlier.

NOT A USER INPUT - But don't forget TABLE OF CONTENTS!


*/

const questions = [];

// TODO: Create a function to write README file
// Think about how to do this.  fs.writetoFile.  Include an error message and console log Success if correct.
// I see this code below but could do with arrow function instead?  Play with this one.
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app ???
function init() {}

// Function call to initialize app ???
init();








/*

GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents      !!!!THERE ISN'T ANY USER INPUT FOR THIS.  DONT FORGET IT!!!
THEN I am taken to the corresponding section of the README

*/
