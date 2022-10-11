import { ModalActive } from "./Modal";
import showdown from "showdown";
import { BlogDetail } from "./BlogDetail";
const converter = new showdown.Converter();

export interface Blog {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  createdAt: string;
}
export const BlogCard = (blog: Blog) => {
  const cardWrapper = document.createElement("div");
  cardWrapper.className = "blog-card-wrapper";

  const thumnbailWrapper = document.createElement("div");
  const thumbnail = document.createElement("img");
  thumnbailWrapper.className = "blog-card-thumbnail-wrapper";
  thumnbailWrapper.appendChild(thumbnail);
  thumbnail.src = blog.thumbnail || "https://source.unsplash.com/random";
  cardWrapper.appendChild(thumnbailWrapper);

  const blogTitle = document.createElement("h3");
  blogTitle.className = "blog-card-title";
  blogTitle.textContent = blog.title;
  cardWrapper.appendChild(blogTitle);

  const blogContent = document.createElement("p");
  blogContent.className = "blog-card-content";
  blogContent.textContent = blog.content;

  cardWrapper.appendChild(blogContent);
  cardWrapper.addEventListener("click", () => {
    const contentConverted = converter.makeHtml(blog.content);
    const contentWrapper = document.createElement("div");
    contentWrapper.innerHTML = contentConverted;
    ModalActive(BlogDetail({ ...blog, content: contentConverted }));
  });
  return cardWrapper;
};
