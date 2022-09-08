const Blog = require("../models/blog.model");
const blogService = {
  createBlog: async (blog) => {
    return await Blog.create(blog);
  },
  getAllBlog: async ({ page, limit }) => {
    console.log(page + "======" + limit);
    return await Blog.find(
      {},
      {},
      {
        skip: (page - 1) * limit,
        limit: limit,
      }
    );
  },
};

module.exports = blogService;
