const express = require("express");
const port = process.env.PORT || 5000;
const user = require('./routes/users')
const app = express();
app.listen(port, () => {
    console.log('serveur ok !')
})

app.use('/user', user)