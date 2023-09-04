import express from "express";
import cors from "cors";
import path from "path";
import Router from "./routes/index.route.js";
const app = express();
import dotenv from "dotenv" 
import { countVisitor } from "./middleware/counter.js";
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3173",
    "http://localhost:5173", 
    "https://wyvernp.tech"],
    // credentials: true,
  })
);
app.use(countVisitor);
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
/* docker run -p 3000:3000 -p 2506:2506  -d --name portfolio --cpus 0.5 --memory 512m --ulimit nofile=1024:1024 --log-driver json-file --log-opt max-size=10m --log-opt max-file=3 --log-opt labels=portfolio -v /root/logs/porfolio:/var/log/docker portfolio --env-file .env */
export default app;
