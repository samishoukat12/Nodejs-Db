const express = require('express')
const app = express()
var cors = require("cors");
var bodyParser = require("body-parser")
require("dotenv").config({ path:"./.env" });
const Database=require('./db/Db')
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))
//import Routes
const authRoutes = require('./Routes/auth')
//Routes Middleware
app.use('/app/users', authRoutes);
//Db
Database();
//middleware
app.use(express.json())

app.listen(3000, () => {
    console.log('server is running');
})