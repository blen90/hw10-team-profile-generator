
const Employee = require("../lib/Employee")

describe ("Employee", () => {

    it("Should add a new employee to the team"), () => {
        let name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let role = "Manager";
    
    const employee = new Employee (name, id, email, role);
    expect(employee.name).toEqual(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toEqual(email);
    expect(employee.role).toEqual(role);
    }
    })