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
const secretLine = createElem("div", "guessed__word");
const questionText = createElem("h4", "question__text");
const incorrectAttemptsTitle = createElem("h4", "guesses__attempts");
incorrectAttemptsTitle.innerText = "Incorrect guesses: ";
const incorrectAttemptsNum = createElem("b", "incorrect");
incorrectAttemptsTitle.append(incorrectAttemptsNum);
incorrectAttemptsNum.innerText = "0 / 6";
const keypad = createElem("div", "keypad");

rightSide.append(secretLine, questionText, incorrectAttemptsTitle, keypad);
mainContainer.append(leftSide, rightSide);
document.body.append(mainContainer);

//modal window

const modalWindow = createElem("div", "modal-window");
const modalContent = createElem("div", "modal-window__content");
const modalStatement = createElem("h4", "modal__statement");

const modalWord = createElem("p", "modal__word");

const modalBtn = createElem("button", "modal-window__btn");
modalBtn.innerText = "Play Again";

modalContent.append(modalStatement, modalWord, modalBtn);
modalWindow.append(modalContent);
document.body.append(mainContainer, modalWindow);

let generatedWord;
let numberOfAttempts = 0;
let correct = [];
let maxNumberOfAttemts = 6;

function checkAnswer(btn, guessedLetter) {
  if (generatedWord.includes(guessedLetter)) {
    [...generatedWord].forEach((element, i) => {
      if (element === guessedLetter) {
        correct.push(element);
        secretLine.querySelectorAll("span")[i].innerText = element;
        secretLine.querySelectorAll("span")[i].classList.add("correct__guesse");
      }
    });
  } else {
    numberOfAttempts++;
  }
  btn.classList.add("btn_inactive");
  incorrectAttemptsNum.innerText = `${numberOfAttempts} / ${maxNumberOfAttemts}`;
}

//keybord
for (let i = 97; i <= 122; i += 1) {
  const btn = createElem("button", "btn");
  btn.innerText = String.fromCharCode(i);
  keypad.append(btn);
  btn.addEventListener("click", (event) =>
    checkAnswer(event.target, String.fromCharCode(i))
  );
}


//random questions and line

function generateRandomQuestion() {
  const { word, question } =
    questions[Math.floor(Math.random() * questions.length)];
  generatedWord = word;
  console.log(generatedWord);
  questionText.innerText = question;
}

generateRandomQuestion();

for (let i = 0; i < generatedWord.length; i++) {
  const secretLetter = createElem("span", "guessed__letter");
  secretLine.append(secretLetter);
}
