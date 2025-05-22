
const sql = require('../db/db');
const express = require("express");
const bcrypt = require("bcrypt");
const route = express.Router();


route.post('/login', async (req, res) => {
    try {
        const { name, password } = req.body;

        const query = 'SELECT * FROM user WHERE name = ?';

        const [rows] = await sql.execute(query, [name]);
        if (rows.length === 0) {
            res.status(200).json({ message: 'Le nom du user est pas bon' });
        } else {
            const hashedPassowrd = rows[0].password;

            const passVerify = await bcrypt.compare(password, hashedPassowrd);
            if (passVerify) {
                res.status(200).json({ message: 'Mot de passe est bon' });
            } else {
                res.status(200).json({ message: 'Mot de passe pas bon' });
            }
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Error' })
    }
})

route.post('/register', async (req, res) => {
    try {
        const { name, password } = req.body;

        const query = 'SELECT * FROM user WHERE name = ?'

        const [rows] = await sql.execute(query, [name])
        if (rows.length === 0) {
                const passHash = await bcrypt.hash(password, 10)
                const insertQuery = 'INSERT INTO user (name, password) VALUES (?,?) '
                await sql.execute(insertQuery, [name, passHash])

                res.status(200).json({ message: 'Utilisateur ajouté' })

           
        } else {
            res.status(200).json({ message: "Le nom d'utilisateur est déjà utilisé ou le mot de passe" })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Error' })
    }
})

module.exports = route;
