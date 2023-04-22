import { BlogApi } from "../../api/blogs.api";
import notion from "../../api/notionClient";
import { PageAPI } from "../../api/page.api";
import { loadingModel } from "../../components/3Dmodel";
import { BlogCard } from "../../components/BlogCard";
import { BlogListPagination } from "../../components/blogs/list/Pagination";
import { Hero } from "../../components/common/hero/Hero";
import { $, $$, _create } from "../../utils/DOM";
import * as PagingHelper from "../../utils/paging";

let page = 1;
const limit = 9;
let next_cursor = undefined;
let hasNext = false;
const BlogPage = async () => {
  const app = document.querySelector("#app");
  const pageWithHero = Hero({showAboutMe:false});
  
  
 
  const blogSectionHeader = _create("div",{
    class: "section_header"
  });
  const blogSectionTitle = _create("span",{
    class : "section_title"
  },{
    textContent: "Blogs"
  });
  blogSectionHeader.appendChild(blogSectionTitle)
  pageWithHero.appendChild(blogSectionHeader);
  const blogList = _create("div",{
    class : "project_list"
  });

  let blogs: any[] = [];
  const persistBlogs = PagingHelper.getPersistBlogsList();
  window.$on("persistBlogs",()=>{
    console.log("persist blogs ");
    
    PagingHelper.persistBlogsList(blogs);
  })
  if(Array.isArray(persistBlogs) && persistBlogs.length > 0) {
    console.log("get from persist");
    blogs = persistBlogs;
  }else {
    console.log("get from api");
    blogs = await BlogApi.getNotionPages({
      pagination: {
      limit,
      next_cursor,
    },
  }).then((result) => {
    if (result.status === "SUCCESS") {
      next_cursor = result.data.next_cursor;
      console.log("RESULT FETCHED", result);
      return result.data.results;
    }
  });
}
  console.log(blogs);
  renderBloglist(blogList, blogs, () => {});
  pageWithHero?.appendChild(blogList);
  // pageWithHero?.appendChild(PaginationWrapper);
  const getListHandler = async () => {
    var next_cursor ;
    const {results, pagination} = await PageAPI.getPages({limit,next_cursor})
    blogs.push(
      ...results
    );
    PagingHelper.setNextPage(pagination.next_cursor);
    hasNext = pagination.hasNext;
    renderBloglist(blogList, blogs);
  };
  pageWithHero.appendChild(BlogListPagination({
    loadMoreHanler : getListHandler
  }))
  app.appendChild(pageWithHero)
  return pageWithHero;
};

const renderBloglist = (
  blogList: HTMLDivElement | HTMLElement,
  blogs: any[],
  toggleLoadmore?: Function
) => {
  blogList.innerHTML = "";
  blogs.forEach((blog) => blogList.appendChild(BlogCard(blog)));
  if (blogs.length > 0) {
    toggleLoadmore?.();
  }
};

export default BlogPage;
