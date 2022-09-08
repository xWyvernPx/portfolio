const BlogRouter = require("./blog/blog.route");
module.exports = (app) => {
  app.use("/blog", BlogRouter);
};
