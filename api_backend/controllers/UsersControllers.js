import Users from '../models/users.js';

const UsersController = {
    GetAllUsers: async (request, response) => {
        try {
            const users = await Users.find();
            response.status(200).json({status: 200, data: users});
        }catch (e) {
            response.status(200).json({status: 500, message: e});
        }
    },
}

export default UsersController;