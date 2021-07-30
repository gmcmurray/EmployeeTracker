const uuid = require("../middleware/uuid")
// const dbfile = path.join(__dirname,'../db/db.json');
class Department{
    constructor(nname){
        this.id_dept=uuid();
        this.nname=nname;
    }
    getId(){
        return this.id_dept;
    }
    getDeptName(){
        return this.nname;
    }
}

module.exports = Department