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


// connection.query("SELECT email FROM Account WHERE id < 10", function(err, Account) {
//     if (err) {
//         console.log("whoops!");
//     }
//     else {

//         Account.forEach(function(Account) {
//             console.log("Rowzzz ".yellow + Account.email);
//         });

//     }
//     return;    
// });

connection.end();



// connection.query("SELECT * FROM Account", function(err, rows, fields) {
//   // In this callback, rows will be all the rows of the query, in a regular array of regular objects
//   // fields is not used very often, but it will contain a listing of the columns with some metadata

//   // Here is an example usage:
//   rows.forEach(function(row) {
//     console.log('#' + row.id + ': ' + row.email);
//   });
//   // This code will output lines like:
//   // #1: john@smith.com
//   // #2: abc@def.com
//   // #5: xx@yy.com

//   // Note that IDs do not have to be contiguous. If we DELETE rows, there will be holes in the ID list. This is normal.
// });
