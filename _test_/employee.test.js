
const Employee = require("../lib/Employee");

describe ("Employee", () => {

    it("Should add a new employee to the team", () => {
        let name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let position = "Manager";
    
    const employee = new Employee (name, id, email, position);
    expect(employee.name).toEqual(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toEqual(email);
    expect(employee.position).toEqual("Manager");
    })
    })

    //Test that when you instatiate a new instance if all the properties are being declared. 