const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name,id,email,officenumber){
        super(name,id,email)
        this.officenumber=officenumber
        this.role="Manager"
    }

    getRole(){
        return "Manager"
    }
    getOffice(){
        return this.officenumber;
    }
}

module.exports = Manager