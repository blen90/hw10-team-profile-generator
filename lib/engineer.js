const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, position, githubUsername){
        super(name,id, email);
        this.position = "Engineer";
        this.github = githubUsername;
    }

    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer;