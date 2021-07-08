const employee = require("./employee.js");

class Intern {
    constructor(nameInt, idInt,emailInt, github){
        this.name = nameInt;
        this.id = idInt;
        this.email = emailInt;
        this.school= school;
    }
    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getGithub(){
        return this.github
    }
}

module.exports = Intern;