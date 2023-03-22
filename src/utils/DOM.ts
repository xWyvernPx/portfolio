import css from "csstype";
export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
type ContentProps =
  | "textContent"
  | "innerText"
  | "outerText"
  | "innerHTML"
  | "outerHTML";
export const _create = (
  tagName: string,
  options: { [key: string]: string | Object } = {},
  contents: {
    [key in ContentProps]?: string;
  } = {}
) => {
  const elem = document.createElement(tagName);
  Object.keys(options).forEach((key) => {
    if (key === "style") {
      elem.setStyle(options[key] as css.Properties);
    } else {
      elem.setAttribute(key, options[key] as string);
    }
  });
  Object.keys(contents).forEach((key) => {
    elem[key] = contents[key];
  });
  return elem;
};
