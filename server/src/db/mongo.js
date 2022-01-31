const mongoose = require("mongoose")
const DB = "mongodb://localhost:27017/UserRegData"
const ConnectDB = async () => {
    try {
        const connect = await mongoose.connect(DB)
        console.log("Database Connected");
    } catch (error) {
        console.log("Connection to Database Failed");
    }
}
ConnectDB();