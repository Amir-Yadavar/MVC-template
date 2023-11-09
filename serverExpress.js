const express = require("express")
const server = express()
server.use(express.json())
require("./configs/db")
const usersModel = require("./models/Users")


// server.get("/", (req, res) => {
//     res.send("Hello world express")
// })

// server.post("/postmethod", (req, res) => {
//     res.send("this is post method")
// })

server.post("/api/users", (req, res) => {
    const { name, userName, email } = req.body

    if (name === "" || userName === "" || email === "") {
        res.status(404).json("data is empty")
    } else {
        usersModel.create({
            name, userName, email
        })
        res.json("user successfuly")
    }
})

server.listen(3000, () => {
    console.log("server runing in port 3000 successfuly");
})