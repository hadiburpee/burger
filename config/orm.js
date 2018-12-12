var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, res){
            if(err) throw err;
            console.log(res);
            
            
        });
    },
    insertOne: function(tableInput, name){
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(queryString, [tableInput, name], function(err, res){
            if(err) throw err;
            console.log(res);
            // cb(res);
        });
    },
    updateOne: function(tableInput, idNum, devoured){
        var queryString = "UPDATE ?? WHERE ?";
        connection.query(queryString, [tableInput, {id: idNum}, {devoured: devoured}], function(err, res){
            if(err) throw err;
            console.log(res);
            // cb(res);
        });
    }
    
}

// orm.selectAll("burgers");

module.exports = orm;