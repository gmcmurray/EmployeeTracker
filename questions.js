// Questions for inquirer
const Questions ={
    "Main Menu":[ 
            {
            type: "list",
            message: "What do you want to do? ",
            choices: ["Show Departments","Show Roles","Show Employees","Add Employee", "Add Department", "Add Role","Update Employee Role","Delete Record","Spend by Dept","Quit"],
            name: "Action"
        }],

    "Delete Record":[
            { 
            type:"list",
            message: "In which table is the object you would like to delete  ?",
            choices: ['department','role','employee','Main Menu'],
            name: "Action"
        }],

    "Select ID": [
            {
            type:"input",
            message: "What is the ID you want to delete?",
            name: "id"
        }],

    "Add Role": [
            {
            type:"input",
            message: "What is new Role Title?",
            name: "roleTitle"
        },
        {
            type:"input",
            message: "What is new Salary (integer) for the Role?",
            name: "roleSalary"
        },
        {
            type:"input",
            message: "Which is Department ID is the Role in (check table above)?",
            name: "roleDeptid"
        }],

    "Add Role1":[
        {
            type:"confirm",
            message: "Will new role require a NEW Department?",
            name: "roleDeptreq"
        }
    ],

    "Add Department" :  [
        {
            type:"input",
            message: "What is new Dept Title?",
            name: "DeptTitle"

        }],

    "Update Employee Role":
        [{
            type:"input",
            message: "Which is the Employee ID you want to change roles?",
            name: "EmployeeId"
        },
        {
        type:"input",
        message: "Enter new Role ID for employee - (if new role create ibefore continuing)",
        name: "NewRoleId"
    }],

    "Delete Role":
    [{
        type:"input",
        message: "Which Role record would you like to DELETE?",
        name: "Action"
    }],

    "Delete Dept" :[
        {
        type:"input",
        message: "Which Department would you like to DELETE?",
        name: "Action"
    }],

    "Add Employee" :[ 
        {
            type:"input",
            message: "What is Employee First name?",
            name:"FirstName"
            },
        {
            type:"input",
            message: "What is Employee last name?",
            name:"LastName"
            },
        {
            type:"input",
            message: "Enter is Employee's Manager emp id (if no manager enter NULL) ?",
            name:"ManagerID"   
            }
        ],

    "Employee2":[
            {
        type:"input",
        message: "Input is Employee's Role id  (see table above)?",
        name:"RoleID"
        }
    
    ],
    "New Dept Required" :[ {
        type:"confirm",
        message:"Is new Dept. Required?",
        name:"NewDeptReq"

    }],
    "New Role Required" :[ {
        type:"confirm",
        message:"Is new Role Required?",
        name:"NewRoleReq"
    }]

}

module.exports = Questions