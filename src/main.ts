import "./style.css";
// const LandingPage = await import("./landing");
// const BlogPage = await import("./blogPage");
import LandingPage from "./pages/landing";
import BlogPage from "./pages/blogPage";
import { ModalActive, modalInit } from "./components/Modal";
import { BlogCreateForm } from "./components/BlogCreateForm";
import { loadingModel } from "./components/3Dmodel";
import EventEmitter from "eventemitter3";
import { reactive } from "./components/hooks/reactive";
import useState from "./components/hooks/useState";
import css from "csstype";
import test from "./test";
import React from "react";
import * as ReactDOM from "react-dom/client";
declare global {
  interface Window {
    $on: typeof emitter.on;
    $emit: typeof emitter.emit;
  }
  interface HTMLElement {
    setStyle: (style: css.Properties) => void;
  }
}
const emitter = new EventEmitter();
window.$on = emitter.on.bind(emitter);
window.$emit = emitter.emit.bind(emitter);
// import {} from "./";
// import * as SimpleMDE from "simplemde";
HTMLElement.prototype.setStyle = function (style) {
  for (const prop in style) {
    if (this.style[prop] == "" || !this.style[prop] == null) {
      this.style[prop] = style[prop].toString();
    }
  }
};

// import * as SimpleMDE from "simplemde";
const path = window.location.pathname;
const $ = document.querySelector.bind(document);
if (path === "/") {
  const body = document.querySelector("body");
  body?.style.setProperty("overflow-y", "hidden");
  const primaryLoader = document.querySelector(".primary-loader");
  const progressLoader = document.querySelector(".progress-loader");
  // primaryLoader.classList.add("active");
  // progressLoader.classList.add("active");
  setTimeout(() => {
    primaryLoader.classList.remove("active");
    progressLoader.classList.remove("active");
    body?.style.setProperty("overflow-y", "auto");
  }, 5000);
}

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
  $("#logo img").src = body?.classList.contains("dark")
    ? "https://ik.imagekit.io/flamefoxeswyvernp/logo-light.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665500612008"
    : "https://ik.imagekit.io/flamefoxeswyvernp/logo-dark_HSjJ_OO-h.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665500660934";
  icon.className = "";
  if (body?.classList.contains("dark")) {
    icon.className = "fa-solid fa-lightbulb";
  } else {
    icon.className = "fa-solid fa-moon";
  }
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

// switch (path) {
//   case "/":
//     LandingPage();
//     break;
//   case "/blogs":
//     BlogPage();
//     break;
// }
const routes = {
  "/": LandingPage,
  "/blogs": BlogPage,
};
window.$on("load_modal", () => {
  while (true) {
    if ($("#canvas")) {
      loadingModel();
      return;
    }
  }
});
modalInit();

const app = $("#app");

// Listen for changes to the URL
window.addEventListener("popstate", async () => {
  // Get the current URL

  const url = window.location.pathname;
  if (window.location.pathname.includes("#")) {
  } else {
    // Call the corresponding function for the current route
    app.innerHTML = "";
    app.appendChild(await routes[url]());
  }
});

window.onload = () => {
  navigateTo(path);
};
// Navigate to a new URL and push it to the browser's history
export async function navigateTo(url) {
  window.history.pushState({}, "", url);
  app.innerHTML = "";
  app.appendChild(await routes[url]());
  loadingModel();
}

// Call the navigateTo function with the desired URL
// console.log(test());
// console.log();
