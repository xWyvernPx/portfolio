import "./style.css";
// import * as SimpleMDE from "simplemde";
const path = window.location.pathname;
const $ = document.querySelector.bind(document);
if (path === "/") {
  const body = document.querySelector("body");
  body?.style.setProperty("overflow-y", "hidden");
  const primaryLoader = document.querySelector(".primary-loader");
  const progressLoader = document.querySelector(".progress-loader");
  primaryLoader.classList.add("active");
  progressLoader.classList.add("active");
  setTimeout(() => {
    primaryLoader.classList.remove("active");
    progressLoader.classList.remove("active");
    body?.style.setProperty("overflow-y", "auto");
  }, 2500);
}
import { LandingPage } from "./landing";
import { BlogPage } from "./blogPage";

// import {} from "./";
// import * as SimpleMDE from "simplemde";
import { ModalActive, modalInit } from "./components/Modal";
import { BlogCreateForm } from "./components/BlogCreateForm";
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
  const me = await fetch(
    "https://wyvernp-portfolio.azurewebsites.net/account/auth",
    {
      method: "GET",
      credentials: "include",
    }
  )
    .then((result) => result?.json())
    .then((result) => result?.data);
  const me2 = document.cookie.includes("ssid");
  if (!me || !me2) {
    createButton.classList.add("disable");
  }
})();

createButton?.addEventListener("click", () => {
  const credential = sessionStorage.getItem("access_token");
  // TODO : API get me
  if (credential) {
    ModalActive(document.createElement("div"));
  } else {
    setTimeout(() => ModalActive(BlogCreateForm()), 0);
  }
});

// body?.addEventListener("load")
switch (path) {
  case "/":
    LandingPage();
    break;
  case "/blogs":
    BlogPage();
    break;
}

modalInit();

// const simplemde = new SimpleMDE();
