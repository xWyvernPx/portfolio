import { ModalActive } from "./Modal";
import showdown from "showdown";
import { BlogDetail } from "./BlogDetail";
const converter = new showdown.Converter();
import { _create } from "../utils/DOM";
import { BlogTag } from "./common/tags/BlogTag";
export interface Blog {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  createdAt: string;
}
const mockTag = ["FrontEnd", "Backend", "DevOps", "Design"];
export const BlogCard = (blog: any) => {
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

  const blogTitle = _create(
    "h3",
    {
      class: "blog-card-title",
    },
    {
      textContent: blog.properties.Name.title?.[0]?.plain_text,
    }
  );
  cardWrapper.appendChild(blogTitle);
  const tagContainer = _create("div", {
    class: "tag-container",
    style: {
      display: "flex",
      gap: "0.5rem",
      flex: "0 0 auto",
    },
  });
  mockTag.forEach((tag) => {
    tagContainer.appendChild(
      BlogTag({
        color: "pink",
        name: tag,
      })
    );
  });

  cardWrapper.addEventListener("click", () => {
    console.log("blog click", blog);

    const contentWrapper = _create("div");
    contentWrapper.innerHTML = "da";
    ModalActive(BlogDetail({ ...blog, content: "contentConverted" }));
  });
  const cardDecoratorWrapper = _create("div", {
    class: "blog-card-wrapper__decorator",
  });
  const cardDecorator = _create("div", {
    class: "blog-card-decorator",
  });
  cardDecoratorWrapper.append(cardWrapper, cardDecorator);
  return cardDecoratorWrapper;
};
