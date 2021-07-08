class Employee {
    constructor(name, id,email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.office  = this.office;
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
}

module.exports = Employee;