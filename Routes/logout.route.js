const express = require('express');

const app = express.Router();

app.get('/', (req,res) => {
    res.removeHeader('Authorization');
    res.send({message:'Logout Successful'});
});

module.exports = app;