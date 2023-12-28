const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Movies");
});

router.get("/:id", (req, res) => {
  res.send(`Movie ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create Movie");
});

module.exports = router;
