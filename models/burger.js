//importing the orm to create function that will interact with database
var orm = require("../config/orm.js");

var burger= {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    //passing array for cols and vals
    create: function(cols,vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals,condition,cb){
        orm.updateOne("burgers",objColVals,condition,function(res){
            cb(res);
        });
    }

}

//export the db function for the controller: burger_controller.js
module.exports = burger; 