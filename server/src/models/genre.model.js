const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);
const Genre = mongoose.Model("Genre", genreSchema);

module.exports = Genre;
