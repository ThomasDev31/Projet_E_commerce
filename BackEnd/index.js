const express = require("express");
const port = process.env.PORT || 5000;
const user = require('./routes/users')
const cors = require('cors')
require('./db/setup');

const app = express();
app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log('serveur ok !')
})

app.use('/user', user)