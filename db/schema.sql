DROP DATABASE IF EXISTS organization_db;
CREATE DATABASE organization_db;

USE organization_db;

CREATE TABLE department (
  id_dept INT PRIMARY KEY,
  nname VARCHAR(30) 
);

CREATE TABLE rrole (
  id_role INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id_dept) ON DELETE CASCADE
);

CREATE TABLE employee (
  id_employee INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT NOT NULL,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES rrole(id_role) ON DELETE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES employee(id_employee) ON DELETE SET NULL
);




