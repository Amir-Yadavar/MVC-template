const express = require("express")
const server = express()
server.use(express.json())
require("./configs/db")

const usersRouter = require("./routes/users")
const booksRouter = require('./routes/book')
const rentRouter = require("./routes/renst")

server.use('/api/users', usersRouter)
server.use("/api/books", booksRouter)
server.use("/api/rent", rentRouter)

server.listen(3000, () => {
    console.log("server runing in port 3000 successfuly");
})