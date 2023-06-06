const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  bookId: String,
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

const booksModel = model("Books", bookSchema);
module.exports = booksModel;
