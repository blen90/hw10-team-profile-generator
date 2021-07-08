const employee = require("./employee.js");

class Intern extends employee {
    constructor(name, id, email, school){
        super(name,id, email);
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
    getschool(){
        return this.school
    }
}

module.exports = Intern;