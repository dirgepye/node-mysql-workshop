var mysql = require('mysql');
var colors = require('colors');


var connection = mysql.createConnection({
    host: process.env.IP,
    user: process.env.C9_USER,
    password: '',
    database: 'addressbook'
});


var Table = require('cli-table');




connection.query("show databases", function(err, databases) {
    if (err) {
        console.log("whoops!");
    }
    else {

        var table = new Table({
            head: ['Databases'.yellow],

        });
        databases.forEach(function(result) {
            table.push([result.Database]);
        });
        console.log(table.toString());

    }
});

connection.end();



