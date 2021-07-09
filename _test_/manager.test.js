const Manager = require("./lib/Manager")
const Employee = require("../lib/Employee")

describe ("Manager", () => {
    it("Should add a new role of manager to the team", () => {
        let name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let role = "Manager";
        let office = 9;

    const manager = new Manager (name, id, email, role, office);
    expect(manager.name).toEqual(name);
    expect(manager.id).toEqual(id);
    expect(manager.role).toEqual(role);
    expect(manager.office).toEqual(office);
    })
    

})