import React, { useMemo } from "react";
import { TagColor, TagColorStyle } from "./tagColor";
import { useNavigate } from "react-router-dom";

type Props = {
  blog: any;
};
const propsToGetTags = [
  { name: "Stack", type: "multi_select" },
  { name: "Tech", type: "multi_select" },
];
const BlogCard = ({ blog }: Props) => {
    const navigate = useNavigate();

  const tags = useMemo(
    () =>
      propsToGetTags.reduce<any[]>((accumulator, prop) => {
        const data = blog.properties[prop.name][prop.type];
        if (Array.isArray(data)) {
          accumulator.push(...data);
        } else {
          accumulator.push(...data);
        }
        return accumulator;
      }, []),
    [blog]
  );
    const handleClickCard = (id: string) => {
        navigate(`/blog/${id}`);
    }
  return (
    <>
      <div className="blog-card-wrapper__decorator" onClick={()=>handleClickCard(blog.id)}>
        <div className="blog-card-wrapper">
          <div className="blog-card-thumbnail-wrapper">
            <img
              src={
                blog?.cover?.external?.url ||
                "https://source.unsplash.com/1200x300/?random"
              }
            />
          </div>
          <h3 className="blog-card-title" style={{ textAlign: "center" }}>
            {`${blog?.icon?.emoji || ""}  ${
              blog.properties.Name.title?.[0]?.plain_text
            }`}
          </h3>
          <div
            className="tag-container"
            style={{ display: "flex", gap: "0.5rem", flex: "0 0 auto", padding:"0.5rem 1rem" }}
          >
           {
            tags.map((tag,i)=><BlogTag tag={tag} key={i}/>)
           }
          </div>
        </div>
        <div className="blog-card-decorator" />
      </div>
    </>
  );
};
export const BlogTag = ({tag}:{tag:{
    name:string,
    color : TagColor
}}) => {
  return (
    <span
      className="tag-wrapper"
      style={{
        fontSize: "0.75rem",
        lineHeight: 1,
        padding: "0.35rem 0.75rem",
        borderRadius: "1rem",
        fontWeight: 600,
        color: TagColorStyle[tag.color]?.lm.color,
        backgroundColor: TagColorStyle[tag.color]?.lm.backgroundColor,
      }}
    >
        {tag?.name}
    </span>
  );
};
export default BlogCard;
