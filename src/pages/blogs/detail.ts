import { clearElement, render } from "../../app";
import DetailLayout from "../../components/blogs/detail/DetailLayout";


const BlogDetailPage = (blog: any)=>{
    const app = document.querySelector("#app");
    // const LandingPageWrapper = document.createElement("div");
  
    // const path = window.location.pathname;
    render(DetailLayout({name : "Phong",blog}),'#app')
    // return ""
}
export default BlogDetailPage;