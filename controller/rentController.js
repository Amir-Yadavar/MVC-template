const booksModel = require("../models/Books")
const usersModel = require("../models/Users")
const rentModel = require("./../models/Rents")
const { isValidObjectId } = require("mongoose")


exports.getAll = async (req, res) => {
    const id = req.params.id
    if (id) {
        if (isValidObjectId(id)) {
            const allRent = await rentModel.find({})
            res.status(200).json(allRent)
            console.log(allRent);
        } else {
            res.status(404).json({ message: "the use not found .." })
        }
    } else {
        res.status(404).json({ message: "the id user undefined .." })
    }


}

exports.createRent = async (req, res) => {
    const id = req.params.id
    if (id) {
        if (isValidObjectId(id)) {
            const userFind = await usersModel.findOne({ _id: id })
            const { bookName } = req.body
            const findBook = await booksModel.findOne({ title: bookName })
            if (findBook) {
                if (findBook.free) {
                    const newRent = await rentModel.create({ userId: userFind._id, name: userFind.name, bookName: findBook.title })
                    const changeFree = await booksModel.updateOne({ title: bookName }, { free: false })
                    res.status(200).json(newRent)
                } else {
                    res.status(400).json({ message: "book in the rent .." })
                }
            } else {
                res.status(400).json({ message: "book not found .. " })
            }


        } else {
            res.status(404).json({ message: "the use not found .." })
        }
    } else {
        res.status(404).json({ message: "the id user undefined .." })
    }
}