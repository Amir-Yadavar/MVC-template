const express = require("express")
const server = express()
server.use(express.json())
require("./configs/db")
const courseModel = require("./models/Course")
const commentsModel = require("./models/Comment")

// server.post("/api/course/comment", async (req, res) => {
//     // let teacher = await teachersModel.findOne({ _id: "65b2266cb3cf9e040bb78b6b" })
//     // courseModel.create({
//     //     courseName: "node js",
//     //     teacher: teacher,
//     //     comments: []
//     // })
//     // res.json("course added")



// })


const usersRouter = require("./routes/users")
const booksRouter = require('./routes/book')
const rentRouter = require("./routes/renst")
const courseRouter = require("./routes/course")
const { teachersModel } = require("./models/Teacher")

server.use('/api/users', usersRouter)
server.use("/api/books", booksRouter)
server.use("/api/rent", rentRouter)
server.use("/api/course", courseRouter)



server.listen(3000, () => {
    console.log("server runing in port 3000 successfuly");
})