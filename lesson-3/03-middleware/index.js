const fs = require("node:fs/promises");
const path = require("node:path");

const express = require("express");

const checkAuth = require("./middleware/checkAuth");

const app = express();

// app.use("/books", checkAuth);

app.get("/books", checkAuth, async (req, res) => {
  const filePath = path.join(__dirname, "books.json");

  try {
    const data = await fs.readFile(filePath, "utf-8");
    const books = JSON.parse(data);

    res.send(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/books", (req, res) => {
  res.send("Book created successfully");
});

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
