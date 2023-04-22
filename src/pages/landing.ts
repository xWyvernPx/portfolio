import { loadingModel } from "../components/3Dmodel";
import { BlogCard } from "../components/BlogCard";
import { MediaTag } from "../components/mediaTag";
import { ProjectCard } from "../components/projectCard";
import { projects } from "../mockData";
import staticContent from "../assets/common.json";
//3D
import { $, $$, _create } from "../utils/DOM";
import { BlogApi } from "../api/blogs.api";
import { navigateTo } from "../main";
import useLoading from "../components/hooks/useLoading";
import { Hero } from "../components/common/hero/Hero";
const LandingPage: () => void = async () => {
  const {closeLoading,openLoading} = useLoading();
  openLoading();
  const pageWithHero = Hero({showAboutMe:true});
  // Project section
  const projectSection = _create("section",{
    class : "section",
    id: "project"
  });
  const projectSectionTitle = _create("span",{
    class : "section_title"
  },{
    textContent : "Project"
  });

  projectSection.appendChild(projectSectionTitle);
  const projectList = _create("div",{class: "project_list"});

  projects.forEach((project) => {
    projectList.appendChild(ProjectCard(project));
  });

  projectSection.appendChild(projectList);
  pageWithHero.appendChild(projectSection);

  //Blog  section
  const blockSection = _create("section",{
    class: "section",
    id : "blog"
  },{

  });
  blockSection.style.paddingTop = "2rem";
  const blockSectionTitle = _create("span",{
    class : "section_title"
  },{
    textContent: "Blogs"
  });

  const blogSectionHeader = _create("div",{
    class: "section_header"
  });
  
  const seeAllButton = _create("button");
  seeAllButton.classList.add("see_all_button");
  seeAllButton.textContent = "See All";
  seeAllButton.addEventListener("click", () => {
    // window.location.pathname = "/blogs";
    navigateTo("/blogs");
  });
  blogSectionHeader.appendChild(blockSectionTitle);
  blogSectionHeader.appendChild(seeAllButton);
  blockSection.appendChild(blogSectionHeader);

  const blogList = _create("div");
  blogList.classList.add("project_list");

  blockSection.appendChild(blogList);

  let blogs: any[] = [];
  // try {
  blogs = await BlogApi.getNotionPages({
    pagination: {
      limit: 6,
      next_cursor: null,
    },
  }).then((result) => {
    if (result.status === "SUCCESS") {
      return result.data.results;
    }
  });
  console.log(blogs);
  blogs?.forEach((blog: any) => {
    blogList.appendChild(BlogCard(blog));
  });
  pageWithHero.appendChild(blockSection);
  //Social Media section
  const mediaSection = _create("section", { class: "section" });
  const mediaSectionTitle = _create(
    "span",
    { class: "section_title" },
    { textContent: "Social Media" }
  );

  const mediaList = [
    { title: "Thanh Phong", type: "FB", link: "https://fb.me/xWyvernPx" },
    {
      title: "@wyvernp.js__",
      type: "Ins",
      link: "https://www.instagram.com/wyvernp.js__/",
    },
    { title: "xWyvernPx", type: "Git", link: "https://github.com/xWyvernPx" },
    {
      title: "Flame Foxes",
      type: "Discord",
      link: "https://discord.gg/xPzUyqX9Tx",
    },
  ];
  mediaSection.appendChild(mediaSectionTitle);
  mediaList.forEach((media) => {
    mediaSection.appendChild(MediaTag(media));
  });
  pageWithHero.appendChild(mediaSection);
  
  window.$emit("load_model");
  closeLoading?.();
  return pageWithHero;
};
export default LandingPage;
