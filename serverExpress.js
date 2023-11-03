const express = require("express")

const server = express()

server.get("/", (req, res) => {
    res.send("Hello world express")
})

server.listen(3000, () => {
    console.log("server runing in port 3000 successfuly");
})