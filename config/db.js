let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Eleanor2018!',
    database: 'employeeMgrDB',
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Successfully connected to the database.');
});

module.exports = connection;