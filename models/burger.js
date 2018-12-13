var orm = require("../config/orm.js");


var ormBurg = {
    selectAll: function(cb) {
        orm.selectAll("h4u367tuzrbhr2kw.burgers", function(res){
            // console.log(res);
            cb(res);
        });
    }
    ,
    insertOne: function(burgername, cb){
        orm.insertOne("burgers", burgername, function(res){
            // console.log(res);
            // cb(res);
        });
    },
    updateOne: function(idNum, devoured, cb){
        orm.updateOne("burgers", idNum, devoured, function(res){
            // console.log(res);
            cb(res);
        });
    }
    
}




// ormBurg.selectAll();

// ormBurg.updateOne(1, true);

// ormBurg.insertOne("hadi special #3");

// orm.selectAll();

module.exports = ormBurg;