INSERT INTO department (id,title)
VALUES (1,"Human Resources"),
       (2,"Engineering"),
       (3,"Legal and Accounting"),
       (4,"Sales and Marketing");


INSERT INTO role (id, title,salary,department_id)
VALUES (1,"Recruiter",85000,1),
       (2,"HR Specialist",65000,1),
       (3,"Junior Engineer",70000,2),
       (4,"Lead Engineer",120000,2),
       (6,"Attorney",100000,3),
       (7,"Accountant II",90000,3),
       (8,"Account Manager",95000,4),
       (9,"Marketing Specialist",85000,4);


INSERT INTO employee (id, first_name, last_name,role_id, manager_id)
VALUES (1,'Joanne','Martinez',2,NULL),
       (2,'Linda','Baker',6,7),
       (3, 'Luis','Segarra',3,6),
       (4 ,'Henry','Horton',4,6),
       (5 ,'Juan','Fung',4,6),
       (6 ,'Lucinda','Marvel',4,NULL),
       (7,'Jill','Hill',7,6),
       (8,'Bob','Wood',8,NULL),
       (9,'Evelyn','Cook',9,8),
       (10,'Eugene','Banks',1,1);