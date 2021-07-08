const employee = require("./employee.js");

class Engineer {
    constructor(nameEng, idEng,emailEng, github){
        this.name = nameEng;
        this.id = idEng;
        this.email = emailEng;
        this.github = githubUsername;
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

module.exports = engineer;