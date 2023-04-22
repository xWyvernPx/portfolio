import { BlogApi } from "./blogs.api";

export const PageAPI = {
    getPages : async ({
        limit, next_cursor
    }:{
        limit : number,
        next_cursor : string
    }) => {
       return (await BlogApi.getNotionPages({
            pagination: {
              limit,
              next_cursor,
            },
          }).then((result) => {
            if (result.status === "SUCCESS") {
              next_cursor = result.data.next_cursor;
              console.log("RESULT FETCHED", result);
              return {results : result.data.results,
                pagination : {
                  next_cursor : result.data.next_cursor,
                  hasNext: result.data.has_more
                }
              };
            }
          }))
    }
}