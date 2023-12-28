const express = require("express");

const router = express.Router();

const bookRoutes = require("./books");
const userRoutes = require("./users");
const movieRoutes = require("./movies");

router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/movies", movieRoutes);

module.exports = router;
