const usersModel = require("./../models/Users")
const { isValidObjectId } = require("mongoose")


module.exports = async (req, res, next) => {
    const { id } = req.body
    if (isValidObjectId(id)) {
        const userAdmin = await usersModel.findOne({ _id: id })
        if (userAdmin) {
            if (userAdmin.role === "ADMIN") {
                next()
            } else {
                res.status(403).json({ message: "access for admin only .." })
            }
        } else {
            return res.status(404).json({ message: "user not found .. " })
        }


    } else {
        return res.status(404).json({ message: "the id is not Valid .." })
    }

}