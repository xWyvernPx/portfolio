import { ModalActive } from "./Modal";
import showdown from "showdown";
import { BlogDetail } from "./BlogDetail";
const converter = new showdown.Converter();
import { _create } from "../utils/DOM";
export interface Blog {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  createdAt: string;
}
export const BlogCard = (blog: any) => {
  console.log(blog);

  const cardWrapper = _create("div", {
    class: "blog-card-wrapper",
  });

  const thumnbailWrapper = _create("div", {
    class: "blog-card-thumbnail-wrapper",
  });
  const thumbnail = _create("img", {
    src: blog.cover || "https://source.unsplash.com/random",
  });
  thumnbailWrapper.appendChild(thumbnail);
  cardWrapper.appendChild(thumnbailWrapper);

  const blogTitle = _create("h3");
  blogTitle.className = "blog-card-title";
  blogTitle.textContent = blog.properties.Name.title?.[0]?.plain_text;
  cardWrapper.appendChild(blogTitle);

  const blogContent = _create("p");
  blogContent.className = "blog-card-content";
  blogContent.textContent = blog.content;

  cardWrapper.appendChild(blogContent);
  cardWrapper.addEventListener("click", () => {
    const contentConverted = converter.makeHtml(blog.content);
    const contentWrapper = _create("div");
    contentWrapper.innerHTML = contentConverted;
    ModalActive(BlogDetail({ ...blog, content: contentConverted }));
  });
  return cardWrapper;
};
