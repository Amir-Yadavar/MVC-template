const express = require("express")
const server = express()
server.use(express.json())
require("./configs/db")
const courseModel = require("./models/Course")
const commentsModel = require("./models/Comment")
const { teachersModel } = require("./models/Teacher")
const multer = require("multer")
const uploader = require('./middlewares/multer')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const usersRouter = require("./routes/users")
const booksRouter = require('./routes/book')
const rentRouter = require("./routes/renst")
const courseRouter = require("./routes/course")

// server.post("/api/course/comment", async (req, res) => {
//     // let teacher = await teachersModel.findOne({ _id: "65b2266cb3cf9e040bb78b6b" })
//     // courseModel.create({
//     //     courseName: "node js",
//     //     teacher: teacher,
//     //     comments: []
//     // })
//     // res.json("course added")



// })

// server.get('/', async (req, res) => {
//     commentsModel.create({
//         body: "all ready ....",
//         course: "65d4fe4d7fee9e28b36edc85"
//     })

//     res.json("comments")
// })

server.post('/', uploader.single("profile"), (req, res) => {
    console.log(req.file);
    res.json({ mess: "upload successfully .." })
})

// many file upload 

server.post('/manyUpload', uploader.array("profile", 3), (req, res) => {
    console.log(req.files);
    res.json({ mess: "uploads seccessfully .." })
})

// hash and bcrypt pass
const salt = bcrypt.genSaltSync(10)
// console.log(salt);

const hashedPass = bcrypt.hashSync("amir123", salt)
// console.log(hashedPass);




// const { teachersModel } = require("./models/Teacher")

// create token
const privateKey = "process.env.privateKey"
const token = jwt.sign({ email: "amir@gmail.com" }, privateKey, {
    algorithm: "HS256",
    expiresIn: `${60} s`,
})

// console.log("token : ",token);
// console.log(process.env.privateKey);

server.use('/api/users', usersRouter)
server.use("/api/books", booksRouter)
server.use("/api/rent", rentRouter)
server.use("/api/course", courseRouter)



server.listen(3000, () => {
    console.log("server runing in port 3000 successfuly");
})