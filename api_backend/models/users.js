import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    is_verified: {
        type: Number,
        required: true,
        default: 0
    },
    is_active: {
        type: Number,
        required: true,
        default: 1
    },
    token: {
        type: String,
    }
})
let Users = mongoose.model('Users', usersSchema);
export default Users;