const User = require('./User'); //Importt the parents class

class Admin extends User{
    constructor(name,email,role) {
        super(name, email); //Call User's constructor
        this.role = role;
    }

    getAdminInfo() {
        return `${this.getInfo()} - Role: ${this.role}`;
    }
    changeRole(newRole) {
        this.role = newRole;
    }
}

module.exports = Admin;