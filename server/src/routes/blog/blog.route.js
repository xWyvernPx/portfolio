const express = require("express");
const { createBlog, getBlog } = require("../../controllers/blog.controller");
const BlogRouter = express.Router();

BlogRouter.route("/").post(createBlog).get(getBlog);

module.exports = BlogRouter;
