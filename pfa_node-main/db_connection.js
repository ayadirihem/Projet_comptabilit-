var mysql = require('mysql');
module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "pfa_comptable",
    multipleStatements:true
});