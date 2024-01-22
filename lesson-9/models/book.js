const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      match: /[\w\s]+/,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        "Action",
        "Biography",
        "History",
        "Horror",
        "Kids",
        "Learning",
        "Sci-Fi",
      ],
      default: "Action",
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
