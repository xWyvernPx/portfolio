// import * as SimpleMDE from "simplemde";
// const SimpleMDE = require("simplemde");
import ImageKit from "imagekit-javascript";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { closeModalHanlder } from "./Modal";
export const BlogCreateForm = () => {
  const modal = document.querySelector("modal-wrapper");
  const reader = new FileReader();
  let thumbnailBase64 = "";
  const form = document.createElement("form");
  form.classList.add("form", "blog-create-form");
  const inputTitleField = document.createElement("input");
  inputTitleField.name = "title";
  inputTitleField.id = "title";
  inputTitleField.placeholder = " ";
  form.appendChild(TextField(inputTitleField, "Title", "title"));

  //image selector
  const imageSelectorWrapper = document.createElement("div");
  imageSelectorWrapper.className = "image-selector-wrapper";
  const image = document.createElement("img");
  image.src =
    "https://www.cepi.org/wp-content/uploads/2020/06/dummy-image-landscape-1024x585-1.jpg";
  const label = document.createElement("label");
  label.htmlFor = "image-selector";
  label.className = "image-selector-label";
  label.appendChild(image);

  const imageSelector = document.createElement("input");
  imageSelector.id = "image-selector";
  imageSelector.name = "image-selector";
  imageSelector.type = "file";
  reader.onload = (e) => {
    image.src = e?.target?.result as any;
    thumbnailBase64 = e?.target?.result as any;
  };
  imageSelector.addEventListener("change", (e) => {
    const tg = e?.target as any;
    const f = tg.files[0];
    reader.readAsDataURL(f);
  });
  imageSelectorWrapper.appendChild(label);
  imageSelectorWrapper.appendChild(imageSelector);
  const thumbnailTitle = document.createElement("h2");
  thumbnailTitle.style.fontSize = "1.3rem";
  thumbnailTitle.style.fontWeight = "600";
  thumbnailTitle.textContent = "Thumbnail";
  form.appendChild(thumbnailTitle);
  form.appendChild(imageSelectorWrapper);
  const mde = document.createElement("textarea");
  mde.className = "mde";
  mde.id = "mde";
  let mdevalue = "";
  setTimeout(() => {
    const simplemde = new SimpleMDE({
      element: document.querySelector("#mde"),
      autoDownloadFontAwesome: true,
    });
    form.onsubmit = async (e) => {
      e.preventDefault();

      document.querySelector(".secondary-loader").classList.add("active");

      const formData = new FormData(e.target as any);
      const imgkit = new ImageKit({
        urlEndpoint: "https://ik.imagekit.io/flamefoxeswyvernp",
        publicKey: "public_S6vyU9FG56dNofgzx0hbbBAZGDs=",
        authenticationEndpoint: "http://localhost:4422/imagekit",
      });
      const res = await imgkit.upload({
        file: formData.get("image-selector") as any,
        fileName: "blog_image",
        folder: "/portfolio",
      });
      console.log(res.url);

      const data = {
        title: formData.get("title"),
        content: simplemde.value(),
        thumbnail: res.url,
      };
      //TODO : loading
      console.log(data);
      await fetch("http://localhost:4422/blog/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => response.json())
        .then((rs) => {
          document
            .querySelector(".secondary-loader")
            .classList.remove("active");
          if (rs.status === "SUCCESS") {
            // window.location.href = "http://localhost:5173/blogs";

            Toastify({
              text: rs?.message,
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "bottom", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                zIndex: "1000",
              },
              onClick: function () {}, // Callback after click
            }).showToast();
            closeModalHanlder();
          } else
            Toastify({
              text: rs?.message,
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "bottom", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background:
                  " linear-gradient(to right, rgba(253, 139, 143, 0.35), rgba(245, 181, 163, 0.35))",
                zIndex: "1000",
              },
              onClick: function () {}, // Callback after click
            }).showToast();
        });
    };
  }, 0);
  form.appendChild(mde);

  const submitButton = document.createElement("button");
  submitButton.className = "primary-button";
  submitButton.type = "submit";
  submitButton.textContent = "Save";
  form.appendChild(submitButton);

  return form;
};

export const TextField = (
  inputField: HTMLInputElement | HTMLSelectElement,
  nameOfLabel: string,
  nameOfControl: string
) => {
  const TextFieldWrapper = document.createElement("div");
  TextFieldWrapper.classList.add("text-field");
  const fieldLabel = document.createElement("label");
  fieldLabel.className = "text-field-label";
  fieldLabel.textContent = nameOfLabel;
  fieldLabel.htmlFor = nameOfControl;
  TextFieldWrapper.appendChild(inputField);
  TextFieldWrapper.appendChild(fieldLabel);
  return TextFieldWrapper;
};
