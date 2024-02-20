const mongoose = require("mongoose")

const commentsModel = mongoose.model("Comment", {
    body: {
        type: String,
        required: true
    },
    course: mongoose.Types.ObjectId
})

module.exports = commentsModel