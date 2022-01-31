const mongoose = require("mongoose")
const User_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
})


console.log("Model connected");
const UserData = mongoose.model("UserData", User_schema)
module.exports = UserData