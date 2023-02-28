const { Console } = require("console");
const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of questions for user
const ques = [ 
    {
        type: "input",
        name: "title",
        message: "What is the TITLE of your project ?"
    },
    
    {
        type: "input",
        name: "description",
        message: "ENTER your DESCRIPTION "
    },
    
    {
        type: "input",
        name: "installation",
        message: "How do you want to INSTALL it?"
    },
    
    {
        type: "input",
        name: "usage",
        message: "How do you USE it?"
    },
    
    {
        type: "input",
        name: "contribution",
        message: "What is your CONTRIBUTION for this project?"
    },
    
    {
        type: "input",
        name: "test",
        message: "How do you RUN this test?"
    },
    
    {
        type: "list",
            message: "what is your LICENSE? ",
            name: "license",
            choices: [
    
                    "Academic",
                    "GNU",
                    "ISC",
                    "MIT",
                    "Mozilla",
                    "Open",
                    "None",
                    "Apache",
    
            ]
    },
    
    {
        type: "input",
        name: "username",
        message: "What is your username for Github ?"
    },
    
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    
    {
        type: "input",
        name: "repo",
        message: "What is your github repo link?"
    },
    

];


// function to initialize program
function init() {
    inquirer.prompt(ques).then(function(info) {
        const md = generateMarkdown(info)
        fs.writeFile('README.md', md,function(errlog) {
            if(errlog) {
                console.log(errlog)
            }
  
        } )
    },

     erormsgfn => {
        console.log(`The file could not be generated `);
    })
};

// function call to initialize program
init();
