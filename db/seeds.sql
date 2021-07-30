INSERT INTO department (id_dept,nname)
VALUES (1,"Human Resources"),
       (2,"Engineering"),
       (3,"Legal and Accounting"),
       (4,"Sales and Marketing");


INSERT INTO rrole (id_role, title,salary,department_id)
VALUES (1,"Recruiter",85000,1),
       (2,"HR Specialist",65000,1),
       (3,"Junior Engineer",70000,2),
       (4,"Lead Engineer",120000,2),
       (6,"Attorney",100000,3),
       (7,"Accountant II",90000,3),
       (8,"Account Manager",95000,4),
       (9,"Marketing Specialist",85000,4);


INSERT INTO employee (id_employee, first_name, last_name, manager_id,role_id)
VALUES (1,'Joanne','Martinez',1,2),
       (2,'Linda','Baker',7,6),
       (3, 'Luis','Segarra',6,3),
       (4 ,'Henry','Horton',6,4),
       (5 ,'Juan','Fung',6,4),
       (6 ,'Lucinda','Marvel',6,4),
       (7,'Jill','Hill',7,6),
       (8,'Bob','Wood',8,8),
       (9,'Evelyn','Cook',8,9),
       (10,'Eugene','Banks',1,1);