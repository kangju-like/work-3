var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ms'
});

connection.connect();

connection.query('SELECT * FROM ms', function(error, results, fields) {
    if (error) throw error;
    console.log(results);

    console.log('The solution is: ', results[0].solution);
});
connection.end();