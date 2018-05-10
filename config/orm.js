var connection = require("./connection.js");

function printQuestionMarks(num){
    var array =[];

    for(var i =0; i< num; i++){
        array.push("?");
    }
    return array.toString();
}

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb){
        var query= "select * from " + tableInput;
        connection.query(query, function(err, result){
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: function(table, cols, vals, cb ){
        query= `Insert into ${table} (${cols.toString()}) 
        VALUES (${printQuestionMarks(vals.length)})`;
        console.log("this is the query: " + query);
        connection.query(query, vals, function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb){
        var query =`update ${table} set ${objToSql(objColVals)} 
        where ${condition}`;
        console.log(objColVals);
        console.log(query);
        connection.query(query, function(err,result){
            if (err) throw err;
            cb(result);
        });
    }


    

}
//exports the orm object for the model (burger.js)
module.exports = orm;