const mongoose = require("mongoose");
const { teacherSchema } = require("./Teacher")

const coursesModel = mongoose.model("Course", {
    courseName: {
        type: String,
        required: true
    },
    teacher: {
        type: teacherSchema,

    },
    comments: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

module.exports = coursesModel 