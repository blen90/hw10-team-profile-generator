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

    

    //Test that when you instatiate a new instance if all the properties are being declared. 

//     const Engineer = require("../lib/Engineer");

// test("Can set GitHUb account via constructor", () => {  
// const testValue = "GitHubUser";  
// const e = new Engineer("Foo", 1, "test@test.com", testValue);  expect(e.github).toBe(testValue);});