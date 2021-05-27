let mysql = require('mysql');
const { promisify } = require('util')

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
module.exports.queryPromise = promisify(connection.query.bind(connection));
