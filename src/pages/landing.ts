import { loadingModel } from "../components/3Dmodel";
import { BlogCard } from "../components/BlogCard";
import { MediaTag } from "../components/mediaTag";
import { ProjectCard } from "../components/projectCard";
import { projects } from "../mockData";
import staticContent from "../common.json";
//3D
import { $, $$, _create } from "../utils/DOM";
import { BlogApi } from "../api/blogs.api";
import { navigateTo } from "../main";
const LandingPage: () => void = async () => {
  const LandingPageWrapper = _create("div");
  // const path = window.location.pathname;

  const threedart = _create("canvas", { id: "canvas", class: "canvas" });
  LandingPageWrapper.appendChild(threedart);

  const littleTitle = _create(
    "span",
    { class: "hello_label" },
    { textContent: staticContent.hero.hero_welcome }
  );

  // littleTitle.textContent = "Hello, I'm Phong - a web developer ";
  LandingPageWrapper.appendChild(littleTitle);
  /** Big title **/
  const bigTitleWrapper = _create("div", { class: "block_wrapper" });
  const contentWrapper = _create("div", { class: "intro_content" });
  const nameTitle = _create(
    "span",
    {},
    {
      textContent: staticContent.common.name,
    }
  );
  contentWrapper.appendChild(nameTitle);

  const jobTitle = _create(
    "span",
    {},
    { textContent: staticContent.common.title }
  );
  contentWrapper.appendChild(jobTitle);

  //avatar
  const avatarWrapper = _create("div");
  avatarWrapper.classList.add("avatar_wrapper");
  const avatarImg = _create("img", {
    src: staticContent.common.avatar,
  }) as HTMLImageElement;

  avatarWrapper.appendChild(avatarImg);
  bigTitleWrapper.appendChild(contentWrapper);
  bigTitleWrapper.appendChild(avatarWrapper);
  LandingPageWrapper.appendChild(bigTitleWrapper);

  //about section
  const aboutSection = _create("section");

  const sectionTitle = _create(
    "span",
    { class: "section_title" },
    { textContent: "About me" }
  );

  sectionTitle.textContent = "About me";
  const aboutParagraph = _create(
    "p",
    { class: "about_paragraph" },
    { textContent: staticContent.common.description }
  );
  aboutSection.appendChild(sectionTitle);
  aboutSection.appendChild(aboutParagraph);
  LandingPageWrapper.appendChild(aboutSection);

  // Project section
  const projectSection = _create("section");
  projectSection.classList.add("section");
  projectSection.id = "project";
  const projectSectionTitle = _create("span");
  projectSectionTitle.classList.add("section_title");
  projectSectionTitle.textContent = "Project";
  projectSection.appendChild(projectSectionTitle);
  const projectList = _create("div");
  projectList.classList.add("project_list");
  projects.forEach((project) => {
    projectList.appendChild(ProjectCard(project));
  });
  projectSection.appendChild(projectList);
  LandingPageWrapper.appendChild(projectSection);

  //Blog  section
  const blockSection = _create("section");
  blockSection.classList.add("section");
  blockSection.style.paddingTop = "2rem";
  blockSection.id = "blog";
  const blockSectionTitle = _create("span");
  blockSectionTitle.classList.add("section_title");
  blockSectionTitle.textContent = "Blog";
  const blogSectionHeader = _create("div");
  blogSectionHeader.classList.add("section_header");
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
  LandingPageWrapper.appendChild(blockSection);
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
  LandingPageWrapper.appendChild(mediaSection);
  window.$emit("load_model");
  return LandingPageWrapper;
};
export default LandingPage;
