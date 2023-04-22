import { Client } from "@notionhq/client";
import JSend from "../../helpers/JSend.js";
import { NotionAPI} from 'notion-client'

const notionAPI = new NotionAPI({authToken:  process.env.NOTION_TOKEN})

// Initializing a client

const NotionPageController = {
  getAllPages: async (req, res, next) => {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
    try {
      const { next_cursor, limit } = req.query;

      const pages = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
        page_size: limit ? +limit : 25,
        start_cursor: next_cursor,
        filter: {
          "and" : [
            {
              "property" : "Show on portfolio",
              "select" : {
                "does_not_equal" : "Not Show"
              }
            }
          ],
          
        }
      });
      //   const result = await notion.pages.retrieve({
      //     page_id: "cd94c4df-456f-4689-8174-c7cf427d4919",
      //   });
      //   const blocks = await notion.blocks.children.list({
      //     block_id: "cd94c4df-456f-4689-8174-c7cf427d4919",
      //   });
      res.json(JSend.SuccessResponse(pages));
    } catch (error) {
      next();
    }
  },
  getDetailPage: async (req, res, next) => {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
    try {
      const { id } = req.params;
      // const [page, content] = await Promise.all([
      //   notion.pages.retrieve({
      //     page_id: id,
      //   }),
      //   notion.blocks.children.list({
      //     block_id: id,
      //   }),
      // ]);
      // res.json(
      //   JSend.SuccessResponse({
      //     page_info: page,
      //     content,
      //   })
      // );

      const record = await notionAPI.getPage(id); 
      res.json(
        JSend.SuccessResponse(record)
      );
    } catch (error) {
      //   next();
      JSend.FailResponse(error, error.message);
    }
  },
};

export default NotionPageController;
