const Users = require('../models/users');
const bcrypt = require('bcrypt');
const randomToken = require('random-token');


const Login = async function (){
    const input = request.body;
    let user = await Users.findOne({username: input.username}).select("+password");
    if(user != null){
        bcrypt.compare(input.password, user.password, async (err, check) => {
            if(err){
                response.status(200).json({status: 500, message: err.message});
            }else{
                if(check === true){
                    let token = randomToken(64);
                    await Users.findOneAndUpdate({username: input.username}, {token: token});
                    response.status(200).json({status: 200, message: 'Login successful'});
                }else{
                    response.status(200).json({status: 500, message: 'Invalid Credentials'});
                }
            }
        });
    }else{
        response.status(200).json({status: 500, message: 'Invalid Credentials'});
    }
}

const Register = async function (){
    const input = request.body;
    let user = await Users.findOne({username: input.username}).select("+password");
    if(user != null){
        bcrypt.compare(input.password, user.password, async (err, check) => {
            if(err){
                response.status(200).json({status: 500, message: err.message});
            }else{
                if(check === true){
                    let token = randomToken(64);
                    await Users.findOneAndUpdate({username: input.username}, {token: token});
                    response.status(200).json({status: 200, message: 'Login successful'});
                }else{
                    response.status(200).json({status: 500, message: 'Invalid Credentials'});
                }
            }
        });
    }else{
        response.status(200).json({status: 500, message: 'Invalid Credentials'});
    }
}

export {Login, Register};