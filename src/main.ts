import "./style.css";
// const LandingPage = await import("./landing");
// const BlogPage = await import("./blogPage");
import { loadingModel } from "./components/3Dmodel";
import { BlogCreateForm } from "./components/BlogCreateForm";
import { ModalActive, modalInit } from "./components/Modal";
import BlogPage from "./pages/blogs/blogPage";
import LandingPage from "./pages/landing";


import { BlogApi } from "./api/blogs.api";
import "./app";
import { clearElement } from "./app";
import common from "./assets/common.json";
import BlogDetailPage from "./pages/blogs/detail";
import { $ } from "./utils/DOM";
// import * as SimpleMDE from "simplemde";
const path = window.location.pathname;

const body = document.querySelector("body");
const themeButton = document.querySelector(".theme_toggle_btn");
const icon = document.createElement("i");

icon.classList.add("fa-solid", "fa-lightbulb");
// themeButton?

console.log(body, themeButton);
themeButton?.appendChild(icon);
themeButton?.addEventListener("click", () => {
  body?.classList.toggle("dark");
  console.log($("#logo img"));
  const isDark =  body?.classList.contains("dark")
  $("#logo img").src = isDark
    ? common.logo.light
    : common.logo.dark;
  icon.className = "";
  if (isDark) {
    $('.notion.notion-app')?.classList.add('dark-mode');
    $('.notion.notion-app')?.classList.remove('light-mode');
    icon.className = "fa-solid fa-lightbulb";
  } else {
    $('.notion.notion-app')?.classList.remove('dark-mode');
    $('.notion.notion-app')?.classList.add('light-mode');
    icon.className = "fa-solid fa-moon";
  }
  window.$emit("mode_change",isDark)
});

const createButton = document.querySelector(".blog-create-button");
(async () => {
  // const me = await fetch(
  //   "https://wyvernp-portfolio.azurewebsites.net/account/auth",
  //   {
  //     method: "GET",
  //     credentials: "include",
  //   }
  // )
  //   .then((result) => result?.json())
  //   .then((result) => result?.data);
  // const me2 = document.cookie.includes("ssid");
  // if (!me || !me2) {
  //   createButton.classList.add("disable");
  // }
  createButton.classList.add("disable");
})();

createButton?.addEventListener("click", async () => {
  const credential = sessionStorage.getItem("access_token");
  // TODO : API get me
  if (credential) {
    ModalActive(document.createElement("div"));
  } else {
    setTimeout(() => ModalActive(BlogCreateForm()), 0);
  }
});


window.$on("load_model", async () => {
  console.log("event");
  var is_load =  loadingModel();
  var try_count = 0;
  const TRY_TIMES = 5;
    while(!is_load && try_count < TRY_TIMES){
      await setTimeout(()=>{
        if(!is_load){
          is_load =  loadingModel();
        }
      },2000)
      try_count++;
    };
});

modalInit();
interface RouteConfig {
  component: (data?: any) => HTMLElement;
  fetchData?: (...params: string[]) => Promise<any>;
  paramValues?: string[];
}

const routes: { [url: string]: RouteConfig } = {
  "/": { component: LandingPage as any },
  "/blogs": { component: BlogPage as any },
  "/blogs/:blogId": {
    component: BlogDetailPage as any,
    fetchData: async (blogId: string) => {
      console.log("blogId", blogId);
      // const response = await  notion.getPage(blogId);
      // console.log(response);
      const response = await BlogApi.getNotionPageDetail(blogId);
      console.log(response);
      
      // return await response.json();
      return response;
    },
    paramValues: ["blogId"],
  },
};
const app = $("#app");

// Listen for changes to the URL
window.addEventListener("popstate", async () => {
 
  // Get the current URL

  const url = window.location.pathname;
  clearElement(app)
  app.innerHTML = "";

  if (window.location.pathname.includes("#")) {
  } else {
    // Call the corresponding function for the current route
    console.log("ROUTE WITH EVENT");
    
    clearElement(app)
    const route = findRoute(url);
    if (route) {
      const { component, fetchData,paramValues } = route;
      // const params = extractParams(url, route);
      
      if (fetchData) {
        const data = await fetchData(paramValues);
        app.appendChild(await component(data));
      } else {
        const content = await component();
        if (content !== undefined) {
          // clearElement(app)

          app.appendChild(content);
        }        
      }
    } else {
      // app.appendChild(createNotFoundPageElement());
      console.error("Could not find page")
    }
  }
});

window.onload = () => {
  navigateTo(path);
};
// Navigate to a new URL and push it to the browser's history
export async function navigateTo(url) {
  window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
 
}

function findRoute(url) {
  for (const [route, config] of Object.entries(routes)) {
    if (route === url) {
      return config;
    }
    if (route.includes(":")) {
      const regex = new RegExp(route.replace(/:[^\s/]+/g, "([\\w-]+)"));
      const match = url.match(regex);
      if (match) {
        const paramValues = match.slice(1);
        const { component, fetchData } = config as any;
        return { component, fetchData, paramValues };
      }
    }
  }
  return null;
}

export function extractParams(url, route) {
  const params = [];
  if (route.paramValues) {
    const parts = url.split("/");
    const paramIndexes = [];
    route.paramValues.forEach((param) => {
      const paramIndex = parts.indexOf(param);
      if (paramIndex !== -1) {
        paramIndexes.push(paramIndex);
        params.push(parts[paramIndex]);
      }
    });
    paramIndexes.forEach(index => {
      parts.splice(index, 1);
    });
    url = parts.join("/");
  }
  return [url, ...params];
}

export function goBack(): void {
  window.history.back();
}

