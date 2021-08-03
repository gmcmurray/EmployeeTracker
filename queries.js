

sqlqueries = {
"Show Employees": `
SELECT e.id as EmployeeID, e.first_name, e.last_name, r.id as RoleID, r.title as Role ,d.title as Dept, m.first_name as Manager
FROM employee e
JOIN role r ON e.role_id = r.id 
JOIN department d ON d.id  = r.department_id 
Left JOIN employee m ON e.manager_id = m.id ;` ,

"Show employee": `SELECT * from employee;`,
"Show role": `SELECT * from role;`,
"Show Departments": `SELECT * from department;`,
"Show department": `SELECT * from department;`,

"Show Roles": `SELECT r.id as RoleID, r.title as Role, d.title as Dept,r.salary
FROM role r
JOIN department d ON d.id =r.department_id;`,

"Add Department": `INSERT INTO department (title) VALUES (?);`,

"Add Role": `INSERT INTO role (title,salary,department_id)
VALUES(?,?,?);`,

"Add Employee":`INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES(?,?,?,?);`,

"Delete Employee Record" : `DELETE from employee WHERE id = ? ;`,
"Delete Department Record" : `DELETE from department WHERE id = ? ;`,
"Delete Role Record" : `DELETE from role WHERE id = ? ;`,

"Update Role": `update employee e
set e.role_id = ?
where e.id = ?;
`,
"Spend by Dept": `SELECT r.department_id,d.title as Dept,sum(r.salary) as Total_Salary ,count(r.department_id) as HeadCount
FROM organization_db.role r
join department d on r.department_id=d.id
join employee e on r.id = e.role_id
group by r.department_id;`,
"Get Departments" : "SELECT id , title from department;",
"Get Employees" : "SELECT first_name, last_name from employee;"
}




  module.exports = sqlqueries