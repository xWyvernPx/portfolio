import React, { useEffect, useState } from "react";
import Hero from "../component/hero/Hero";
import Social from "../component/section/Social";
import Project from "../component/section/Project";
import { projects } from "../mock/project";
import Blog from "../component/section/Blog";
import { BlogApi } from "../../../service/blogs.api";
import { useRecoilState } from "recoil";
import { BlogPageAtom } from "../../blog/atom/blogPageAtom";

const LandingPage = () => {
  const [blogPageState,setBlogState] = useRecoilState(BlogPageAtom);
  useEffect(()=>{
    if(blogPageState.topBlogs.length<=0){
      BlogApi.getNotionPages({
        pagination: {
          limit: 6,
          next_cursor: undefined,
        },
      }).then((result) => {
        if (result.status === "SUCCESS") {
          setBlogState({topBlogs: result.data.results});
        }
      })
    }
    
  },[])
  return (
    <div>
     <Hero/>
      <section>
        <span className="section_title">About me</span>
        <p className="about_paragraph">
          Hi Im Phong - a student at FPU University with aim to become a better
          software engineer day by day as well as a specialist in Javascript.
          The one who love to utilize the technology, visual art especially web
          to build anything that assists his life as well as surroundings
          better.
        </p>
      </section>
      <Project projects={projects}/>
     <Blog blogs={blogPageState.topBlogs}/>
     <Social/>
    </div>
  );
};

export default LandingPage;
