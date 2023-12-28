const express = require("express");

const app = express();

app.get("/books/:bookId/authors/:authorId", (req, res) => {
  const { bookId, authorId } = req.params;

  res.send(`Book ${bookId}, Author ${authorId}`);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
