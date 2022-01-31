// Require modules
const express = require("express")
const connection = require('./db/mongo')
const UserData = require("./model/model")
const port = process.env.Port || 5000
const app = express()
app.use(express.json());
app.use(require("./router/route"))


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})