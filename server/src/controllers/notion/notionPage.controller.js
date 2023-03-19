const { Client } = require("@notionhq/client");
const JSend = require("../../helpers/JSend");

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
      const [page, content] = await Promise.all([
        notion.pages.retrieve({
          page_id: id,
        }),
        notion.blocks.children.list({
          block_id: id,
        }),
      ]);
      res.json(
        JSend.SuccessResponse({
          page_info: page,
          content,
        })
      );
    } catch (error) {
      //   next();
      JSend.FailResponse(error, error.message);
    }
  },
};

module.exports = NotionPageController;
