const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
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
app.use(express.static(path.join(__dirname, "/public/build")));
// app.get("*", (req, res, next) => {
//   const fileDirectory = path.resolve(__dirname, ".", "public/build");

//   res.sendFile("index.html", { root: fileDirectory }, (err) => {
//     res.end();

//     if (err) throw err;
//   });
//   // res.sendFile("index.html", { root: __dirname });
// });

module.exports = app;
