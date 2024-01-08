require("dotenv").config(); // or node --env-file=.env index.js
const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

console.log(DB_URI);

mongoose
  .connect(DB_URI)
  .then(() => console.info("Database connection successfully"))
  .catch((error) => console.error("Database connection error:", error));
