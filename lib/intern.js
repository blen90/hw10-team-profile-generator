const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, position, school){
        super(name,id, email);
        this.position = "Intern";
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern;