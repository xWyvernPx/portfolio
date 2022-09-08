import "./style.css";
// import * as SimpleMDE from "simplemde";
import { LandingPage } from "./landing";
import { BlogPage } from "./blogPage";
// import {} from "./";
// import * as SimpleMDE from "simplemde";
import { ModalActive, modalInit } from "./components/Modal";
const body = document.querySelector("body");
const themeButton = document.querySelector(".theme_toggle_btn");
const icon = document.createElement("i");
icon.classList.add("fa-solid", "fa-lightbulb");
// themeButton?
console.log(body, themeButton);
themeButton?.appendChild(icon);
themeButton?.addEventListener("click", () => {
  body?.classList.toggle("dark");
  icon.className = "";
  if (body?.classList.contains("dark")) {
    icon.className = "fa-solid fa-lightbulb";
  } else {
    icon.className = "fa-solid fa-moon";
  }
});

const createButton = document.querySelector(".blog-create-button");
createButton?.addEventListener("click", () => {
  const credential = sessionStorage.getItem("access_token");
  // TODO : API get me
  if (credential) {
    ModalActive(document.createElement("div"));
  } else {
    setTimeout(() => ModalActive(document.createElement("div")), 0);
  }
});

const path = window.location.pathname;
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
