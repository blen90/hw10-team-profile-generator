const employee = require("./employee.js");

class Intern extends employee {
    constructor(name, id, email, school){
        super(name,id, email);
        this.school = school;
    }
    getschool(){
        return this.school
    }
}

module.exports = Intern;