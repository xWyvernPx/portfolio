import { _create } from "../../../utils/DOM";
import staticContent from "../../../assets/common.json";

export const Hero = ({showAboutMe = true}: {
    showAboutMe?:boolean
}) :HTMLElement => {
    const LandingPageWrapper = _create("div");
    // const path = window.location.pathname;
  
    const threedart = _create("canvas", { id: "canvas", class: "canvas" });
    LandingPageWrapper.appendChild(threedart);
  
    const littleTitle = _create(
      "span",
      { class: "hello_label" },
      { textContent: staticContent.hero.hero_welcome }
    );
  
    LandingPageWrapper.appendChild(littleTitle);
    /** Big title **/
    const bigTitleWrapper = _create("div", { class: "block_wrapper" });
    const contentWrapper = _create("div", { class: "intro_content" });
    const nameTitle = _create(
      "span",
      {},
      {
        textContent: staticContent.common.name,
      }
    );
    contentWrapper.appendChild(nameTitle);
  
    const jobTitle = _create(
      "span",
      {},
      { textContent: staticContent.common.title }
    );
    contentWrapper.appendChild(jobTitle);
  
    //avatar
    const avatarWrapper = _create("div");
    avatarWrapper.classList.add("avatar_wrapper");
    const avatarImg = _create("img", {
      src: staticContent.common.avatar,
    }) as HTMLImageElement;
  
    avatarWrapper.appendChild(avatarImg);
    bigTitleWrapper.appendChild(contentWrapper);
    bigTitleWrapper.appendChild(avatarWrapper);
    LandingPageWrapper.appendChild(bigTitleWrapper);
  
    //about section
    const aboutSection = _create("section");
  
    const sectionTitle = _create(
      "span",
      { class: "section_title" },
      { textContent: "About me" }
    );
  
    sectionTitle.textContent = "About me";
    const aboutParagraph = _create(
      "p",
      { class: "about_paragraph" },
      { textContent: staticContent.common.description }
    );
    if(showAboutMe){
        aboutSection.appendChild(sectionTitle);
        aboutSection.appendChild(aboutParagraph);
        LandingPageWrapper.appendChild(aboutSection);
    }
    window.$emit("load_model");

    return LandingPageWrapper
}