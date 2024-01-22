const express = require("express");

const routes = require("./routes");

const app = express();

app.use("/avatars", express.static("public/avatars")); // http://localhost:8080/avatars/TrevorPhilips-GTAV-a6525a90-84a5-4e20-b232-b857e0242b41.png

app.use("/api", routes);

// Handle 404
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// Handle 500
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Internal Server Error");
});

module.exports = app;
