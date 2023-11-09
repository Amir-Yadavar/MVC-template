const mongoose = require("mongoose")

const usersModel = mongoose.model("users", {
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    crime: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: "USER"
    },
})

module.exports = usersModel