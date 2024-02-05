import nonograms from "./nonograms.js";

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
let titleNonContainer = createElem("div", "name__container", levelContainer);
export let nonogramsList = createElem("ul", "nonograms__list", titleNonContainer);
export const levelIcon = createElem("img", "level__icon", themeChangerDiv);
levelIcon.src = "./assets/level.png";


document.body.append(mainContainer);


//functions
