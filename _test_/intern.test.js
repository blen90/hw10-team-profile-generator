const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe ("Intern", () => {
    it("Should add school to intern", () => {
        let name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let position = "Intern";
        let school = "University of Minnesota";

    const intern = new Intern (name, id, email, position, school);
    expect(intern instanceof Employee).toEqual(true);
    expect(intern.name).toEqual(name);
    expect(intern.id).toEqual(id);
    expect(intern.email).toEqual(email);
    expect(intern.position).toEqual(position);
    expect(intern.school).toEqual(school);
    })
    

})