
const db = require('../db/db');
const express = require("express");
const bcrypt = require("bcrypt");
const route = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY


route.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.get(query, [email], async (err, row) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: 'Erreur requête' });
        }

        if (!row) {
            return  res.status(200).json({ message: 'Utilisateur introuvable !' });
        }

        try {
            const passVerify = await bcrypt.compare(password, row.password);
            if (passVerify) {
                const token = jwt.sign({id : row.id, email : row.email}, secretKey, {expiresIn: '3h'})
                res.status(200).json({ message: 'Mot de passe est bon', token });
            } else {
                res.status(200).json({ message: 'Mot de passe pas bon' });
            }
        } catch (bcryptErr) {
                console.log(bcryptErr)
                res.status(500).json({message : 'Erreur de bcrypt'})
        }
    })
})

route.post('/register', async (req, res) => {

        const { email, password } = req.body;
        const query = 'SELECT * FROM users WHERE email = ?'

        db.get(query, [email], async(err, row) => {
             if (err) {
                console.log(err)
                return res.status(400).json({ message: 'Erreur requête' });
            }

        if (row) {
            return res.status(200).json({ message: 'Utilisateur déjà utilisé ' });
        }
        try {
            const passHash = await bcrypt.hash(password, 10)
            const insertQuery = 'INSERT INTO users (email, password) VALUES (?,?) '
            db.run(insertQuery, [email, passHash],  (err) => {
                if(err){
                    console.log(err)
                    res.status(400).json({message : "Erreur à l'ajout de l'utilisateur"})
                }else{
                    res.status(200).json({ message: 'Utilisateur ajouté' })
                }
            })
        } catch (bcrypt) {
            console.log(bcrypt);
            res.status(500).json({message : "Erreur de bcrypt"})
        }
        })
        
})

module.exports = route;
