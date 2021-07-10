const Employee = require("../lib/Employee");

describe ("Employee", () => {
        it("Should add new to the team", () => {
            let name = "";
            let id = 12;
            let email = "";
            let position = "";

            const employee = new Employee (name, id, email, position);
            // expect(engineer instanceof Employee).toEqual(true);
            expect(employee.name).toEqual(name);
            expect(employee.id).toBe(id);
            expect(employee.email).toBe(email);
            expect(employee.position).toBe(position);
            
    

        })
    })

