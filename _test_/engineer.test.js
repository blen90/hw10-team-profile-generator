const Employee = require("../lib/Employee")
const Engineer = require("./lib/Engineer")


describe ("Engineer", () => {
    it("Should add a new role of engineer to the team", () => {
        let name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let role = "Engineer";
        let githubUsername = "blen90";

    const engineer = new Engineer (name, id, email, role, githubUsername);
    expect(engineer instanceof Employee).toEqual(true);
    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.role).toEqual(role);
    expect(engineer.githubUsername).toEqual(githubUsername);
    })
    

})