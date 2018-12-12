var orm = require("../config/orm.js");

var orm = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(ab){
        orm.insertOne("burgers", burgername, devourer, function(res){
            ab(res);
        });
    }
    
}

module.exports = orm;