import dotenv from 'dotenv'
import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
const port = 3030;
const app = express();
dotenv.config()

const corsOpts = {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOpts));

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => {console.error(error)})
db.on('open', () => {console.log("Connected to Database")})

app.use(express.json())

import AuthRoutes from './routes/auth.js';
app.use('/app/v1/secure', AuthRoutes);

import UsersRoutes from './routes/users.js';
app.use('/app/v1/users', UsersRoutes);




app.listen(port, (error) => {
    if(error){
        console.log("Something went wrong", error);
    }else{
        console.log("Server is listening on port " + port);
    }
})
