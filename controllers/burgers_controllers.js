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



module.exports = router; 


