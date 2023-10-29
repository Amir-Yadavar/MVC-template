const { MongoClient } = require("mongodb");

const url = "mongodb://0.0.0.0:27017/";

const dbName = "library";

const dbConection = new MongoClient(url);

module.exports = {
  dbLib: async () => {
    await dbConection.connect();
    const db = dbConection.db(dbName);

    return db;
  },
};
