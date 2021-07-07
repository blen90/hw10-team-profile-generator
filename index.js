//require main packages

const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('../../inclass/02-Homework/Main/lib/Manager');

//constants to requiere employee classes

// const manager = require('./lib/manager');
// const engineer = require('./lib/engineer');
// const intern = require('./lib/intern');

  
function team() {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of employee would you like to add?",
            name: "employees",
            choices: ["Manager", "Engineer", "Intern", "I don't want to add more team members"]
    
        }
    ])
    newManager();
    newEngineer();
    newIntern();
    
}

function newManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name",
        },
        {
            type:"input",
            messagae: "What is the manager's ID number?",
            name: "id",
        },
        {
            type:"input",
            messagae: "What is the manager's e-mail adress?",
            name: "email",
        },
        {
            type:"input",
            messagae: "What is the manager's office number?",
            name: "office",
        },
    ]);
}

function newEngineer () {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "nameEng",
        },
        {
            type:"input",
            messagae: "What is the engineer's ID number?",
            name: "idEng",
        },
        {
            type:"input",
            messagae: "What is the engineer's e-mail adress?",
            name: "emailEng",
        },
        {
            type:"input",
            messagae: "What is the engineer's office number?",
            name: "officeEng",
        },
    ]);
}


function newIntern () {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "nameInt",
        },
        {
            type:"input",
            messagae: "What is the intern's ID number?",
            name: "idInt",
        },
        {
            type:"input",
            messagae: "What is the intern's e-mail adress?",
            name: "emailInt",
        },
        {
            type:"input",
            messagae: "What school does the intern attend?",
            name: "school",
        },
    ]);
}

team();


