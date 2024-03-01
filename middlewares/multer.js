const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + Math.random()
        const ext = path.extname(file.originalname)

        const validType = ['.jpg', '.jpeg', '.png']

        if (validType.includes(ext)) {

            cb(null, `${filename}${ext}`)
        } else {
            cb(new Error("not valid type .. "))
        }

    }
})

const maxSize = 3 * 1000 * 1000

const uploader = multer({
    storage, limits: {
        fileSize: maxSize
    }
})

module.exports = uploader