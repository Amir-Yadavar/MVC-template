const express = require("express")
const isAdminUser = require("./../middlewares/isAdminUser")
const booksRouter = express.Router()
const booksController = require('./../controller/booksController')

booksRouter.get('/', isAdminUser, booksController.getAll)

booksRouter.post("/newBook", booksController.createOne)

booksRouter.delete("/:id", booksController.remove)

module.exports = booksRouter