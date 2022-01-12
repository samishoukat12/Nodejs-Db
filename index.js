const express = require('express')
const app = express()
// const dotenv = require('dotenv')
var cors = require("cors");
var bodyParser = require("body-parser")
// const mongoose = require('mongoose')
require("dotenv").config({ path:"./.env" });
const Db=require('./db/Db')
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))
// dotenv.config();

//import Routes
const authRoutes = require('./Routes/auth')
//Routes Middleware
app.use('/app/users', authRoutes);
//DB
// mongoose.connect(process.env.DB_CONNECT, () => {

//         console.log('connect to db')
  
    
// })

Db();
//middleware
app.use(express.json())

app.listen(3000, () => {
    console.log('server is running');
})