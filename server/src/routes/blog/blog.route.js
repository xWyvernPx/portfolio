import express from "express";
import { createBlog, getBlog } from "../../controllers/blog.controller.js";

const BlogRouter = express.Router();

BlogRouter.route("/").post(createBlog).get(getBlog);

export default BlogRouter;
