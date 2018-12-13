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
    insertOne: function(tableInput, name, cb){
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(queryString, [tableInput, name], function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    },
    updateOne: function(tableInput, idNum, devoured, cb){
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [tableInput, {devoured: devoured}, {id: idNum}], function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    }
    
}

// orm.selectAll("burgers");

module.exports = orm;