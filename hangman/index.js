import questions from "./questions.js";

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

//right side

const rightSide = createElem("div", "right-side__container");
const secretLine = createElem("ul", "guessed__word");
const questionText = createElem("h4", "question__text");
const incorrectAttemptsTitle = createElem("h4", "guesses__attempts");
incorrectAttemptsTitle.innerText = "Incorrect guesses: ";
const incorrectAttemptsNum = createElem("b", "incorrect");
incorrectAttemptsTitle.append(incorrectAttemptsNum);
incorrectAttemptsNum.innerText = "0 / 6";
const keypad = createElem("div", "keypad");
rightSide.append(secretLine, questionText, incorrectAttemptsTitle, keypad);

mainContainer.append(leftSide, rightSide)
document.body.append(mainContainer)

for (let i = 97; i <= 122; i += 1) {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = String.fromCharCode(i);
  keypad.append(btn);
}