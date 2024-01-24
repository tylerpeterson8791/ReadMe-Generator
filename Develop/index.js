//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        validate: function (input) {
            // Check if the input is not blank.  If the input isn't .trim() then multiple blank spaces will still register an input.  Adding to all required fields.  This forces the user to answer selected required questions.
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
            //force these into values to use on generateMarkdown
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
   
    {
        type: "input",
        message: "What were steps needed to install your project?",
        name: "installSteps",
        validate: function (input) {
            return input.trim() !== "" || "Required field. Please enter response.";
        },
    },

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
        name: "howToContrib",
    },
    {
        type: "input",
        message: "Do you have any test instructions?",
        name: "testInstructions",
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
    .then((data) => {
        fs.writeFile("MyReadMe.md", generateMarkdown(data),
        (err) => (err ? console.error(err) : console.log("Success!"))
    )
    });


//Function to initialize app
function init() { }

// Function call to initialize app
init();