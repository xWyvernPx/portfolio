export interface Project {
  name: string;
  source: string;
  demo: string;
  desc: string;
  thumbnail: string;
}
export const ProjectCard = ({
  demo,
  desc,
  thumbnail,
  name,
  source,
}: Project) => {
  const projectCardWrapper = document.createElement("div");
  projectCardWrapper.classList.add("project_card_wrapper");

  const projectThumbnailWrapper = document.createElement("div");
  projectThumbnailWrapper.classList.add("project_thumbnail-wrapper");
  const projectThumbnail = document.createElement("img");
  projectThumbnail.src = thumbnail;
  projectThumbnailWrapper.appendChild(projectThumbnail);
  projectCardWrapper.appendChild(projectThumbnailWrapper);

  const projectName = document.createElement("h3");
  projectName.classList.add("project_name");
  projectName.textContent = name;
  const projectDescription = document.createElement("p");
  projectDescription.textContent = desc;
  projectCardWrapper.appendChild(projectName);
  projectCardWrapper.appendChild(projectDescription);

  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("project_button_wrapper");

  const demoButton = document.createElement("a");
  demoButton.textContent = "Demo";
  demoButton.href = demo;
  demoButton.target = "_blank";
  const sourceButton = document.createElement("a");
  const gitIcon = document.createElement("i");
  gitIcon.classList.add("fa-brands", "fa-github");

  sourceButton.innerHTML = "Source";
  sourceButton.appendChild(gitIcon);

  sourceButton.href = source;
  sourceButton.target = "_blank";
  buttonWrapper.appendChild(demoButton);
  buttonWrapper.appendChild(sourceButton);
  projectCardWrapper.appendChild(buttonWrapper);
  return projectCardWrapper;
};
