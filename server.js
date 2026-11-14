const express = require('express');
const myApp = require('./myApp');

const app = express();

app.use(express.json());



app.listen(3000, () => {
    console.log("Le serveur écoute sur le port 3000");
});