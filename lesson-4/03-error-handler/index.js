const fs = require("node:fs/promises");
const path = require("node:path");

const express = require("express");

const app = express();

app.get("/books", async (req, res, next) => {
  const filePath = path.join(__dirname, "boooks.json");

  try {
    const data = await fs.readFile(filePath, "utf-8");
    const books = JSON.parse(data);

    res.send(books);
  } catch (error) {
    next(error);
  }
});

// Handle 404 Error
app.use((err, res, next) => {
  res.status(404).send("Route not found");
});

// Handle Server Error
app.use((error, _, res, __) => {
  console.error(error);

  res.status(500).send("Internal Server Error");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
