var express = require("express");
var router = express.Router();

//Import the model to use the orm functions
var burger = require("../models/burger.js");

//create routes and logic
router.get("/", function(req, res){
    burger.selectAll(function(data){
        
        res.render("index", data)
    });

});

burger.selectAll(function(data){
    console.log(data);
})


module.exports = router; 
