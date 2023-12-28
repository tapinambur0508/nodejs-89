const express = require("express");

const app = express();

// app.use(express.json());

const jsonParser = express.json();

app.get("/books", (req, res) => {
  res.send("Books");
});

app.post("/books", jsonParser, (req, res) => {
  console.log(req.body);
  res.status(201).send({ ...req.body, id: Date.now() });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
