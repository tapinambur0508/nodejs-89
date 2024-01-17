const express = require("express");

const router = express.Router();

const authRoutes = require("./auth");
const bookRoutes = require("./books");

const authMiddleware = require("../middleware/auth");

router.use("/auth", authRoutes);
router.use("/books", authMiddleware, bookRoutes);

module.exports = router;
