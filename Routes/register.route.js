const express = require('express');
const bcrypt = require('bcrypt');
const { UserModel } = require('../Models/user.model');

const app = express.Router();
app.use(express.json());

app.post('/', async (req,res) => {
    let {name, email, password, admin} = req.body;
    let domain = email.trim().split('@');
    if (domain[1]==='masaischool.com') {
        admin = true;
    }
    
    try{
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.status(400).send({message:'Opps!!! Something went wrong', err});
            } else {
                const user = new UserModel({name, email, password:hash, admin});
                await user.save();
                res.status(201).send({message:'User Registration Successful', user});
            }
        })
    } catch (err) {
        res.status(400).send({message:'Opps!!! Something went wrong', err});
    }
});

module.exports = app;