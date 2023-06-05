const express = require("express");
const addBooks = require("../models/LibaryInventresModel");
const {
  addBookInventry,
  getBookById,
} = require("../controller/libaryInventry");
const bookInventry = express.Router();

bookInventry.post("/add", async (req, res) => {
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
  debugger;
  if (result.save) {
    res.send(result.data);
  }
  if (!result.save) {
    res.status(500).send(result.data);
  }
});

bookInventry.get("/findBook", async (req, res) => {
  debugger;
  const { userId } = req.query;
  debugger;
  const result = await getBookById(userId);
  if (result.sucess) {
    res.send(result.data);
  }
  if (!result.sucess) {
    res.status(500).send(result.data);
  }
});

module.exports = bookInventry;
