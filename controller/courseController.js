const courseModel = require("./../models/Course")
const commentsModel = require("./../models/Comment")

exports.getAll = async (req, res) => {
    const allCoureses = await courseModel.find({}, "-__v").populate("comments")
    res.json(allCoureses)
}

exports.setComment = async (req, res) => {
    const { body, courseId } = req.body

    const comment = await commentsModel.create({ body })

    await courseModel.findOneAndUpdate({ _id: courseId }, { $push: { comments: comment._id } })

    res.json({ message: "comment added to course successfully" })
}