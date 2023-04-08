// import BlogRouter from "./blog/blog.route.js";
// import AccountRouter from "./account/account.route.js";
import ImageKit from "imagekit";
import NotionPageRouter from "./notion/page.route.js"; ///

const imgkit = new ImageKit({
  publicKey: "public_S6vyU9FG56dNofgzx0hbbBAZGDs=",
  privateKey: "private_1LD3K7nVG8n6LkP08+Lk21zCZ3M=",
  urlEndpoint: "https://ik.imagekit.io/flamefoxeswyvernp",
});

// Initializing a client
 const Router = (app) => {

  // app.use("/blog", BlogRouter);
  // app.use("/account", AccountRouter);
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
export default Router