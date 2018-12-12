var express = require("express");
var router = express.Router();

//Import the model to use the orm functions
var burger = require("../models/burger.js");

//create routes and logic
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj)
    });

});

module.exports = router; 
