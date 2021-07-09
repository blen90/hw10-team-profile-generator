           // team();


            // newEngineer();
            // newIntern();

            //create boiler plate
            // create html for the card

            //start - put boiler plate html

let finalHtml = [];

const startHtml = () => {
    finalHtml += `<!DOCTYPE html>
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
};

function teamMembers(employeeList) {
    finalHtml += `<div class="team-cards col-9 d-flex justify-content-center">`;

    employeeList.forEach( employee => {
        if( employee.position === "Manager" ){
            finalHtml += `
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
                    </div>
                </div>
            `;
        }


    employeeList.forEach( employee => {
        if( employee.position === "Engineer" ){
            finalHtml += `
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
    
         employeeList.forEach( employee => {
            if( employee.position === "Intern" ){
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
    })
    finalHtml += "</div>"
        })
    })
}
        
        

// Push finalHtml functions to file
// finalHtml.push(startHtml)
// finalHtml.push(teamMembers
//     .filter(employee =>getRole() === "Manager")
//     .map(manager => addManager(manager))
//     );
//     finalHtml.push(teamMembers
//         .filter(employee =>getRole() === "Engineer")
//         .map(engineer => addEngineer(engineer))
//         .join("")
//         );
//     finalHtml.push(teamMembers
//         .filter(employee =>getRole() === "Intern")
//         .map(intern => addIntern(intern))
//         .join("")
//         );
    
// finalHtml.push(endHtml );



const build = (employeeList) => {
    startHtml();
    teamMembers(employeeList);
    //pass endOfHtml here
    return finalHtml;
}

module.exports = {
    build
}