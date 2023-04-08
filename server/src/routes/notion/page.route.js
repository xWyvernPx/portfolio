import express from "express";
import NotionController from "../../controllers/notion/notionPage.controller.js";

const NotionPageRouter = express.Router();

NotionPageRouter.get("/", NotionController.getAllPages);
NotionPageRouter.get("/:id", NotionController.getDetailPage);
NotionPageRouter.post("/");

export default NotionPageRouter;
