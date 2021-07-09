const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id,email, position , office){
        super(name, id, email)
        this.position = "Manager";
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