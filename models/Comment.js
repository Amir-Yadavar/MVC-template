const mongoose = require("mongoose")

const commentsModel = mongoose.model("Comment", {
    body: {
        type: String,
        required: true
    }
})

module.exports = commentsModel