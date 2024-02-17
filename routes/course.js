const express = require("express")
const courseRouter = express.Router()
const courseController = require('./../controller/courseController')

courseRouter.get("/", courseController.getAll)
courseRouter.post("/comment",courseController.setComment)


module.exports = courseRouter