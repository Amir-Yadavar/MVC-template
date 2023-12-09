// controller and code without express (pure node)

// const bookModule = require("../models/Books");
// const url = require("url");

// const getAllBooks = async (req, res) => {
//   const books = await bookModule.getBooks();
//   res.writeHead(201, { "Content-type": "aplication/json" });
//   res.write(JSON.stringify(books));
//   res.end();
// };

// const removeBook = async (req, res) => {
//   const urlParse = url.parse(req.url, true);
//   const bookID = urlParse.query.id;

//   const newBook = await bookModule.removeOne(bookID);
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.write(JSON.stringify({ message: "Book deleted :)" }));
//   res.end();
// };

// const updateOneBook = async (req, res) => {
//   const urlParse = url.parse(req.url, true);
//   const bookID = urlParse.query.id;

//   let bodyDetail = "";
//   req.on("data", (data) => {
//     bodyDetail = bodyDetail + data.toString();
//   });
//   req.on("end", async () => {
//     const newBook = await bookModule.updateOne(bookID, bodyDetail);
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify({ message: "Book updeted :)" }));
//     res.end();
//   });
// };

// const createOne = async (req, res) => {
//   let bodyDetail = "";

//   req.on("data", (data) => {
//     bodyDetail = bodyDetail + data.toString();
//   });

//   req.on("end", async () => {
//     const newBook = await bookModule.createBook(bodyDetail);
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify({ message: "Book adedd :)" }));
//     res.end();
//   });
// };

// module.exports = {
//   getAllBooks,
//   removeBook,
//   updateOneBook,
//   createOne,
// };

// express

const booksModel = require("./../models/Books")
const { isValidObjectId } = require('mongoose')

exports.getAll = async (req, res) => {
    const allBooks = await booksModel.find({})
    res.status(200).json(allBooks)
}

exports.createOne = async (req, res) => {
    const { title, price } = req.body

    const newBook = booksModel.create({ title, price })
    res.status(201).json("new book added ;)")
}

exports.remove = async (req, res) => {
    const { id } = await req.params


    if (isValidObjectId(id)) {
        const deleteBook = await booksModel.findByIdAndDelete({ _id: id })
        if (!deleteBook) {
            return res.status(404).json("the book not exist ..")
        } else {
            res.json("the book removed successfully .. ")
        }

    } else {
        return res.status(404).json("the id not valid")
    }


}
