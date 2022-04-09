import mongoose from "mongoose";

const connectionsSchema = new mongoose.Schema({
    sender_id: {
        type: String,
        required: true
    },
    receiver_id: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0
    },
});
let Connections = mongoose.model('Connections', connectionsSchema);
export default Connections;
