const mongoose = require("mongoose");


const teacherSchema = mongoose.Schema({
    teacherName: {
        type: String,
        required: true
    }
})
const teachersModel = mongoose.model("Teacher", teacherSchema)

module.exports = { teachersModel, teacherSchema } 