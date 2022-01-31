const express = require("express")
const UserData = require("../model/model")
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post("/register", async (req, res) => {
    const { name, email, phone, age } = req.body


    const date = new Date().toLocaleString()
    try {
        const data = await UserData.findOne({ email: email });
        if (data) {
            return res.status(422).json({ error: "Email already exists" }), console.log("User Exists");
        }

        const Users = new UserData({ name, email, phone, date: date, age });
        const registered = await Users.save();

        if (registered) {
            return res.status(422).json({ success: "User Registered" }), console.log("User Registered");
        }

    } catch (error) {
        res.send(error)
    }
})

router.get("/about", async (req, res) => {

    try {
        const myData = await UserData.find({})
        res.send(myData)
    } catch (error) {

    }
})



console.log("Route Connected");
module.exports = router