const Employee = require("./lib/Employee.js");

class Manager extends EMployee {
    constructor(name, id,email, office){
        super(name, id, email)
        this.office  = office;
    }

    getRole(){
        return "Manager";
    }
    getOffice(){
        return this.office
    }
}

module.exports = Manager;