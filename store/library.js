const { v4: uuid } = require("uuid");

/*
interface BookData {
    id: "string",
    title: "string",
    description: "string",
    authors: "string",
    favorite: "string",
    fileCover: "string",
    fileName: "string"
}
*/

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

const store = {
  library: [],
};

const getDefaultBooks = (bookCount = 3) => {
  let counter = 0;
  while (counter <= bookCount) {
    const book = {
      id: uuid(),
      title: `Book ${counter}`,
      description: `Description ${counter}`,
      authors: `Author ${counter}`,
      favorite: `${counter}`,
      fileCover: `cover_${counter}.png`,
      fileName: `book_${counter}`,
      fileBook: `book_${counter}.pdf`,
    };
    store.library.push(new Book(book));
    counter++;
  }
};

getDefaultBooks();

module.exports = store;
