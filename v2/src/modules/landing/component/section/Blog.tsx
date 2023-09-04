import React from 'react'
import BlogCard from './BlogCard'
import { useNavigate } from 'react-router-dom'

type Props = {
    blogs: any[]
}

const Blog = ({blogs}: Props) => {
    const nav = useNavigate();
  return (
    <section className="section" id="blog" style={{ paddingTop: "2rem" }}>
        <div className="section_header">
          <span className="section_title">Blogs</span>
          <button className="see_all_button" onClick={()=>{nav("/blog")}}>See All</button>
        </div>
        <div className="project_list">
          {blogs.map((blog,i)=>(<BlogCard blog={blog} key={i}/>))}
        </div>
      </section>
  )
}

export default Blog