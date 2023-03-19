const BlogRouter = require("./blog/blog.route");
const ImageKit = require("imagekit");
const AccountRouter = require("./account/account.route");
const NotionPageRouter = require("./notion/page.route"); ///
const imgkit = new ImageKit({
  publicKey: "public_S6vyU9FG56dNofgzx0hbbBAZGDs=",
  privateKey: "private_1LD3K7nVG8n6LkP08+Lk21zCZ3M=",
  urlEndpoint: "https://ik.imagekit.io/flamefoxeswyvernp",
});
const { Client } = require("@notionhq/client");

// Initializing a client
module.exports = (app) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  app.use("/blog", BlogRouter);
  app.use("/account", AccountRouter);
  app.get("/imagekit", (req, res, next) =>
    res.json(
      imgkit.getAuthenticationParameters(new Date().getTime().toString())
    )
  );
  app.use("/page", NotionPageRouter);
  app.get("/test", async (req, res) => {
    const dbs = await notion.databases.retrieve({
      database_id: "8a7f09ff4f464e19be1abda7df5e802d",
    });
    res.json(dbs);
    // res.send(process.env.NOTION_TOKEN);
  });
};
