const booksModel = require("../models/LibaryInventresModel");

const addBookInventry = async (data) => {
  try {
    const book = new booksModel(data);
    book.save();
    console.log("saved data ", data.name);
    return { save: true, data: data };
  } catch (err) {
    return { save: false, data: String(err) };
  }
};

const getBookById = async (id) => {
  try {
    const book = await booksModel.find({ bookId: id });
    return { sucess: true, data: book };
  } catch (err) {
    console.log("ERROR while find id ", err);
    return { sucess: false, data: String(err) };
  }
};

const showBooks = async () => {
  try {
    const result = await booksModel.find({});
    console.log(result);
    return { sucess: true, data: result };
  } catch (err) {
    console.log("Error fetching book inventry data ", err);
    return { sucess: false, data: String(err) };
  }
};

const updateBook = async (id, data) => {
  debugger;
  const options = { isUpdated: true };
  try {
  
    const result = await booksModel.findByIdAndUpdate({ _id: id }, data);
    console.log(result);
    return { sucess: true, data: result };
  } catch (err) {
    console.log("Error fetching book inventry data ", err);
    return { sucess: false, data: String(err) };
  }
};

module.exports = {
  addBookInventry,
  getBookById,
  showBooks,
  updateBook,
};
