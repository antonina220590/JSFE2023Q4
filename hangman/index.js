import questions from "./questions.js";

function createElem(HTMLtag, classNames) {
  const newElement = document.createElement(HTMLtag);
  newElement.classList.add(classNames);
  return newElement;
}

const mainContainer = createElem("div", "main__container");

//left side

const leftSide = createElem("div", "left-side__container");

//gallow box
const gallowBox = createElem("div", "gallow__box");
let gallowImg = `url(${`./assets/0.svg`})`;
gallowBox.style.backgroundImage = gallowImg;

const gallowBox1 = createElem("div", "gallow__box1");
let gallowImg1 = `url(${`./assets/0.svg`})`;
gallowBox1.style.backgroundImage = gallowImg1;

const title = createElem("h1", "game__title");
title.innerText = "HANGMAN GAME";

leftSide.append(gallowBox, gallowBox1, title);

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
let correct;
let numberOfAttempts;
let maxNumberOfAttemts = 6;

function checkAnswer(btn, guessedLetter) {
  if (generatedWord.includes(guessedLetter)) {
    [...generatedWord].forEach((letter, i) => {
      if (letter === guessedLetter) {
        correct.push(letter);
        secretLine.querySelectorAll("span")[i].innerText = letter;
        secretLine.querySelectorAll("span")[i].classList.add("correct__guesse");
      }
    });
  } else {
    numberOfAttempts++;
    let newGallowImg = `url(${`./assets/${numberOfAttempts}.svg`})`;
    gallowBox1.style.backgroundImage = newGallowImg;
  }
  btn.classList.add("btn_inactive");
  incorrectAttemptsNum.innerText = `${numberOfAttempts} / ${maxNumberOfAttemts}`;

  if (numberOfAttempts === maxNumberOfAttemts) {
    gameOverLoose();
  }
  if (correct.length === generatedWord.length) {
    gameOverWin();
  }
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

//physical keyboard

document.body.addEventListener("keydown", function (event) {
  try {
  let pushedLetter;
  if (event.key === "Enter") {
    playAgain();
  }
  for (let i = 97; i <= 122; i += 1) {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      if (event.key === button.textContent) {
        pushedLetter = button;
        button.classList.add("btn_inactive");
      }
    });
  }
  if (pushedLetter.className !== "btn_inactive" && pushedLetter !== 'Enter') {
    checkAnswer(pushedLetter, event.key);
  }
} catch (event) {
  throw Error ('key is invalid')
}
});

//random questions and line

function generateRandomQuestion() {
  const { word, question } =
    questions[Math.floor(Math.random() * questions.length)];
  generatedWord = word;
  console.log(generatedWord);
  questionText.innerText = question;
  resetAll();
}

generateRandomQuestion();

function gameOverWin() {
  setTimeout(() => {
    modalWindow.classList.add("modal-window_active");
    modalStatement.innerText = "You win!";
    modalWord.innerText = `${"You guessed the word:"} ${generatedWord}!`;
  }, 400);
}

function gameOverLoose() {
  setTimeout(() => {
    modalWindow.classList.add("modal-window_active");
    modalStatement.innerText = "You loose!";
    modalWord.innerText = `${"The word was:"} ${generatedWord}!`;
  }, 400);
}

function resetAll() {
  correct = [];
  numberOfAttempts = 0;
  incorrectAttemptsNum.innerText = `${numberOfAttempts} / ${maxNumberOfAttemts}`;
  gallowBox1.style.backgroundImage = `url(${`./assets/${numberOfAttempts}.svg`})`;
  secretLine.innerHTML = "";
  for (let i = 0; i < generatedWord.length; i++) {
    const secretLetter = createElem("span", "guessed__letter");
    secretLine.append(secretLetter);
  }
  keypad
    .querySelectorAll(".btn")
    .forEach((button) => button.classList.remove("btn_inactive"));
  modalWindow.classList.remove("modal-window_active");
  incorrectAttemptsNum.innerText = `${0} / ${maxNumberOfAttemts}`;
}

function playAgain() {
  resetAll();
  generateRandomQuestion();
}

modalBtn.addEventListener("click", playAgain);

const updateBtn = document.querySelector(".game__title");

updateBtn.addEventListener("click", generateRandomQuestion);
