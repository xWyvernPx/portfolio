import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import styled from "styled-components";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
import { BlogApi } from "../../../service/blogs.api";
// import "../../../assets/style/notion_custom.css";
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import { useRecoilValue } from "recoil";
import { appAtom } from "../../landing/atom/app.atom";


const BlogDetailPage = () => {
    const [blog,setBlog] = useState<any>();
    const appState = useRecoilValue(appAtom);
  const { id } = useParams();
  console.log(id);
  useEffect(()=>{
    BlogApi.getNotionPageDetail(id).then((res)=>{
        setBlog(res);
        
    })
  },[id])
    const nav = useNavigate();
  return <div>
    <Headline>
      <BackButton
        onClick={()=>nav(-1)}
      >
        <i className="fas fa-chevron-left"></i>Back
      </BackButton>
    </Headline>
    {blog && (
      <NotionRenderer
        defaultPageCover="https://source.unsplash.com/1200x300/?random"
        className={`${
          appState.theme == "dark" ? "dark-mode" : "light-mode"
        } notion_custom`}
        defaultPageIcon="📒"
        disableHeader
        previewImages
        mapPageUrl={(pageId) => {
          return `/blog/${pageId}`;
        }}
        components={{
          Code,
          Collection,
        }}
        recordMap={blog}
        fullPage={true}
        darkMode={false}
      />
    )}
  </div>;
};



// const Layout = styled.div`
//     width: 100%;
//     padding: 2rem;

// `
const Headline = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const BackButton = styled.button`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: var(--text-color);
  color: var(--text-background-color);
  align-items: center;
  transition: all 0.2s linear;
  &:hover {
    border-color: var(--text-color);
    i {
      transform: translateX(-3px);
    }
  }
`;

export default BlogDetailPage;
