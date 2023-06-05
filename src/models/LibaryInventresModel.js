const { Schema, model } = require("mongoose");

const addBooksModel = new Schema({
  bookId: Schema.Types.ObjectId,
  name: {
    bookName: String,
  },
  languages: {
    multiLanguages: Boolean,
    languages: [],
  },
  auther: {
    name: String,
    about: String,
  },
});

const addBooks = model('Books',addBooksModel)
module.exports = addBooks;
