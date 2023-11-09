// database witout express

// const { MongoClient } = require("mongodb");

// const url = "mongodb://0.0.0.0:27017/";

// const dbName = "library";

// const dbConection = new MongoClient(url);

// module.exports = {
//   dbLib: async () => {
//     await dbConection.connect();
//     const db = dbConection.db(dbName);

//     return db;
//   },
// };


// database with express

const mongoose = require("mongoose")

const urlMogoDB = "mongodb://localhost:27017/library"

mongoose.connect(urlMogoDB)
  .then(() => console.log("server connected yo mongoDb"))
  .catch((err) => console.log(err))