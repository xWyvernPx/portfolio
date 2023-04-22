import { render } from "../../app";
import DetailLayout from "../../components/blogs/detail/DetailLayout";


const BlogDetailPage = (blog: any)=>{

    // const LandingPageWrapper = document.createElement("div");
  
    // const path = window.location.pathname;
    render(DetailLayout({blog}),'#app')
    // return ""
}
export default BlogDetailPage;