const uuid = require("../middleware/uuid")
// const dbfile = path.join(__dirname,'../db/db.json');
class Employee{
    constructor(first_name,last_name,manager_id,role_id){
        this.id_employee=uuid();
        this.first_name=first_name;
        this.last_name=last_name;
        this.manager_id=manager_id;
        this.role_id=role_id
    }
    getId(){
        return this.id_employee;
    }
    getFirstName(){
        return this.first_name;
    }
    getLastName(){
        return this.last_name;
    }
    getManagerId(){
        return this.manager_id;
    }
    getRole(){
        return this.role_id;
    }
}

module.exports = Employee