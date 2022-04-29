import Users from '../models/users.js';
import Connections from '../models/connections.js';
import { validationResult } from 'express-validator';

const UsersController = {
    GetAllUsers: async (request, response) => {
        try {
            const token = request.header('token');
            const users = await Users.find({ "token": { "$ne": token} });
            response.status(200).json({status: 300, users: users });
        }catch (e) {
            response.status(200).json({status: 500, message: e});
        }
    },
    SendUserRequest: async (request, response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                response.status(200).json({status: 500, errors: errors.array()});
            }

            const token = request.header('token');
            const input = request.body;
            const user = await Users.findOne({ "token": token });


            const check = await Connections.findOne({$or: [
                    { "sender_id": user._id,  "receiver_id": input.receiver_id},
                    { "receiver_id": user._id,  "sender_id": input.receiver_id}
                    ]});

            if(check != null){
                response.status(200).json({status: 500,  msg: 'Request Already exist'})
                return;
            }

            const ConnectionModel = new Connections({
                sender_id: user._id,
                receiver_id: input.receiver_id,
            });
            await ConnectionModel.save();

            response.status(200).json({status: 200, msg: 'Request Send successfully'})
        }catch (e) {
            response.status(200).json({status: 500, message: e});
        }
    },
    GetConnectionRequest: async (request, response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                response.status(200).json({status: 500, errors: errors.array()});
            }
            const token = request.header('token');
            const user = await Users.findOne({ "token": token });
            const requests = await Connections.find({$or: [{ "sender_id": user._id}, { "receiver_id": user._id,}], status: 1});
            let sender_ids = requests.map(a => a.sender_id);
            let receiver_ids = requests.map(a => a.receiver_id);
            let user_ids = sender_ids.concat(receiver_ids).filter((v, i, a) => a.indexOf(v) === i);
            let indexSelf = user_ids.indexOf((user._id).toString());
            user_ids.splice(indexSelf, 1);
            const users = await Users.find({'_id': { $in: user_ids }});

            response.status(200).json({status: 200, data: users})
        }catch (e) {
            response.status(200).json({status: 500, message: e});
        }
    },
    GetReceivedRequest: async (request, response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                response.status(200).json({status: 500, errors: errors.array()});
            }
            const token = request.header('token');
            const user = await Users.findOne({ "token": token });
            const requests = await Connections.find({"receiver_id": user._id, status: 0});
            let sender_ids = requests.map(a => a.sender_id);
            let user_ids = sender_ids.filter((v, i, a) => a.indexOf(v) === i);
            let indexSelf = user_ids.indexOf((user._id).toString());
            if(indexSelf > -1){
                user_ids.splice(indexSelf, 1);
            }
            const users = await Users.find({'_id': { $in: user_ids }});
            response.status(200).json({status: 200, data: users})
        }catch (e) {
            response.status(200).json({status: 500, message: e});
        }
    },
    GetSentRequest: async (request, response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                response.status(200).json({status: 500, errors: errors.array()});
            }
            const token = request.header('token');
            const user = await Users.findOne({ "token": token });
            const requests = await Connections.find({"sender_id": user._id, status: 0});
            let receiver_ids = requests.map(a => a.receiver_id);
            let user_ids = receiver_ids.filter((v, i, a) => a.indexOf(v) === i);
            let indexSelf = user_ids.indexOf((user._id).toString());
            if(indexSelf > -1){
                user_ids.splice(indexSelf, 1);
            }
            const users = await Users.find({'_id': { $in: user_ids }});
            response.status(200).json({status: 200, data: users})
        }catch (e) {
            response.status(200).json({status: 500, message: e});
        }
    },
    UpdateConnectionStatus: async (request, response) => {

        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                response.status(200).json({status: 500, errors: errors.array()});
            }



            const input = request.body;
            const token = request.header('token');
            const user = await Users.findOne({ "token": token });

            if(user !== null){
                await Connections.findOneAndUpdate({_id: input.connection_id, status: 0}, {status: input.status});
                if(input.status == 1){
                    response.status(200).json({status: 200, message: 'Connection created successfully'});
                }else{
                    response.status(200).json({status: 200, message: 'Connection declined'});
                }
            }
        }catch (e) {
            response.status(200).json({status: 500, message: e});
        }
    },
}

export default UsersController;
