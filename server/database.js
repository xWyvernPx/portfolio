const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017", { dbName: "portfolio" })
  .then(() => {
    console.log(" db connected successfully");
  })
  .catch((e) => {
    console.log(" db not connected " + e);
  });
