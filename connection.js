var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs"
});


con.connect(function(err) { 
    if (err) throw err;
    console.log("Connected!");

    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    });


})