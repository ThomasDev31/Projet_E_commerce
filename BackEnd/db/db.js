const mysql = require('mysql2');

const connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'name-data'
})

module.exports = connection;