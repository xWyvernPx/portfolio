const express = require("express");
const NotionPageController = require("../../controllers/notion/notionPage.controller");
const NotionPageRouter = express.Router();

NotionPageRouter.get("/", NotionPageController.getAllPages);
NotionPageRouter.get("/:id", NotionPageController.getDetailPage);
NotionPageRouter.post("/");

module.exports = NotionPageRouter;
