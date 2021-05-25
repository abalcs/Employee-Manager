const inquirer = require('inquirer');

const connection = require('../config/db');
const { allDepts } = require('../db/queries');
const { getAllDepts } = require('./getAll');

const addRole = (askTask) => {
    Promise.all([ getAllDepts() ])
    .then((values) => {
        return values[0];
    })
    .then((allDepts) => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?',
        },
        {
            type: 'list',
            name: 'deptId',
            message: 'What is the department for this role?',
            choices: allDepts
        }
    ]))
    .then((answers) => {
        connection.query(
            "INSERT INTO roles SET ?",
            {
                title: answers.title,
                salary: answers.salary,
                department_id: Number(answers.deptId),
            },
            function(err) {
                if (err) throw err;
                console.log('The role was added successfullly!');
                askTask();
            }
        );
    }).catch((err) => console.log(err));
}

module.exports = addRole;