import app from "./src/app.js";
import { createServer } from "http";
// require("dotenv").config();
import("./database.js");
const port = process.env.DEV_PORT || 3000;
const httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log("app listening on : http://localhost:" + port);
});
