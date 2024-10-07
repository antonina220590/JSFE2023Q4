import { dayNigthIcon, title, timer, resetBtn, themeChangerDiv, modal } from "./index.js";

function changeTheme() {
  let verticallKeys = document.querySelector(".vertical-keys");
  let horizontalKeys = document.querySelector(".horizontal-keys");
  let field = document.querySelector(".field__center");

  document.body.classList.toggle("body_dark-theme");
  title.classList.toggle("game__title_dark-theme");
  timer.classList.toggle("timer_dark-theme");
  verticallKeys.classList.toggle("vertical-keys_dark-theme");
  horizontalKeys.classList.toggle("horizontal-keys_dark-theme");
  field.classList.toggle("field__center_dark-theme");
  document.querySelectorAll(".key-left").forEach((key) => {
    key.classList.toggle("key-left_dark-theme");
  });
  document.querySelectorAll(".key-top").forEach((key) => {
    key.classList.toggle("key-top_dark-theme");
  });
  document.querySelectorAll(".field__cell").forEach((cell) => {
    cell.classList.toggle("field__cell_dark-theme");
  });
  document.querySelectorAll(".field__horizontal").forEach((field) => {
    field.classList.toggle("field__horizontal_dark-theme");
  });
  resetBtn.classList.toggle("btn__reset_dark-theme");
  themeChangerDiv.classList.toggle("theme__container_dark-theme");
  modal.classList.toggle("modal__window_dark-theme");
}

dayNigthIcon.addEventListener("click", changeTheme);
