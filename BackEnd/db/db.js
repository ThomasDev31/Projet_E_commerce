const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_e_commerce'
})

connection.getConnection((err)=>{
    if(err){
        console.log(err)
    }else{
        return null
    }
})


module.exports = connection;