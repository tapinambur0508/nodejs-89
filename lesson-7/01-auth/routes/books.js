const express = require("express");

const BookController = require("../controllers/book");

const router = express.Router();
const jsonParser = express.json();

router.get("/", BookController.getBooks);

router.get("/:id", BookController.getBook);

router.post("/", jsonParser, BookController.createBook);

router.put("/:id", jsonParser, BookController.updateBook);

router.delete("/:id", BookController.deleteBook);

router.patch("/:id/favorite", jsonParser, BookController.changeBookFavorite);

module.exports = router;
