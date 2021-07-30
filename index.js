const inquirer = require("inquirer");
const Department = require("./lib/departmentClass");
const questions = require("./questions");
const employee = require("./lib/employeeClass");
const selectdb = require('./queries')
const role = require("./lib/roleClass");



async function askquestions(question){
    try{
        const answers = await inquirer.prompt(question)
        const answers2 = askquestions(questions[answers.Action1])
        return console.log(answers2)
    }
    catch(error) {
        console.log('problems with inquirer')
    }

 return;
}

// askquestions(questions["Main Menu"])





async function  startquest(){
    let fullreq =[];
    // let nextone ="Main Menu";
    let ans1 = await inquirer.prompt(questions["Main Menu"]);
    let nextone = ans1.Action;
    if(ans1.Action !== "Add Resources/Role"){
        let ans2= await inquirer.prompt(questions[nextone]);
        console.log(ans2.Action)
    }
    else {
        let ans3 = await inquirer.prompt(questions["Add Employee"])
        console.log('Add Employee' , ans1.Action1)}
    // fullreq.push(nextone)
    // console.log(fullreq,nextone)

}

startquest().then(console.log("made it through")).catch(e => {
    console.log('there has been a problem with your query request'+ e.message)
});
//   .then(console.log)
//   .catch(console.error)
// inquirer.prompt(menuquestion)
//     .then((response) => {
//         switch (response.Action1) {
//             case 'Add Employee':
//                 console.log('Add Employee',response)
                
//                 break;
//             case 'Add Department':
//                 let Dept = selectdb(employee)
//                 console.log(Dept)
//                 console.log('Add Department',response.Action1)
//                 inquirer.prompt(newDept).
//                     then((rep) => {
//                         let newDept= new Department(rep.Dept_name)
//                         console.log(newDept)})
//                 break;
//             case 'Add role':
//                 console.log('Add Role',response.Action1)
                    
//                 break;
//             case 'Quit':
//                 console.log("Good Bye, to logon again type: npm start")
//                     break;
//             default:
//                 break;
//      }
// })




