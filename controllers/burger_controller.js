var express = require ("express");
//Importing the model to use its databse functions
var burger = require("../models/burger.js");

var router = express.Router();


//creating all routes
router.get("/", function(req,res){
    burger.all(function(data){
        var hbsObj ={
            burgers:data
        };
        console.log(hbsObj);
        res.render("index",hbsObj)
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(["burger_name, devoured"],
    [req.body.burger_name, req.body.devoured], function(result){
        res.json({id: result.insertId});
        console.log(result);
    });
});

router.put("/api/burgers/:id", function(req,res){
    var condition = `id = ${req.params.id}`;
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if(result.changedRows == 0) return res.status(200).end();
        else res.status(200).end();
    });
});


module.exports = router; 