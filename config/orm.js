var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
    //Select all function/query
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    }
    // insertOne: function(){

    //   },
    // updateOne: function(){

    // }
};

module.exports = orm;