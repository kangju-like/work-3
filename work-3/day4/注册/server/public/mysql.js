var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: "3306",
    password: '',
    database: 'ms'
});

connection.connect();

connection.query('SELECT * FROM user WHERE name="node"', function(error, results, fields) {
    if (error) throw error;
    console.log(results[0].name, results[0].pass);


    // console.log('The solution is: ', results[0].solution);
});