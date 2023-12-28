const morgan = require("morgan");
const express = require("express");

const bookSchema = require("./schemas/book.js");

const app = express();

app.use(morgan("combined"));

// app.use(express.json());

const jsonParser = express.json();

app.get("/books", (req, res) => {
  res.send("Books");
});

app.post("/books", jsonParser, (req, res) => {
  const response = bookSchema.validate(req.body, { abortEarly: false });

  if (typeof response.error !== "undefined") {
    return res
      .status(400)
      .send(response.error.details.map((err) => err.message).join(", "));
  }

  res.status(201).send({ ...req.body, id: Date.now() });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
