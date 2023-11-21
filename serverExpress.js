const express = require("express")
const server = express()
server.use(express.json())
require("./configs/db")
const usersModel = require("./models/Users")
const { default: mongoose } = require("mongoose")
const { isValidObjectId } = require("mongoose")


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

server.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params
    if (isValidObjectId(id)) {
        const userDelete = await usersModel.findByIdAndDelete({ _id: id })
        if (!userDelete) {
            return res.status(404).json("user not find")
        }
    } else {
        return res.status(404).json("id not valid")
    }
    res.status(202).json("user deleted Successfully :)")
})

server.listen(3000, () => {
    console.log("server runing in port 3000 successfuly");
})