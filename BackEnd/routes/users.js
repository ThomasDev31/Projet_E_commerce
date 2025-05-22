
const sql = require('../db/db');
const express = require("express");
const route = express.Router();


route.get('/', async(req, res) => {
    try {
        const query = ('SELECT * FROM user')
        const [ rows ] = await sql.execute(query)
        console.log(rows)
    } catch (error) {
        
    }
   

})

module.exports = route;
