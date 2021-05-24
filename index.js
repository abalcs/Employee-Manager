let inquirer = require('inquirer');
let mysql = require('mysql');
let table = require('console.table');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 8060,
    user: 'root',
    password: 'Eleanor2018!',
    database: 'employeeMgr',
})

function promptUser() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all Employees',
                'View Employees by Department',
                'View Employees by Manager',
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'View all Roles'
            ],
            pageSize: 8,
            name: 'menu',
        }
    ])
    .then(userChoice => {
        switch(userChoice.menu) {
            case 'View all Employees':
                viewAllEmp();
                break;
            case 'View Employees by Department':
                viewEmpByDept();
                break;
            case 'View Employees by Manager':
                viewEmpByMgr();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Remove Employee':
                removeEmployee();
                break;
            case 'Update Employee Role':
                updateEmpRole();
                break;
            case 'Update Employee Manager':
                updateEmpMgr();
                break;
            case 'View all Roles':
                viewAllRoles();
                break;
        }
    })
}

function viewAllEmp() {
    console.table()
}

function addEmployee() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new employee?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Who is their Manager?',
            name: 'manager',
        },
        {
            type: 'input',
            message: 'Which department do they work in?',
            name: 'department'
        }
    ])
    .then(addEmp => {
        const { name, manager, department } = addEmp;
        const query = connection.query('INSERT INTO employeeMgr SET ?',
        {
            employee: `${name}`,
            manager: `${manager}`,
            department: `${department}`
        }, (err) => {
            if (err) throw err;
        }) 
        // connection.end();
    })
}

promptUser();

// connection.connect((err) => {
    
//     if (err) throw err;
//     console.log('connected as id ${connection.threadId}\n');
// });
