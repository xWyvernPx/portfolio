import { ModalActive } from "./Modal";
import showdown from "showdown";
import { BlogDetail } from "./BlogDetail";
const converter = new showdown.Converter();
import { _create } from "../utils/DOM";
import { BlogTag } from "./common/tags/BlogTag";
import { navigateTo } from "../main";
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
    src:
      blog?.cover?.external?.url ||
      "https://source.unsplash.com/1200x300/?random",
  });

  thumnbailWrapper.appendChild(thumbnail);
  cardWrapper.appendChild(thumnbailWrapper);

  const blogTitle = _create(
    "h3",
    {
      class: "blog-card-title",
      style: {
        textAlign: "center",
      },
    },
    {
      textContent: `${blog?.icon?.emoji || ""}  ${
        blog.properties.Name.title?.[0]?.plain_text
      }`,
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
  var mode: "dm" | "lm" = "dm";
  window.$on("mode_change", (isDarkMode) => {
    if (isDarkMode) {
      mode = "dm";
    } else {
      mode = "lm";
    }
    const tags = getTags(blog);
    tagContainer.innerHTML = "";
    tags.forEach(({ name, color }) => {
      tagContainer.appendChild(
        BlogTag({
          color,
          name,
          mode,
        })
      );
    });
  });
  const tags = getTags(blog);
  tagContainer.innerHTML = "";
  tags.forEach(({ name, color }) => {
    tagContainer.appendChild(
      BlogTag({
        color,
        name,
        mode,
      })
    );
  });
  cardWrapper.appendChild(tagContainer);
  cardWrapper.addEventListener("click", () => {
    window.$emit("persistBlogs");
    const contentWrapper = _create("div");
    contentWrapper.innerHTML = "da";
    // ModalActive(BlogDetail({ ...blog, content: "contentConverted" }));
    navigateTo("/blogs/" + blog?.id);
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

const getTags = (blog: any) => {
  var tags = [];
  const propsToGetTags = [
    { name: "Stack", type: "multi_select" },
    { name: "Tech", type: "multi_select" },
  ];
  propsToGetTags.forEach((prop) => {
    const data = blog.properties[prop.name][prop.type];
    if (Array.isArray(data)) {
      tags.push(...data);
    } else {
      tags.push(...data);
    }
  });
  console.log("TAGS", tags);
  return tags;
};
