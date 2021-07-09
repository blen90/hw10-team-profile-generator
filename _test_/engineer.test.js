const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe ("Engineer", () => {
    it("Should add a new position of engineer to the team", () => {
        let name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let position = "Engineer";
        let githubUsername = "blen90";

    const engineer = new Engineer (name, id, email, position, githubUsername);
    expect(engineer instanceof Employee).toEqual(true);
    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toEqual(email);
    expect(engineer.position).toEqual("Engineer");
    expect(engineer.githubUsername).toEqual("blen90");
    })
    

})