const express = require("express")
const server = express()
server.use(express.json())
require("./configs/db")

const usersRouter = require("./routes/users")

server.use('/api/users', usersRouter)
// server.get("/", (req, res) => {
//     res.send("Hello world express")
// })

// server.post("/postmethod", (req, res) => {
//     res.send("this is post method")
// })



server.listen(3000, () => {
    console.log("server runing in port 3000 successfuly");
})