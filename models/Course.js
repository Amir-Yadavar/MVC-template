const mongoose = require("mongoose");
const { teacherSchema } = require("./Teacher")

const coursesSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    teacher: {
        type: teacherSchema,

    },

})

coursesSchema.virtual('comments', {
    ref: "Comment",
    localField: '_id',
    foreignField: "course"
})

const coursesModel = mongoose.model("Course", coursesSchema)

module.exports = coursesModel 