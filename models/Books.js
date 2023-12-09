// pure node


// const { ObjectId } = require("mongodb");
// const { dbLib } = require("../configs/db");

// const getBooks = async () => {
//   const db = await dbLib();
//   const collectiomBooks = db.collection("books");
//   const books = await collectiomBooks.find({}).toArray();
//   // console.log(books);
//   return books;
// };

// const removeOne = async (bookID) => {
//   const db = await dbLib();
//   const bookCollection = db.collection("books");
//   const result = await bookCollection.deleteOne({
//     _id: new ObjectId(bookID),
//   });
// };

// const updateOne = async (bookID, bodyDetail) => {
//   const db = await dbLib();
//   const bookCollection = db.collection("books");
//   const result = await bookCollection.updateOne(
//     { _id: new ObjectId(bookID) },
//     { $set: { price: JSON.parse(bodyDetail).price } }
//   );
// };

// const createBook = async (bodyDetail) => {
//   const newBook = {
//     title: JSON.parse(bodyDetail).title,
//     price: JSON.parse(bodyDetail).price,
//     free: true,
//   };

//   const db = await dbLib();

//   const bookCollection = db.collection("books");
//   const result = bookCollection.insertOne(newBook);
// };

// module.exports = {
//   getBooks,
//   removeOne,
//   updateOne,
//   createBook,
// };


// express

const mongoose = require('mongoose')

const booksModel = mongoose.model("books", {
  title: {
    type: String,
    required: true,
    min: 2
  },
  price: {
    type: Number,
    required: true
  },
  free: {
    type: Boolean,
    default: true
  }

})

module.exports = booksModel