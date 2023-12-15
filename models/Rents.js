const mongoose = require("mongoose")

const rentModel = mongoose.model('rents', {
    userId: {
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true,
        min: 3
    },
    bookName: {
        type: String,
        required: true,
        min: 3
    }
})

module.exports = rentModel 