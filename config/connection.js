var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.lo
});

module.exports = connection;