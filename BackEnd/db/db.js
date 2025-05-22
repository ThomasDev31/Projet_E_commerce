const mysql = require('mysql2');

const connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_e_commerce'
})



module.exports = connection;