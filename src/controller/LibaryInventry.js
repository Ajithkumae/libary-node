const addBooks = require("../models/LibaryInventresModel");

const addBookInventry = async (data) => {
  debugger;
  try {
    const book = new addBooks(data);
    book.save();
    console.log("saved data ", data.name);
    return { save: true, data: data };
  } catch (err) {
    return { save: false, data: String(err) };
  }
};

const getBookById = async (bookId) => {
  debugger;
  try {
    const book = addBooks.find({ bookId });
    console.log("get add book data ", data.name);
    return { sucess: true, data: book };
  } catch (err) {
    console.log("ERROR while find id ", err);
    return { sucess: false, data: String(err) };
  }
};

module.exports = {
  addBookInventry,
  getBookById,
};
