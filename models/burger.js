var orm = require("../config/orm.js");

var orm = {
    selectAll: function() {
        orm.selectAll("burgers", function(res){
            console.log(res)
        });
    },
    insertOne: function(){
        orm.insertOne("burgers", burgername, devourer, function(res){
            console.log(res);
        });
    }
    
}

// orm.selectAll();

module.exports = orm;