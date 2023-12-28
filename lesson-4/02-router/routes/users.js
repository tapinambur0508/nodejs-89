const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users");
});

router.get("/:id", (req, res) => {
  res.send(`User ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create User");
});

module.exports = router;
