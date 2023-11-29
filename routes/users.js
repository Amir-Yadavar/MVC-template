const express = require("express")
const userController = require("./../controller/userController")
// const { default: mongoose } = require("mongoose")

const usersRouter = express.Router()

usersRouter.post("/newUser", userController.newUser)

// usersRouter.delete('/:id', userController.remove)

usersRouter.route('/:id')
    .get(userController.getOneUser)
    .delete(userController.remove)

module.exports = usersRouter