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
    ]).then(choice => {
        if(choice.employees === "Manager") {
        newManager();
    }else if(choice.employees === "Engineer") {
        newEngineer();
    }else if(choice.employees === "Intern"){
        newIntern();
    // }else (choice.employees === "I don't want to add more team members")
    }

    });
   
    
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
            message: "What is the manager's ID number?",
            name: "id",
        },
        {
            type:"input",
            message: "What is the manager's e-mail adress?",
            name: "email",
        },
        {
            type:"input",
            message: "What is the manager's office number?",
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
            message: "What is the engineer's e-mail adress?",
            name: "emailEng",
        },
        {
            type:"input",
            message: "What is the engineer's Github Username?",
            name: "githubUsername",
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
            message: "What is the intern's ID number?",
            name: "idInt",
        },
        {
            type:"input",
            message: "What is the intern's e-mail adress?",
            name: "emailInt",
        },
        {
            type:"input",
            message: "What school does the intern attend?",
            name: "school",
        },
    ]);
}

team();


// newEngineer();
// newIntern();
