const express = require("express")
const rentController = require('./../controller/rentController')
const rentRouter = express.Router()


// rentRouter.get("/:id", rentController.getAll)

rentRouter.route("/:id")
    .get(rentController.getAll)
    .post(rentController.createRent)
module.exports = rentRouter 