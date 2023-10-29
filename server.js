const fs = require("fs");
const http = require("http");
const url = require("url");
const os = require("os");
const bookController = require("./controller/booksController");
// const dbStatic = require("./db.json");

// read db local fs module

// fs.readFile("db.json", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(JSON.parse(data));
// });

// fs rename

// fs.rename("dbNew.json", "db.json", (err) => {
//   if (err) {
//     throw err;
//   }
// });

//fs existSync

// const exitFile = fs.existsSync("db.json")

// console.log(exitFile)

// fs remove file

// fs.rm("dbOld.json", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs unlink

// fs.unlink("test.txt", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs write file

// fs.writeFile("test.txt","bilakh oskol chaft",(err)=>{
//   if(err){
//     throw err
//   }
// })

// fs appendFile

// fs.appendFile("test.txt"," osman dembele",(err)=>{
//   if(err){
//     throw err
//   }
// })

// fs mkdir

// fs.mkdir("amir",(err)=>{
//   if(err){
//     throw err
//   }
// })
// fs.mkdir("amir/ali", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs readFile

// const readFile = fs.readdir("./node_modules", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// console.log(readFile)

// fs.rmdir("./amir", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// os module

// console.log(os.networkInterfaces())

// http create

const server = http.createServer(async (req, res) => {
  const parseUrl = url.parse(req.url, true);

  if (req.method === "GET" && req.url === "/api/books") {
    bookController.getAllBooks(req, res);
  } else if (
    req.method === "DELETE" &&
    req.url.startsWith("/api/books/delete")
  ) {
    bookController.removeBook(req, res);
  } else if (req.method === "PUT" && req.url.startsWith("/api/books/update")) {
    bookController.updateOneBook(req, res);
  } else if (req.method === "POST" && req.url === "/api/books") {
    bookController.createOne(req, res);
  }
});

server.listen(5000, (err) => {
  if (err) {
    throw err;
  }
  console.log("server is successfully :))");
});
