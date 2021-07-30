const uuid = require("../middleware/uuid")
// const dbfile = path.join(__dirname,'../db/db.json');
class Role{
    constructor(title,salary,department_id){
        this.id_role=uuid();
        this.title=title;
        this.salary=salary;
        this.department_id=department_id;
    }
    getId(){
        return this.id_role;
    }
    getTitle(){
        return this.title;
    }
    getSalary(){
        return this.salary;
    }
    getDeptId(){
        return this.department_id;
    }
}

module.exports = Role