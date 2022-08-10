let popupLink = document.querySelector(".navigation__link");
let popup = document.querySelector(".popup__container");
let popupCloseButton = document.querySelector(".popup__close-icon");
let popupWholePage = document.querySelector(".popup");

function openPopup() {
  popupWholePage.classList.add("popup_opened");
}

popupLink.addEventListener("click", openPopup);

function closePopup() {
  popupWholePage.classList.remove("popup_opened");
}

popupCloseButton.addEventListener("click", closePopup);