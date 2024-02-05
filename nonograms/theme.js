
import { dayNigthIcon } from "./index.js"
import { title } from "./index.js"

function changeTheme() {
  document.body.classList.toggle("body_dark-theme");
  title.classList.toggle("game__title_dark-theme");
}

dayNigthIcon.addEventListener("click", changeTheme);