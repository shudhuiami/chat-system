const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const randomToken = require('random-token');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Get All users
router.get('/users', async (request, response) => {
    try{
        const users = await Users.find();
        response.status(200).json({status: 200, data: users});
    }catch (e) {
        response.status(200).json({status: 500, message: e.errors});
    }
})


//User Registration
router.post('/registration', async (request, response) => {
    try {
        const input = request.body;
        let HashPassword = await bcrypt.hash(input.password, saltRounds);
        const user = new Users({
            name: input.name,
            email: input.email,
            username: input.username,
            password: HashPassword
        })
        await user.save();
        response.status(200).json({status: 200, msg: 'New user created successfully'})
    }catch (e) {
        response.status(200).json({status: 500, message: e.errors});
    }
})

//user Login
router.post('/login', async (request, response) => {
    const input = request.body;
    Users.findOne({username: input.username}, function(error, data) {
        if(error){
            response.status(200).json({status: 500, message: error.message});
        }else{
            bcrypt.compare(input.password, data.password, function(err, check) {

            });
            response.status(200).json({status: 200, data: check});
        }
    }).select("+password");
})


module.exports = router;