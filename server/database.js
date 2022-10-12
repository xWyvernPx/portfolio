const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sa:WyvernP2506@portfolio.8r13bx1.mongodb.net/portfolio?retryWrites=true&w=majority",
    { dbName: "portfolio" }
  )
  .then(() => {
    console.log(" db connected successfully");
  })
  .catch((e) => {
    console.log(" db not connected " + e);
  });
