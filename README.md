
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Employee Tracker 

## Table of Contents
1. [Description](#descrip) 
2. [Installation](#install)
3. [Usage](#usage)
4. [License](#lic)
5. [Contributing](#contri)
6. [Tests](#test)
7. [Mock](#mock)
7. [Questions](#quest)

---------------------------------------
## 1. Description <a id="descrip"> </a>
Employee tracking application which builds departments, employee roles and tracks employees using a MySQL database.  Uses inquirer for CLI interface to add, modify and delete these objects.  SQL queries are done to a local server database. This uses a relational database (MySQL) to store and help interact with the data.  The model or schema consists of there tables which are related to each other.  A main menu is used
to navigate through all the actions and queries to the database.  See the Mock section for an idea of how it works.

----------------------------------------------

## 2. Installation <a id="install"></a>
Installation Instructions: 

1) Open terminal and navigate to directory where index.js.   
2) Run npm i to load inquirerand mysql2 api libraries.  
3) logon to mysql using your uid and password and source the schema.sql and seeds.sql files found db folder. You will need to download mysql to have this application work as it is where the relational database
resides for this application.
4) log out of mysql and get back to directory where index.js.   
5) Enter "node index.js" to run program.     
6) To exit ctrl c.

Files used in API found : https://github.com/gmcmurray/EmployeeTracker

API deployed here : not applicable

-------------------------------------------------

## 3. Usage <a id="usage"></a>
The API is target to be used:
Usage is for managing employee organizations where you track employees, roles and departments.  A salary spend by department has been created with total salary by department and head count.

-----------------------------------------------------

## 4. License <a id="lic"></a>

License covering API:
MIT License
    Copyright (c) <2021> <George McMurray>
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

----------------------------------------------

## 5. Contributing <a id="contri"></a>
George McMurray

-------------------------------------------------

## 6. Tests <a id="test"></a>
The following tests were conducted on the API:
Debug

----------------------------------------------------------------

## 7. Mock <a id="mock"> </a>
The following animation demonstrates the application functionality:
![user responds to command line questions to generate a ReadMe.md file](./utils/EmployeeTracker.gif)



----------------------------------------------------

## 8.  Questions <a id="quest"></a>
For any questions you can email me at:
gmcmurray1493@gmail.com

My github username is gmcmurray

---------------------------------
