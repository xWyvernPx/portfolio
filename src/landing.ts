import { MediaTag } from "./components/mediaTag";
import { loadingModel } from "./components/3Dmodel";
import { projects } from "./mockData";
import { ProjectCard } from "./components/projectCard";
import { BlogCard } from "./components/BlogCard";
//3D

export const LandingPage = async () => {
  const app = document.querySelector("#app");
  const LandingPageWrapper = document.createElement("div");

  const path = window.location.pathname;

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

  //about section
  const aboutSection = document.createElement("section");

  const sectionTitle = document.createElement("span");
  sectionTitle.classList.add("section_title");
  sectionTitle.textContent = "About me";

  const aboutParagraph = document.createElement("p");
  aboutParagraph.textContent =
    "Hi Im Phong- a student at FPU University with aim to become a fullstack develeper. The one who love to utilize the technology especially web to build anything that help his life as well as surroundings better.";
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
    window.location.href = "http://localhost:5173/blogs";
  });
  blogSectionHeader.appendChild(blockSectionTitle);
  blogSectionHeader.appendChild(seeAllButton);
  const blog = blockSection.appendChild(blogSectionHeader);

  const blogList = document.createElement("div");
  blogList.classList.add("project_list");

  blockSection.appendChild(blogList);
  //fetch blogs
  const blogs = await fetch("http://localhost:4422/blog?page=1&limit=6").then(
    (data) => data.json()
  );

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
  mediaList.forEach((media, i) => {
    mediaSection.appendChild(MediaTag(media));
    console.log(MediaTag(media));
  });
  app?.appendChild(mediaSection);
  return LandingPageWrapper;
};
