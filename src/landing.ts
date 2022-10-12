import { loadingModel } from "./components/3Dmodel";
import { BlogCard } from "./components/BlogCard";
import { MediaTag } from "./components/mediaTag";
import { ProjectCard } from "./components/projectCard";
import { projects } from "./mockData";
//3D

export const LandingPage = async () => {
  const app = document.querySelector("#app");
  const LandingPageWrapper = document.createElement("div");

  // const path = window.location.pathname;

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
    "https://ik.imagekit.io/flamefoxeswyvernp/65C9A4B1-88BC-4EDE-8320-D7272DC1E202_cDN5k-uWN.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1663986362929";

  bigTitleWrapper.appendChild(contentWrapper);
  bigTitleWrapper.appendChild(avatarWrapper);
  app?.appendChild(bigTitleWrapper);

  //about section
  const aboutSection = document.createElement("section");

  const sectionTitle = document.createElement("span");
  sectionTitle.classList.add("section_title");
  sectionTitle.textContent = "About me";

  const aboutParagraph = document.createElement("p");
  aboutParagraph.textContent =
    "Hi Im Phong - a student at FPU University with aim to become a better software engineer day by day as well as a specialist in Javascript. The one who love to utilize the technology, visual art especially web to build anything that assists his life as well as surroundings better.";
  aboutParagraph.classList.add("about_paragraph");
  aboutSection.appendChild(sectionTitle);
  aboutSection.appendChild(aboutParagraph);
  app?.appendChild(aboutSection);

  // Project section
  const projectSection = document.createElement("section");
  projectSection.classList.add("section");
  projectSection.id = "project";
  const projectSectionTitle = document.createElement("span");
  projectSectionTitle.classList.add("section_title");
  projectSectionTitle.textContent = "Project";
  projectSection.appendChild(projectSectionTitle);
  const projectList = document.createElement("div");
  projectList.classList.add("project_list");
  projects.forEach((project) => {
    projectList.appendChild(ProjectCard(project));
  });
  projectSection.appendChild(projectList);
  app?.appendChild(projectSection);

  //Blog  section
  const blockSection = document.createElement("section");
  blockSection.classList.add("section");
  blockSection.style.paddingTop = "2rem";
  blockSection.id = "blog";
  const blockSectionTitle = document.createElement("span");
  blockSectionTitle.classList.add("section_title");
  blockSectionTitle.textContent = "Blog";
  const blogSectionHeader = document.createElement("div");
  blogSectionHeader.classList.add("section_header");
  const seeAllButton = document.createElement("button");
  seeAllButton.classList.add("see_all_button");
  seeAllButton.textContent = "See All";
  seeAllButton.addEventListener("click", () => {
    window.location.href = "/blogs";
  });
  blogSectionHeader.appendChild(blockSectionTitle);
  blogSectionHeader.appendChild(seeAllButton);
  blockSection.appendChild(blogSectionHeader);

  const blogList = document.createElement("div");
  blogList.classList.add("project_list");

  blockSection.appendChild(blogList);
  //fetch blogs
  const blogs = await fetch(
    "https://wyvernp-portfolio.azurewebsites.net/blog?page=1&limit=6"
  ).then((data) => data.json());
  console.log(blogs);
  blogs.data.forEach((blog: any) => {
    blogList.appendChild(BlogCard(blog));
  });
  app?.appendChild(blockSection);
  //Social Media section
  const mediaSection = document.createElement("section");
  mediaSection.classList.add("section");

  const mediaSectionTitle = document.createElement("span");
  mediaSectionTitle.classList.add("section_title");
  mediaSectionTitle.textContent = "Media";
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
    console.log(MediaTag(media));
  });
  app?.appendChild(mediaSection);
  return LandingPageWrapper;
};
