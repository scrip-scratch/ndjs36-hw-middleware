const express = require("express");
const router = express.Router();
const store = require("../store/library");
const { v4: uuid } = require("uuid");
const fileMulter = require("../middleware/file");

class Book {
  constructor(bookData) {
    this.id = bookData.id;
    this.title = bookData.title;
    this.description = bookData.description;
    this.authors = bookData.authors;
    this.favorite = bookData.favorite;
    this.fileCover = bookData.fileCover;
    this.fileName = bookData.fileName;
    this.fileBook = bookData.fileBook;
  }
}

router.get("/", (req, res) => {
  const { library } = store;
  res.json(library);
});

router.post("/", fileMulter.single("book-file"), (req, res) => {
  const { library } = store;

  const newBookData = {
    id: uuid(),
    title: req.body.title,
    description: req.body.description,
    authors: req.body.authors,
    favorite: req.body.favorite,
    fileCover: req.body.fileCover,
    fileName: req.body.fileName,
    fileBook: req.file.filename,
  };

  const newBook = new Book(newBookData);
  library.push(newBook);

  res.json(newBook);
});

module.exports = router;
