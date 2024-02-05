import nonograms from "./nonograms.js";
console.log("Дорогой, проверяющий. Заранее прошу прощения за возможные неудобства. Если у вас будет возможность проверить мою работу в среду или четверг, я буду очень благодарна. У меня очень много недочетов и я бы хотела попробовать исправить их. Спасибо за понимание.")
// отрисовка

export function createElem(HTMLtag, classNames, par, text, idName) {
  const newElement = document.createElement(HTMLtag);
  newElement.className = classNames;
  if (text) {
    newElement.textContent = text;
  }
  if (par) {
    par.append(newElement);
  }
  if (idName) {
    newElement.id = idName;
  }
  return newElement;
}


const mainContainer = createElem("main", "main__container");
const themeChangerDiv = createElem("div", "theme__container", mainContainer);
const headerDiv = createElem("div", "header_div", mainContainer);
export const title = createElem("h1", "game__title", headerDiv, "Nonograms");
export const gameSection = createElem("section", "game__section", mainContainer);
export const dayNigthIcon = createElem("img", "theme__icon", themeChangerDiv);
dayNigthIcon.src = "./assets/daynight.png";


export let modal = createElem("div", "modal__window", mainContainer);
let levelContainer = createElem("div", "level__container", modal);
export let levelBtnsContainer = createElem("div", "level__btns", levelContainer);

const playBtnContainer = createElem("div", "modal-btn__container", modal);
export const playBtn = createElem("button", "play__btn", playBtnContainer, "Play");

export const randomBtn = createElem("button", "random__btn", playBtnContainer, "Random Game")

let titleNonContainer = createElem("div", "name__container", levelContainer);
export let nonogramsList = createElem("ul", "nonograms__list", titleNonContainer);
export const levelIcon = createElem("img", "level__icon", themeChangerDiv);
levelIcon.src = "./assets/level.png";

const btnContainer = createElem("div", "game__btns", mainContainer);
export const resetBtn = createElem("button", "btn__reset", btnContainer);
resetBtn.textContent = "Reset";

export let timer = createElem("span", "timer", gameSection);
timer.textContent = "00 : 00";

document.body.append(mainContainer);


//functions
