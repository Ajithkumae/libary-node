const express = require("express");
const {
  addBookInventry,
  getBookById,
  showBooks,
  updateBook,
} = require("../controller/libaryInventry");
const bookInventry = express.Router();

bookInventry.post("/addBook", async (req, res) => {
  const {
    bookId,
    name: { bookName },
    languages: { multiLanguages, languages },
    auther: { name, about },
  } = req.body;

  const result = await addBookInventry({
    bookId,
    name: { bookName },
    languages: { multiLanguages, languages },
    auther: { name, about },
  });

  if (result.save) {
    res.send(result.data);
  }
  if (!result.save) {
    res.status(500).send(result.data);
  }
});

bookInventry.get("/getBookById", async (req, res) => {
  const { bookId } = req.query;
  const result = await getBookById(bookId);

  if (result.sucess) {
    res.send(result.data);
  }
  if (!result.sucess) {
    res.status(500).send(result.data);
  }
});

bookInventry.get("/all", async (req, res) => {
  const result = await showBooks();

  if (result.sucess) {
    res.send(result.data);
  }
  if (!result.sucess) {
    res.status(500).send(result.data);
  }
});
bookInventry.patch("/updateBookById", async (req, res) => {
  debugger
  const { id, data } = req.body;

  const result = await updateBook(id, data);

  if (result.save) {
    res.send(result.data);
  }
  if (!result.save) {
    res.status(500).send(result.data);
  }
});
module.exports = bookInventry;
