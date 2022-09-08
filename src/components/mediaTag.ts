export const MediaTag = ({
  link,
  title,
  type,
}: {
  type: "FB" | "LI" | "Ins" | "Git" | "Discord" | string;
  link: string;
  title: string;
}) => {
  const mediaTagWrapper = document.createElement("a");
  mediaTagWrapper.classList.add("media_wrapper");
  let icon = document.createElement("i");
  icon.classList.add("fa-brands");
  switch (type) {
    case "FB":
      icon.classList.add("fa-facebook");
      break;
    case "LI":
      icon.classList.add("fa-linkedin");
      break;
    case "Discord":
      icon.classList.add("fa-discord");
      break;
    case "Git":
      icon.classList.add("fa-github");
      break;
    case "Ins":
      icon.classList.add("fa-instagram");
      break;
  }
  const mediaTagTitle = document.createElement("span");
  mediaTagTitle.textContent = title;
  mediaTagWrapper.href = link;
  mediaTagWrapper.target = "_blank";
  mediaTagWrapper.appendChild(icon);
  mediaTagWrapper.appendChild(mediaTagTitle);
  return mediaTagWrapper;
};
