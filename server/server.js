const app = require("./src/app.js");
const { createServer } = require("http");
require("dotenv").config();
require("./database.js");
const port = process.env.DEV_PORT || 4422;
const httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log("app listening on : http://localhost:" + port);
});
