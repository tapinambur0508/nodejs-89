const mongoose = require("mongoose");

const DB_URI = `mongodb+srv://student:OPIgk7F8KWableSl@cluster0.ucav4wa.mongodb.net/sample_airbnb?retryWrites=true&w=majority`;

mongoose
  .connect(DB_URI)
  .then(() => console.info("Database connection successfully"))
  .catch((error) => console.error("Database connection error:", error));
