import {createBrowserRouter, Outlet, RouteObject} from "react-router-dom"
import App from "../App"
import { LandingPage } from "../page/LandingPage";
import LandingLayout from "../modules/landing/component/layout/LandingLayout";
import BlogDetailPage from "../modules/blog/page/BlogDetailPage";
import BlogPage from "../modules/blog/page/BlogPage";
const routes: RouteObject[] = [
    {
        path: "/",
        element:  <LandingLayout/>,
        children : [
            {
                path: "/",
                element: <LandingPage/>
            },
            {
                path: "/blog",
                element: <Outlet/>,
                children: [
                    {
                        path: "",
                        element: <BlogPage/>
                    },
                    {
                        path:":id",
                        element: <BlogDetailPage/>
                    }
                ]
            },
            {
                path: "/project",
                element: <LandingPage/>
            },
        ]
    }
]

const router = createBrowserRouter(routes);

export default router;
