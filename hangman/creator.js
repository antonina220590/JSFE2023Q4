
function createElem(HTMLtag, classNames) {
  const newElement = document.createElement(HTMLtag);
  newElement.classList.add(classNames);

  return newElement;
}

const mainContainer = createElem("div", "main__container");

//left side

const leftSide = createElem("div", "left-side__container");
const gallowBox = createElem("div", "gallow__box");
let gallowImg = `url(${`./assets/0.svg`})`;
gallowBox.style.backgroundImage = gallowImg;
const title = createElem("h1", "game__title");
title.innerText = "HANGMAN GAME";

leftSide.append(gallowBox, title);


mainContainer.append(leftSide)
document.body.append(mainContainer)
