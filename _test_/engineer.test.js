const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe ("Engineer", () => {
    it("Should add new engineer to the team", () => {
        const name = "Blenda";
        let id = 12;
        let email = "blenda@gmail.com";
        let position = "Manager";
        let githubUsername = "blen90";

        const engineer = new Engineer(name, id, email, position, githubUsername);
        expect(engineer instanceof Employee).toEqual(true);
        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.position).toEqual(position);
        expect(engineer.githubUsername).toEqual(githubUsername);

    });
    
    // })
    })

    //     let id = 12;
    //     let email = "blenda@gmail.com";
    //     let position = "Manager";
    //     let githubUsername = "blen90";

    // const engineer = 
    // expect(engineer instanceof Employee).toEqual(true);
   
    
   
    

