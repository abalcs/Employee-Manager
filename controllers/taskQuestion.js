const inquirer = require('inquirer');
const colors = require('colors');

const questTask = [
    {
        type: 'list',
        name: 'task',
        message: 'What would you like to do today?'.america,
        choices: [
            new inquirer.Separator('=== VIEW INFO ==='.bgWhite.black.bold),
            'View all employees'.yellow,
            'View employees by manager'.yellow,
            'View all roles'.yellow,
            'View all departments'.yellow,
            new inquirer.Separator('=== ADD NEW INFO ==='.bgWhite.black),
            'Add employee'.green,
            'Add role'.green,
            'Add department'.green,
            new inquirer.Separator('=== UPDATE INFO ==='.bgWhite.black),
            'Update employee'.blue,
            new inquirer.Separator('=== DELETE INFO ==='.bgWhite.black),
            'Delete employee'.magenta,
            'Delete role'.magenta,
            'Delete department'.magenta,
            new inquirer.Separator('=== EXIT ==='.bgWhite.black),
            'Exit Application'.rainbow,
        ],
        pageSize: 17
    }
];

module.exports = questTask;