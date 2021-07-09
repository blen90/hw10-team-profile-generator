//require main packages

const inquirer = require('inquirer');
const fs = require('fs');

let team = [];
//constants to requiere employee classes



  
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
        

        ]).then(function(Employee){
            if(Employee.position === "Manager") {
                newManager(Employee);
            }else if(Employee.position === "Engineer") {
                newEngineer(Employee);
            }else if(Employee.position === "Intern"){
                newIntern(Employee);
            }

        })
    }

Employee();

function newManager(employeeAnswers) {
    inquirer.prompt([

        {
            type:"input",
            message: "What is the manager's office number?",
            name: "office",
        },
    ]).then(function(answers) {
        console.log("ANSWERS", answers)
       let manager = new Manager (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, answers.office)
        console.log("NEW MANAGER",manager);
        team.push(manager)
        addEmployee();
    })
}

function newEngineer () {
    inquirer.prompt([
        {
            type:"input",
            message: "What is the engineer's Github Username?",
            name: "githubUsername",
        },
        
    ]).then(function(answers) {
        console.log("ANSWERS", answers)
       let engineer = new Engineer (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, answers.githubUsername)
        console.log("NEW ENGINEER",engineer);
        team.push(engineer)
        addEmployee();
    })
}


function newIntern () {
    inquirer.prompt([

        {
            type:"input",
            message: "What school does the intern attend?",
            name: "school",
        },
    ]).then(function(answers) {
        console.log("ANSWERS", answers)
       let intern = new intern (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, answers.githubUsername)
        console.log("NEW INTERN",intern);
        team.push(intern)
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
            Employee();
        } else {
            // Render the team to the html page
            let teamHTML = render(team);

            // fs.writeFile(outputPath, teamHTML, )
        }
    })
}

// team();


// newengineer();
// newIntern();

