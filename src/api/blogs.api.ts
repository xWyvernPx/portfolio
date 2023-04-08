import { NotionListResponse, Pagination, QueryResponse } from ".";
import axiosClient from "./axiosClient";
interface GetNotionPageParams {
  pagination: Pagination;
}
export const BlogApi = {
  getAll: async ({
    pagination: { limit, page },
  }: {
    pagination: Pagination;
  }) => {
    try {
      const url = "/blog";
      const res = await axiosClient.get(url, { params: { page, limit } });

      return res?.data;
    } catch (error) {
      console.log("Fail to get blogs", error);
    }
  },
  getNotionPages: async function ({
    pagination: { limit, next_cursor },
  }: GetNotionPageParams): Promise<QueryResponse<NotionListResponse<any>>> {
    const url = "/page";
    const res = await axiosClient.get(url, {
      params: {
        limit,
        next_cursor,
      },
    });
    return res as any;
  },
  getNotionPageDetail: async function (pageId : string): Promise<QueryResponse<NotionListResponse<any>>> {
    const url = "/page/"+pageId;
    const res = await axiosClient.get(url);
    return res.data;
  },
};
