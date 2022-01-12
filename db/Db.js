const mongoose = require("mongoose");

function Db() {
    mongoose.connect(process.env.DB_CONNECT), function (err) {
        if (err) {
            console.log("errror in connecting to db");
        }
        else {
            console.log("coonection established to database");
        }
    }
}

module.exports = Db