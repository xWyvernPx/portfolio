const BlogRouter = require("./blog/blog.route");
const ImageKit = require("imagekit");
const imgkit = new ImageKit({
  publicKey: "public_S6vyU9FG56dNofgzx0hbbBAZGDs=",
  privateKey: "private_1LD3K7nVG8n6LkP08+Lk21zCZ3M=",
  urlEndpoint: "https://ik.imagekit.io/flamefoxeswyvernp",
});
module.exports = (app) => {
  app.use("/blog", BlogRouter);
  app.get("/imagekit", (req, res, next) =>
    res.json(
      imgkit.getAuthenticationParameters(new Date().getTime().toString())
    )
  );
};
