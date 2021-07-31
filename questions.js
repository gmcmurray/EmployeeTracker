
const Questions ={
    "Main Menu":[ {
        type: "list",
        message: "What do you want to do? ",
        choices: ["View Reports","Add Employee", "Add Dept", "Add Role","Delete Role","Delete Dept","Modify Resources/Role","Quit"],
        name: "Action"
    }],
    "View Reports":[{ 
        type:"list",
        message: "Which Report would you like to see?",
        choices: ['Employee Roster','Department Rosters','Roles List','Spend by Department','Main Menu'],
        name: "Action"
    }],
    "Add Role":
    [{
        type:"input",
        message: "What is new Role Number?",
        name: "roleID"
    },
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
],
    "Add Dept" : 
    [{
        type:"input",
        message: "What is new Dept Number?",
        name: "DeptID"

    },
    {
        type:"input",
        message: "What is new Dept Title?",
        name: "DeptTitle"

    }
],
"Modify Resources/Role":
[{
    type:"list",
    message: "Which Resource record would you like to MODIFY?",
    choices: ['Modify Department','Modify Role','Modify Employee','Main Menu'],
    name: "Action"
}],
"Delete Resources/Role":
[{
    type:"list",
    message: "Which Resource record would you like to DELETE?",
    choices: ['Delete Department','Delete Role','Main Menu'],
    name: "Action"
}],
"New Department":[{
    type:"input",
    message:"What is title of new Department?",
    name:"Action"
},
{
    type:"list",
    message: "Are you done?",
    choices: ["Main Menu","Done"],
    name:"Action"

}],
"Add Employee" :[ {
    type:"list",
    message: "What Employee ADD are you making?",
    choices: ["New Dept and New Role","New Dept and Existing Role","Existing Dept and New Role","Existing Dept and Role","Main Menu"],
    name:"Action"
    }],
    "New Dept and New Role": [{
        type:"list",
        message: "Are you done?",
        choices: ["Main Menu","Done"],
        name:"Action"
    
    }],
    "New Dept and Existing Role":[{
        type:"list",
        message: "Are you done?",
        choices: ["Main Menu","Done"],
        name:"Action"
    
    }],
    "Existing Dept and New Role":[{
        type:"list",
        message: "Are you done?",
        choices: ["Main Menu","Done"],
        name:"Action"
    
    }],
    "Existing Dept and Role":[{
        type:"list",
        message: "Are you done?",
        choices: ["Main Menu","Done"],
        name:"Action"
    
    }]

}

// console.log(Questions)
// console.log('main menu',Questions["Main Menu"])

module.exports = Questions