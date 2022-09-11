export const modalInit = () => {
  const app = document.getElementById("app");

  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal-wrapper");
  const closeButton = document.createElement("button");
  closeButton.className = "modal-close-button";
  const closeIcon = document.createElement("i");
  closeIcon.className = "fa-solid fa-xmark";
  closeButton.appendChild(closeIcon);
  closeButton.addEventListener("click", () => closeModalHanlder());

  modalWrapper.appendChild(closeButton);
  const modalContentWrapper = document.createElement("div");
  modalContentWrapper.classList.add("modal-content-wrapper");

  modalWrapper?.appendChild(modalContentWrapper);

  app?.appendChild(modalWrapper);
};

export const ModalActive = (components: Node) => {
  const modal = document.querySelector(".modal-wrapper") as any;
  const body = document.querySelector("body");
  body?.style.setProperty("overflow-y", "hidden");

  const modalContentWrapper = document.querySelector(
    ".modal-content-wrapper"
  ) as any;
  modalContentWrapper.innerHTML = "";
  modalContentWrapper.appendChild(components);

  modal?.classList.add("active");
};

export const closeModalHanlder = () => {
  const modal = document.querySelector(".modal-wrapper") as any;
  const body = document.querySelector("body");
  body?.style.setProperty("overflow-y", "auto");
  const modalContentWrapper = document.querySelector(
    ".modal-content-wrapper"
  ) as any;

  modalContentWrapper.innerHTML = "";
  modal?.classList.remove("active");
};
