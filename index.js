//require main packages

const inquirer = require('inquirer');
const fs = require('fs');

//constants to requiere employee classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern= require("./lib/Intern");

const { build } = require("./lib/htmlCreator");

let team = [];



// function team() {
//     inquirer.prompt([
//         {
//             type: "list",
//             message: "What type of employee would you like to add?",
//             name: "employees",
//             choices: ["Manager", "Engineer", "Intern", "I don't want to add more team members"]
    
//         }
//     ]).then(choice => {
        

//     });
   
    
    function newEmployee() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the employees's name?",
                name: "name",
            },
            {
                type:"input",
                message: "What is the employees's ID number?",
                name: "id",
            },
            {
                type:"input",
                message: "What is the employees's e-mail adress?",
                name: "email",
            },
        {
            type: "list",
            message: "What is your job position?",
            name: "position",
            choices: ["Manager", "Engineer", "Intern"]
        }
        

        ]).then(function(newEmployee){
            if(newEmployee.position === "Manager") {
                newManager(newEmployee);
            }else if(newEmployee.position === "Engineer") {
                newEngineer(newEmployee);
            }else if(newEmployee.position === "Intern"){
                newIntern(newEmployee);
            }

        })
    }

function newManager(employeeAnswers) {
    console.log("NEW MANAGER", employeeAnswers)
    inquirer.prompt([

        {
            type:"input",
            message: "What is the manager's office number?",
            name: "office",
        },
    ]).then(function(answers) {
        console.log("ANSWERS", answers)
       let manager = new Manager (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.position, answers.office)
        console.log("NEW MANAGER WITH NUMBER",manager);
        team.push(manager);
        addEmployee();
    })
}


function newEngineer (employeeAnswers) {
    inquirer.prompt([
        {
            type:"input",
            message: "What is the engineer's Github Username?",
            name: "githubUsername",
        },
        
    ]).then(function(answers) {
        console.log("ANSWERS", answers)
       let engineer = new Engineer (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.position, answers.githubUsername)
        console.log("NEW ENGINEER",engineer);
        team.push(engineer);
        addEmployee();
    })
}


function newIntern (employeeAnswers) {
    inquirer.prompt([

        {
            type:"input",
            message: "What school does the intern attend?",
            name: "school",
        },
    ]).then(function(answers) {
        console.log("ANSWERS", answers)
       let intern = new Intern (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.position, answers.school)
        console.log("NEW INTERN",intern);
        team.push(intern);
        addEmployee();
    })
}

function addEmployee(){
    inquirer.prompt([
        {
            type: "confirm",
            name: 'addEmployee',
            message: "Would you like to add another employee to the team?"
        }
    ]).then(function(answers){
        if(answers.addEmployee){
            newEmployee();
        } else {
            // Render the team to the html page
            let teamHTML = build(team);

            fs.writeFile('finalHtml.html', teamHTML, (err) => {
                if(err){
                    console.log("err");
                } else {
                    console.log("finalHtml.html file created");
                }
            })
        }
    })
}


newEmployee();

