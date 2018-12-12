//require mysql
var mysql = require("mysql");

// set up database connection and connect

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "YOURPASSWORD",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.log("error connectionL " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;