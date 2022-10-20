// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the name of your project?",
    name: "title"
},
{
    type: "input",
    message: "Why did you build this project?",
    name: "description1"
},
{
    type: "input",
    message: "What problem does it solve?",
    name: "description2"
},
{
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation"
},
{
    type: "input",
    message: "How can someone use your project?",
    name: "usage"
},
{
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
},
{
    type: "checkbox",
    message: "Did you have any collaborators?",
    choices: ["Yes", "No"],
    name: "collaborators"
},
{
    type: "input",
    message: "If yes, what are their GitHub URLs? Skip question if no.",
    name: "collabURL"
},
{
    type: "checkbox",
    message: "Which license did you use if any?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    name: "license"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!"))
}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response)=>
    writeToFile("test.md", generateMarkdown(response))
    )
}

// Function call to initialize app
init();

