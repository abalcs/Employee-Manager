const inquirer = require('inquirer');
const connection = require('..config/db.js');

const addDept = (add) => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'deptName',
        }
    ])
    .then( (answers) => {
        connection.query
            'INSERT INTO departments SET ?',
            {
                dept_name: answers.dept_name,
            },
            function(err) {
                if (err) throw err;
                console.log('Successfully added new department');
                addDept();
            }
    })
}

module.exports = addDept;