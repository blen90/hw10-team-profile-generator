const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, position, githubUsername){
        super(name, id, email, position);
  
        this.githubUsername = githubUsername;
    }
    getGithub(){
        return this.githubUsername
    }
}

module.exports = Engineer;