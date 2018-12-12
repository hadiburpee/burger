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
    console.log(hbsObject) 
    res.render("index", hbsObject)
    });

});



module.exports = router; 
