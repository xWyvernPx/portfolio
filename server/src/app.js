const express = require("express");
const cors = require("cors");
const app = express();
const Router = require("./routes/index.route");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: "*",
  })
);
Router(app);
app.use("/", (req, res, next) => {
  res.send("Hello");
});

module.exports = app;
