const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const bookInventry = require("./src/router/libaryInventry");
const app = express();
const port = process.env.PORT || 3001;

//mongoDB connection ////////////////
main().catch((err) => console.log("mongo connection error", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/libary");
  console.log("mongodb is connected");
}
//mongoDB connection end /////////////

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());


app.use("/book", bookInventry);
// body of request ///

// if worng api //
app.get("*", (req, res) => {
  res.send("API NOT FOUND");
});
// if worng api end //


// port listener ///
app.listen(port, () => console.log(`backend listining on port ${port}`));
// port listener end ///
