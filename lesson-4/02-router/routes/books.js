const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Books");
});

router.get("/:id", (req, res) => {
  res.send(`Book ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create Book");
});

module.exports = router;
