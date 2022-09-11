const blogService = require("../service/blog.service");
const { FailResponse, SuccessResponse } = require("../helpers/JSend");
const { createBlog } = require("../service/blog.service");
module.exports = {
  createBlog: async (req, res, next) => {
    try {
      const { ...blog } = req.body;
      console.log(req.body);
      //prototype blog  : {
      // content : string ,
      // thumbnail : string ,
      // title : string
      //    }

      const result = await blogService.createBlog(blog);
      res.json(
        result
          ? SuccessResponse(result, "Create new blog successfully")
          : FailResponse(result, "Create new blog failed")
      );

      return;
    } catch (e) {
      res.json(FailResponse(null, "Create new blog failed", e));
    }
  },
  getBlog: async (req, res, next) => {
    try {
      const { page, limit } = req.query;
      const result = await blogService.getAllBlog({ page, limit });
      res.json(
        result
          ? SuccessResponse(result, "Retrieved blogs successfully")
          : FailResponse(result, "Retrieved blogs failed")
      );

      return;
    } catch (error) {
      res.json(FailResponse(null, "Retrieved blogs failed", error));
    }
  },
};
