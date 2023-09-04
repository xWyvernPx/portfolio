export interface Pagination {
  page?: number;
  limit?: number;
  next_cursor?: string;
}
export interface QueryResponse<T> {
  data: T;
  message?: string;
  status: "SUCCESS" | "FAILED";
}

export interface NotionPagination {
  next_cursor?: string;
  limit?: number;
}

export interface NotionListResponse<T> {
  object: string;

  results: T[];
  next_cursor?: string;
  has_more: boolean;
  type: string;
  page: any;
}
