import express from "express";
import cors from "cors";
import path from "path";
import Router from "./routes/index.route.js";
const app = express();
import dotenv from "dotenv" 
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    // credentials: true,
  })
);

Router(app);
// app.use(express.static(path.join(__dirname, "/public/build")));
// app.get("*", (req, res, next) => {
//   const fileDirectory = path.resolve(__dirname, ".", "public/build");

//   res.sendFile("index.html", { root: fileDirectory }, (err) => {
//     res.end();

//     if (err) throw err;
//   });
//   // res.sendFile("index.html", { root: __dirname });
// });

export default app;
