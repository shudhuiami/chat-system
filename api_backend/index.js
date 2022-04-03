require('dotenv').config();
const express = require('express')
const mongoose = require("mongoose");
const port = 3030;
const app = express();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => {console.error(error)})
db.on('open', () => {console.log("Connected to Database")})

app.use(express.json())
const AuthRoutes = require('./routes/auth')
app.use('/app/v1/secure', AuthRoutes);


app.listen(port, (error) => {
    if(error){
        console.log("Something went wrong", error);
    }else{
        console.log("Server is listening on port " + port);
    }
})
