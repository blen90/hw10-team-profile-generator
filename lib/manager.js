const employee = require("./employee.js");

class Manager {
    constructor(name, id,email, office){
        super(name, id, email)
        this.office  = office;
    }
    getOffice(){
        return this.office
    }
}

module.exports = Manager;