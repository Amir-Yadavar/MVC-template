const usersModel = require("./../models/Users")
const { isValidObjectId } = require("mongoose")

exports.newUser = async (req, res) => {
    const { name, userName, email } = req.body

    if (name === "" || userName === "" || email === "") {
        res.status(404).json("data is empty")
    } else {
        usersModel.create({
            name, userName, email
        })
        res.json("user successfuly")
    }
}

exports.remove = async (req, res) => {
    const { id } = req.params
    if (isValidObjectId(id)) {
        const userDelete = await usersModel.findByIdAndDelete({ _id: id })
        if (!userDelete) {
            return res.status(404).json("user not find")
        }
    } else {
        return res.status(404).json("id not valid")
    }
    res.status(202).json("user deleted Successfully :)")
}

exports.getOneUser = async (req, res) => {
    const { id } = req.params

    if (isValidObjectId(id)) {
        const user = await usersModel.findOne({ _id: id })
        res.json(user)
    } else {
        res.status(404).json("the id is not valid")
    }
}