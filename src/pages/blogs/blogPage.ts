import { BlogApi } from "../../api/blogs.api";
import notion from "../../api/notionClient";
import { loadingModel } from "../../components/3Dmodel";
import { BlogCard } from "../../components/BlogCard";
import { $, $$, _create } from "../../utils/DOM";
const BlogPage = async () => {
  const app = document.querySelector("#app");
  // const LandingPageWrapper = document.createElement("div");

  // const path = window.location.pathname;
  app.innerHTML = "";
  const threedart = document.createElement("canvas");
  threedart.id = "canvas";
  threedart.classList.add("canvas");
  app?.appendChild(threedart);
  loadingModel();
  const littleTitle = document.createElement("span");
  littleTitle.classList.add("hello_label");
  littleTitle.textContent = "Hello, I'm Phong - a web developer ";
  app?.appendChild(littleTitle);

  //Big title
  const bigTitleWrapper = document.createElement("div");
  bigTitleWrapper.classList.add("block_wrapper");
  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("intro_content");
  const nameTitle = document.createElement("span");
  nameTitle.textContent = "Le Thanh Phong";
  contentWrapper.appendChild(nameTitle);
  const jobTitle = document.createElement("span");
  jobTitle.textContent = "Digital Nomad (Web Developer)";
  contentWrapper.appendChild(jobTitle);

  //avatar
  const avatarWrapper = document.createElement("div");
  avatarWrapper.classList.add("avatar_wrapper");
  const avatarImg = document.createElement("img");
  avatarWrapper.appendChild(avatarImg);
  avatarImg.src =
    "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/167680325_2940176386304476_5438954694978316709_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m9tfUo_9KgwAX_US08P&tn=Z06tV1_Agc9ZWTHY&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT87fspfRGKywAOu786SLIYZ_OEcLbzwR5LdNp6UPm1ong&oe=6324D497";

  bigTitleWrapper.appendChild(contentWrapper);
  bigTitleWrapper.appendChild(avatarWrapper);
  app?.appendChild(bigTitleWrapper);

  let page = 1;
  const limit = 12;
  let next_cursor = undefined;

  const PaginationWrapper = document.createElement("div");

  const loadMoreButton = document.createElement("button");
  PaginationWrapper.appendChild(loadMoreButton);
  PaginationWrapper.className = "pagi_panel active";

  const blogList = document.createElement("div");
  blogList.className = "project_list";

  let blogs: any[] = [];
  // try {
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
  // } catch (error) {
  //   blogs = [];
  // }
  console.log(blogs);
  renderBloglist(blogList, blogs, () => {});
  loadMoreButton.textContent = "Load more";
  loadMoreButton.classList.add("load_button");
  app?.appendChild(blogList);
  app?.appendChild(PaginationWrapper);

  const loadmoreHandler = async () => {
    page++;
    blogs.push(
      ...(await BlogApi.getNotionPages({
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
      }))
    );
    renderBloglist(blogList, blogs);
  };
  loadMoreButton.addEventListener("click", () => loadmoreHandler());
};

const renderBloglist = (
  blogList: HTMLDivElement,
  blogs: any[],
  toggleLoadmore?: Function
) => {
  blogList.innerHTML = "";
  blogs.forEach((blog) => blogList.appendChild(BlogCard(blog)));
  if (blogs.length > 0) {
    toggleLoadmore?.();
  }
};

const getBlogs = async () => {
  const blogs = await notion.databases.list({
    page_size: 10,
  });
  console.log(blogs);
};

export default BlogPage;
