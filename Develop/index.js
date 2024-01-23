// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projTitle",
        validate: function (input) {
            // Check if the input is not blank.  If the input isn't .trim() then multiple blank spaces will still register an input.  Adding to all required fields.
            return input.trim() !== "" || "Required field. Please enter response.";
        },
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "gitHubUser",
        validate: function (input) {
            return input.trim() !== "" || "Required field. Please enter response.";
        },
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: function (input) {
            return input.trim() !== "" || "Required field. Please enter response.";
        },
    },
    {
        type: "list",
        message: "Choose a license:",
        choices: [
            { value: "Apache License (ASF)" },
            { value: "Berkley License (BSD)" },
            { value: "Creative Commons License (CC)" },
            { value: "General Public License (GNU)" },
            { value: "MIT License" },
            { value: "NONE (No License)" },
        ],
        name: "license",
    },
    //description section below.  Broken down into four prompts
    {
        type: "input",
        message: "What was your motivation for your project?",
        name: "descMotivation",
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "descWhyBuild",
    }, {
        type: "input",
        message: "What problem does it solve?",
        name: "descProbSolve",
    }, {
        type: "input",
        message: "What did you learn?",
        name: "descLearn",
    },
    //For the installation below I'm initially going to leave this as one question.  Maybe there's a way to prompt next step or something?  That may be too ambitious for this.
    {
        type: "input",
        message: "What were steps needed to install your project?",
        name: "installSteps",
        validate: function (input) {
            return input.trim() !== "" || "Required field. Please enter response.";
        },
    },

    //Usage below.  Broken into 3 questions with the first being most important.  If I have time figure out a way to prompt screenshots if possible.
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usageInfo",
        validate: function (input) {
            return input.trim() !== "" || "Required field. Please enter response.";
        },
    },
    {
        type: "input",
        message: "Do you have any contribution guidelines?",
        name: "usageContrib",
    },
    {
        type: "input",
        message: "Do you have any test instructions?",
        name: "usageTest",
    },

    {
        type: "input",
        message: "Credits for you project.  List collaborators, third-party assets used and tutorials",
        name: "credits",
        validate: function (input) {
            return input.trim() !== "" || "Required field. Please enter response.";
        },
    },

])

    // Write README file using arrow function. Write to MyReadMe doc and call generateMarkdown from generateMarkdown.js
    // Plugged in console log for error or success to test if this is working.
    .then((response) => fs.writeFile("MyReadMe.md", generateMarkdown(response),
        (err) => (err ? console.error(err) : console.log("Success!"))
    )
    );


//Function to initialize app
function init() { }

// Function call to initialize app
init();





//CAN USERS INPUT PICTURES IN INQUIRER????


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
