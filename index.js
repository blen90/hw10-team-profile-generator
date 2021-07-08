//require main packages

const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('../../inclass/02-Homework/Main/lib/Manager');

let team = [];
//constants to requiere employee classes

const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");


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


function Employee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employees's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the employees's ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the employees's e-mail adress?",
            name: "email",
        },
        {
            type: "list",
            message: "What is your job position?",
            name: "position",
            choices: ["Manager", "Engineer", "Intern"]
        }


    ]).then(function (Employee) {
        if (Employee.position === "Manager") {
            newManager(Employee);
        } else if (Employee.position === "Engineer") {
            newEngineer(Employee);
        } else if (Employee.position === "Intern") {
            newIntern(Employee);
        }

    })
}

Employee();

    function newManager(employeeAnswers) {
        inquirer.prompt([

        {
            type: "input",
            message: "What is the manager's office number?",
            name: "office",
        },
    ]).then(function (answers) {
        console.log("ANSWERS", answers)
        let manager = new Manager(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, answers.office)
        console.log("NEW MANAGER", manager);
        team.push(manager)
        addEmployee();
    })
}

    function newEngineer() {
        inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's Github Username?",
            name: "githubUsername",
        },

    ]).then(function (answers) {
        console.log("ANSWERS", answers)
        let engineer = new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, answers.githubUsername)
        console.log("NEW ENGINEER", engineer);
        team.push(engineer)
        addEmployee();
    })
}



        function newIntern() {
            inquirer.prompt([

                {
                    type: "input",
                    message: "What school does the intern attend?",
                    name: "school",
                },
            ]).then(function (answers) {
                console.log("ANSWERS", answers)
                let intern = new Intern(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, answers.school)
                console.log("NEW INTERN", intern);
                team.push(intern)
                addEmployee();

            })
        }
        

            function addEmployee() {
                inquirer.prompt([
                    {
                        type: "confirm",
                        name: 'addEmployee',
                        message: "Would you like to add another employee to the team?"
                    }
                ]).then(function (answers) {
                    if (answers.addEmployee) {
                        Employee();
                    } else {
                        // Render the team to the html page
                        let teamHTML = render(team);

                        // fs.writeFile(outputPath, teamHTML, )
                    }
                })
            }

            // team();


            // newEngineer();
            // newIntern();

            //create boiler plate
            // create html for the card

            //start - put boiler plate html


            let finalHTML = [];

            const startHtml = () => {
                finalHTML +=
                    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My team</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <!--  Jumbotron with My Team  -->
    <div class="jumbotron text-center">
            <h1 class="display-4">Blenda's team</h1>
        </div>
    

   `;
                //cards for employees
                const addEmployee = (answers) => {
                    employeeList.forEach(emp => {
                        finalHtml += `
        <div class="card">
        ${employee.getName}
        ${employee.getId}
        ${employee.getEmail}
        </div>
        `;
                        })

                    
                //Card for manager role
                const addManager = manager => {
                    finalHtml += `
    <div class="team-cards col-9 d-flex justify-content-center">
    <div class="team-card mb-3" style="width: 18rem;">
        <div class="card-header">
            <h2 class="card-name">${manager.getName}</h2>
            <h3 class="card-position"><i class="fas fa-mug-hot">${manager.getRole}</i></h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId}</li>
                <li class="list-group-item">E-mail <a href="mailto:${manager.getEmail}">${manager.getEmail}</a></li>
                <li class="list-group-item">Office number: ${manager.getOffice}</li>
            </ul>
        </div>`;
                };
                

                //cards for engineer role
                const addEngineer = engineer => {
                    finalHtml += `
    <div class="team-cards col-9 d-flex justify-content-center"></div>
<div class="team-card" style="width: 18rem;">
    <div class="card-header">
        <h2 class="card-name">${engineer.getName}</h2>
        <h3 class="card-position"><i class="fas fa-glasses">${engineer.getRole}</i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId}</li>
            <li class="list-group-item">E-mail <a href="mailto:${engineer.getEmail}">${engineer.getEmail}</a></li>
            <li class="list-group-item">Github<a href="https://github.com/${engineer.getGithub}" target="_blank">${engineer.getGithub}</a></li>
        </ul>
    </div>

    <div class="team-cards col-9 d-flex justify-content-center"></div>
    <div class="team-card" style="width: 18rem;">
        <div class="card-header">
            <h2 class="card-name">${engineer.getName}</h2>
            <h3 class="card-position"><i class="fas fa-glasses">${engineer.getRole}</i></h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId}</li>
                <li class="list-group-item">E-mail <a href="mailto:${engineer.getEmail}">${engineer.getEmail}</a></li>
                <li class="list-group-item">Github<a href="https://github.com/${engineer.getGithub}" target="_blank">${engineer.getGithub}</a></li>
            </ul>
        </div>

        <div class="team-cards col-9 d-flex justify-content-center"></div>
        <div class="team-card" style="width: 18rem;">
            <div class="card-header">
                <h2 class="card-name">${engineer.getName}</h2>
                <h3 class="card-position"><i class="fas fa-glasses">${engineer.getRole}</i></h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId}</li>
                    <li class="list-group-item">E-mail <a href="mailto:${engineer.getEmail}">${engineer.getEmail}</a></li>
                    <li class="list-group-item">Github<a href="https://github.com/${engineer.getGithub}" target="_blank">${engineer.getGithub}</a></li>
                </ul>
            </div>
    `;
                };
                //card for intern role
                const addIntern = intern => {
                    finalHtml += `
        <div class="team-card" style="width: 18rem;">
    <div class="card-header">
        <h2 class="card-name">${intern.getName}</h2>
        <h3 class="card-position"><i class="fas fa-user-graduate">${intern.getRole}</i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId}</li>
            <li class="list-group-item">E-mail <a href="mailto:${intern.getEmail}">${intern.getEmail}</a></li>
            <li class="list-group-item">School: ${intern.getSchool}</li>
        </ul>
    </div>
        `;
                };
            const endHtml = () => {
            finalHTML +=
                                            `
    </body>
    </html>
    `;
            }
                                    }
                                }
