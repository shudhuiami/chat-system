const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const randomToken = require('random-token');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const AuthControllers = require('../controllers/AuthController')

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
// router.post('/registration', async (request, response) => {
//     AuthControllers.Login(request, response)
// })

//user Login
// router.post('/login', async (request, response) => AuthControllers.Login(request, response))

// async function Login(request, response) {
//     const input = request.body;
//     let user = await Users.findOne({username: input.username}).select("+password");
//     if(user != null){
//         bcrypt.compare(input.password, user.password, async (err, check) => {
//             if(err){
//                 response.status(200).json({status: 500, message: err.message});
//             }else{
//                 if(check === true){
//                     let token = randomToken(64);
//                     await Users.findOneAndUpdate({username: input.username}, {token: token});
//                     response.status(200).json({status: 200, message: 'Login successful'});
//                 }else{
//                     response.status(200).json({status: 500, message: 'Invalid Credentials'});
//                 }
//             }
//         });
//     }else{
//         response.status(200).json({status: 500, message: 'Invalid Credentials'});
//     }
// }

module.exports = router;