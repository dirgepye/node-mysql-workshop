var mysql = require('mysql');
var colors = require('colors');

var connection = mysql.createConnection({
    host: process.env.IP,
    user: process.env.C9_USER,
    password: '',
    database: 'addressbook'
});

connection.query("SELECT * FROM Account WHERE id <= '5'", function(err, Account) {
    if (err) {
        console.log("Whoops!")
    }
    else {
        Account.forEach(function(Account) {
            console.log('#'.bold + (colors.bold(Account.id)) + ': ' + Account.email);
        });
    }
});

connection.end();


