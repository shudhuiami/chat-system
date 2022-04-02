const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
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

usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Users', usersSchema);