var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    },
    insertOne: function(tableInput, name, devoured, cb){
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [tableInput, name, devoured], function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    }
    //write the update function here
}

module.exports = orm;