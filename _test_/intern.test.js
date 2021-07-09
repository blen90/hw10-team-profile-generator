const Intern = require("./lib/Intern")
const Employee = require("../lib/Employee")

describe ("Intern", () => {
    it("Should add a new role of intern to the team", () => {
        let name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let role = "Intern";
        let school = "University of Minnesota";

    const intern = new intern (name, id, email, role, school);
    expect(intern.name).toEqual(name);
    expect(intern.id).toEqual(id);
    expect(intern.role).toEqual(role);
    expect(intern.githubUsername).toEqual(school);
    })
    

})