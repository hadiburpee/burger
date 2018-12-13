var express = require("express");
var router = express.Router();

//Import the model to use the orm functions
var burger = require("../models/burger.js");

//create routes and logic
router.get("/", function(req, res){
    burger.selectAll(function(data){
    var hbsObject = {
        burgers: data
    };
    console.log(hbsObject); 
    // console.log(hbsObject.burgers[1]);
    res.render("index", hbsObject);
    });

});

router.post("/api/addBurger", function(req, res){
    var burgerType = req.body.burger;
    console.log("req.body: " + burgerType);
    // console.log("req.body: " + req.body.data);
    // console.log("req.body: " + req.body.data.burger);
    // console.log("burgerType: " + burgerType)
    burger.insertOne(burgerType, function(){
    // res.render(data);

    });
    
});

router.put("/api/devourBurger/:id", function(req, res){
    console.log("req.params" + req.params);
    var id = req.params.id;

    console.log("req.body: " + id);
    burger.updateOne(id, true, function(){

    });

});



module.exports = router; 


