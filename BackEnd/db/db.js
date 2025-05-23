const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, '../database/database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if(err){
        console.log('Erreur ouverture DB : ', err.message)
    }else{
        console.log('Connecté à SQLite');
    }
})


module.exports = db;
