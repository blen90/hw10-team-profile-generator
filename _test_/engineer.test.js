const Engineer = require("./lib/Engineer")
const Employee = require("../lib/Employee")

describe ("Engineer", () => {
    it("Should add a new role of engineer to the team", () => {
        let name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let role = "Engineer";
        let githubUsername = "blen90";

    const engineer = new engineer (name, id, email, role, githubUsername);
    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.role).toEqual(role);
    expect(engineer.githubUsername).toEqual(githubUsername);
    })
    

})