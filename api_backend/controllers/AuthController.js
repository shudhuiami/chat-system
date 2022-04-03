import Users from '../models/users.js';
import bcrypt from 'bcrypt';
const saltRounds = 10;
import { nanoid } from "nanoid";


const AuthController = {
    Registration: async (request, response) => {
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
    },
    Login: async (request, response) => {
        const input = request.body;
        let user = await Users.findOne({username: input.username}).select("+password");
        if(user != null){
            bcrypt.compare(input.password, user.password, async (err, check) => {
                if(err){
                    response.status(200).json({status: 500, message: err.message});
                }else{
                    if(check === true){
                        let token = nanoid(64);
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
    },
}

export default AuthController;