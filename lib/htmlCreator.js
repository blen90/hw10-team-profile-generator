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
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!--  Jumbotron with My Team  -->
    <div class="jumbotron text-center">
            <h1 class="display-4">Blenda's team</h1>
        </div>
        `;
};

function teamMembers(employeeList) {

    console.log("TEAM MEMBER", employeeList)
    finalHtml += `<div class="team-cards col-9 d-flex justify-content-center">`;

    employeeList.forEach(employee => {
        console.log("MANAGER FOR EACH", employee)
        if (employee.position === "Manager") {
            finalHtml += `
                <div class="team-card m-5" style="width: 18rem;">
                    <div class="card-header text-center">
                        <h2 class="card-name">${employee.name}</h2>
                        <h3 class="card-position"><i class="fas fa-mug-hot">  ${employee.position}</i></h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">E-mail: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">Office number: ${employee.office}</li>
                        </ul>
                    </div>
                </div>
            `;
        }


        else if (employee.position === "Engineer") {
            finalHtml += `
                <div class="team-card m-5" style="width: 18rem;">
                    <div class="card-header text-center">
                        <h2 class="card-name">${employee.name}</h2>
                        <h3 class="card-position"><i class="fas fa-glasses">  ${employee.position}</i></h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">E-mail: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
                        </ul>
                     </div>
                </div>
    `;
            }

        else if (employee.position === "Intern") {
            finalHtml += `
                <div class="team-card m-5" style="width: 18rem;">
                    <div class="card-header text-center">
                        <h2 class="card-name">${employee.name}</h2>
                        <h3 class="card-position"><i class="fas fa-user-graduate">  ${employee.position}</i></h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">E-mail: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">School: ${employee.school}</li>
                         </ul>
                    </div>
                </div>
            `;
                };
            })
 

        }


const build = (employeeList) => {
    startHtml();
    teamMembers(employeeList);

    finalHtml += `
    </body>
    </html>
    `
    //pass endOfHtml here
    return finalHtml;
}

module.exports = {
    build
}