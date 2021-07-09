const Employee = require("../lib/Employee");
const Manager = require("./lib/Manager")


describe ("Manager", () => {
    it("Should add office number to manager", () => {
        let name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let role = "Manager";
        let office = 9;

    const manager = new Manager (name, id, email, role, office);
    expect(manager instanceof Employee).toEqual(true);
    expect(manager.name).toEqual(name);
    expect(manager.id).toEqual(id);
    expect(manager.email).toEqual(email);
    expect(manager.role).toEqual(role);
    expect(manager.office).toEqual(office);
    })
    

})