import { Blog } from "./BlogCard";

export const BlogDetail = (blog: any) => {
  console.log(blog);
  const blogWrapper = document.createElement("div");
  blogWrapper.className = "blog-detail-wrapper";
  const blogThumbnail = document.createElement("div");
  const blogThumbnailImg = document.createElement("img");
  blogThumbnail.className = "blog-detail-thumbnail";
  blogThumbnail.appendChild(blogThumbnailImg);
  blogThumbnailImg.src = blog?.thumbnail;
  blogWrapper.appendChild(blogThumbnail);
  const blogTitle = document.createElement("span");
  blogTitle.className = "blog-detail-title";
  blogTitle.textContent = blog?.title;
  blogWrapper.appendChild(blogTitle);
  const blogSubinfo = document.createElement("span");
  blogSubinfo.className = "blog-detail-subinfo";
  const blogDate = document.createElement("span");
  blogDate.textContent = blog?.created_time;
  const blogAuthor = document.createElement("span");
  blogAuthor.textContent = "by WyvernP";
  blogSubinfo.appendChild(blogDate);
  blogSubinfo.appendChild(blogAuthor);
  blogWrapper.appendChild(blogSubinfo);
  const blogContent = document.createElement("p");
  blogContent.className = "blog-detail-content";
  blogContent.innerHTML = blog?.content;
  blogWrapper.appendChild(blogContent);
  return blogWrapper;
};
