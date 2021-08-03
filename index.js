const inquirer = require("inquirer");
const questions = require("./questions");
const mysql = require('mysql2/promise');
const sqlqueries = require('./queries');

async function main(){
    const db = await mysql.createConnection(
      {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password
        password: 'pass',
        database: 'organization_db'
      },
      console.log(`Connected to the organization_db database.`)
    );
//  Start Questions and program
startquest(db);   


}
  
// Inquirer questions loops
async function  startquest(db){
    let ans1 = await inquirer.prompt(questions["Main Menu"]);
    let nextone = String(ans1.Action);
    console.log("ans1",nextone)
    switch (nextone) {
        case 'Add Role':
            await AddRole(db);
            startquest(db);
            break;

        case 'Add Department':
            await AddDept(db);
            startquest(db);
            break;

        case 'Add Employee':
            let ans7= await inquirer.prompt(questions["New Role Required"]);
            if(ans7.NewRoleReq){
                await AddRole(db);
            }
            console.table(await ShowEmployees(db));
            let ans5= await inquirer.prompt(questions["Add Employee"]);
            console.table(await ShowRole(db));
            let ans6= await inquirer.prompt(questions["Employee2"]);
            let param2 =[ans5.FirstName,ans5.LastName,parseInt(ans6.RoleID),parseInt(ans5.ManagerID)]
            await db.execute(sqlqueries['Add Employee'],param2)
            console.table(await ShowRole(db));
            console.table(await ShowEmployees(db));
            startquest(db);
            break;
        
        case 'Quit':
            console.log("Thanks for using the API ! ctrl c to exit");
            break;

        case 'Show Departments': case 'Show Roles': case 'Show Employees':
            console.log('made it',sqlqueries[nextone])
            let [rows,ff] =await db.execute(sqlqueries[nextone]);
            console.table(rows);
            startquest(db);
            break;

        case "Delete Record": 
            let ans9= await inquirer.prompt(questions["Delete Record"]);
            let ttable = "Show " + ans9.Action;
            let [row8,ff7] = await db.execute(sqlqueries[ttable]);
            console.table(row8)
            let ans8 = await inquirer.prompt(questions["Select ID"]);
            let param3 = [parseInt(ans8.id)]
            let sqll ="";
            switch (ans9.Action) {
                case "department":
                    sqll="Delete Department Record";
                    break;
                case "role":
                    sqll="Delete Role Record";
                    break;
                case "employee":
                    sqll="Delete Employee Record";
                    break;
                default:
                    break;
            }
            await db.execute(sqlqueries[sqll],param3);
            console.log("Item deleted")
            startquest(db);
        break;

        case "Update Employee Role":
            console.table(await ShowEmployees(db));
            let ans10 = await inquirer.prompt(questions["Update Employee Role"]);
            console.log(ans10);
            let { EmployeeId,NewRoleId } = ans10;
            let param4 = [parseInt(NewRoleId), parseInt(EmployeeId)];
            console.log(param4)
            await db.execute(sqlqueries["Update Role"],param4);
            console.table(await ShowEmployees(db));
            startquest(db);
        break;

        case "Spend by Dept":
            let [SpendRpt,f12] = await db.execute(sqlqueries["Spend by Dept"]);
            console.table(SpendRpt);
            startquest(db);
        break;
    
        default:

        break;
    }
  
}

// Helper - aggregate Functions for running queries
async function ShowEmployees(db){
    let [emplist,f11] = await db.execute(sqlqueries["Show Employees"]);
    return emplist;
}

async function ShowRole(db){
    let [rolelist,f8]= await db.execute(sqlqueries["Show Roles"]);
    return rolelist;
}

async function AddDept(db) {
    let ans2= await inquirer.prompt(questions["Add Department"]);
            console.log(ans2);
            let param1  = [String(ans2.DeptTitle)];
             await db.execute(sqlqueries['Add Department'],param1)
            let [deplist,ffield] = await db.execute(sqlqueries["Get Departments"])
            console.table(deplist)
           
}

async function AddRole(db){
    let ans4= await inquirer.prompt(questions["Add Role1"]);
    if(ans4.roleDeptreq){
            await AddDept(db);
    }

    let [deptlist,fff]= await db.execute(sqlqueries["Get Departments"])
    console.table(deptlist)
    let ans3= await inquirer.prompt(questions["Add Role"]);
    console.log("ans3",ans3);
    
    
    let param = [ans3.roleTitle,ans3.roleSalary,parseInt(ans3.roleDeptid)]
    console.log("param",param);
        await db.execute(sqlqueries["Add Role"],param);
    let [newrole,ffff] = await db.execute(sqlqueries["Show Roles"]);
    console.table(newrole);
}


// Run main

main();
