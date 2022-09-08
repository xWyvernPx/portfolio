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

  app?.appendChild(modalWrapper);
};

export const ModalActive = (components: Node) => {
  const modal = document.querySelector(".modal-wrapper");
  modal?.classList.add("active");
  modal?.appendChild(components);
};

const closeModalHanlder = () => {
  const modal = document.querySelector(".modal-wrapper");
  modal?.classList.remove("active");
};
