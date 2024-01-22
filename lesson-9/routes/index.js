const express = require("express");

const router = express.Router();

const authRoutes = require("./auth");
const bookRoutes = require("./books");
const userRoutes = require("./users");

const authMiddleware = require("../middleware/auth");

router.use("/auth", authRoutes);
router.use("/books", authMiddleware, bookRoutes);
router.use("/users", authMiddleware, userRoutes);

module.exports = router;
