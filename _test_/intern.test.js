const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe ("Intern", () => {
    it("Should add a new position of intern to the team", () => {
        let name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let position = "Intern";
        let school = "University of Minnesota";

    const intern = new Intern (name, id, email, position, school);
    expect(intern instanceof Employee).toEqual(true);
    expect(intern.name).toEqual("Blenda");
    expect(intern.id).toEqual(12);
    expect(intern.position).toEqual("Intern");
    expect(intern.githubUsername).toEqual("University of Minnesota");
    })
    

})