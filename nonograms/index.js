import nonograms from "./nonograms.js";

// отрисовка

function createElem(HTMLtag, classNames) {
  const newElement = document.createElement(HTMLtag);
  newElement.classList.add(classNames);
  return newElement;
}

const mainContainer = createElem("main", "main__container");
const gameSection = createElem("section", "game__section");
const commonFieldWrapper = createElem("div", "field__wrapper_common");
const fieldWrapper = createElem("div", "field__wrapper");
const horizontalKeys = createElem("div", "horizontal-keys");
const verticallKeys = createElem("div", "vertical-keys");
const field = createElem("div", "field__center");

//доп информация
const headerDiv = createElem("div", "header_div");
const title = createElem("h1", "game__title");
title.textContent = "Nonograms";

const themeChangerDiv = createElem("div", "theme__container");
const dayNigthIcon = createElem("img", "theme__icon");
dayNigthIcon.src = "./assets/day_icon.png";

themeChangerDiv.append(dayNigthIcon);

const timer = createElem("span", "timer");
timer.textContent = "00 : 00";

headerDiv.append(title);
fieldWrapper.append(horizontalKeys, field);
commonFieldWrapper.append(fieldWrapper, verticallKeys);
gameSection.append(timer, commonFieldWrapper);
mainContainer.append(themeChangerDiv, headerDiv, gameSection);
document.body.append(mainContainer);

// информация о нонограмме
let nonogramsInfo = nonograms[2];
let nonogramsSize = nonogramsInfo.size;
let nonogramsMatrix = nonogramsInfo.input;
let map = nonogramsInfo.input;
console.log(nonogramsMatrix);

function createField(size) {
  for (let i = 0; i < size; i++) {
    const horizontalField = createElem("div", "field__horizontal");
    const topKeys = createElem("div", "key-top");
    const leftKeys = createElem("div", "key-left");
    horizontalKeys.append(topKeys);
    verticallKeys.append(leftKeys);
    for (let j = 0; j < size; j++) {
      const fieldCells = createElem("div", "field__cell");
      fieldCells.setAttribute("data-attr", j);
      horizontalField.append(fieldCells);
    }
    field.append(horizontalField);
  }
}
createField(nonogramsSize);

// ищем ключи по горизонтали
let horizontalClues = [];

let findHorizontalClues = function (matrix) {
  let rowsLength = matrix.length;
  let colsLength = matrix[0].length;
  for (let i = 0; i < rowsLength; i++) {
    let sum = 0;
    let newArr = [];
    for (let j = 0; j < colsLength; j++) {
      if (matrix[i][j] === 1) {
        sum += 1;
      } else if (sum > 0) {
        newArr.push(sum);
        sum = 0;
      }
    }
    if (sum > 0) {
      newArr.push(sum);
    }
    horizontalClues.push(newArr);
  }
  return horizontalClues;
};

findHorizontalClues(nonogramsMatrix);

// ищем ключи по горизонтали

let verticalClues = [];

let findVerticalClues = function (matrix) {
  let rowsLength = matrix.length;
  let colsLength = matrix[0].length;

  for (let i = 0; i < rowsLength; i++) {
    let sum = 0;
    let newArr = [];
    for (let j = 0; j < colsLength; j++) {
      if (matrix[j][i] === 1) {
        sum += 1;
      } else if (sum > 0) {
        newArr.push(sum);
        sum = 0;
      }
    }
    if (sum > 0) {
      newArr.push(sum);
    }
    verticalClues.push(newArr);
  }

  return verticalClues;
};

findVerticalClues(nonogramsMatrix);
//console.log(verticalClues);

//Отрисовка ключей по горизонтали
//console.log(horizontalClues);

let horizontalKeyCells = document.querySelectorAll(".key-top");
let verticalKeyCells = document.querySelectorAll(".key-left");

function renderHorizontalKeys(horizontalKeyCells, arr) {
  let span = null;
  let keys = null;

  for (let i = 0; i < horizontalKeyCells.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      keys = arr[i];
    }
    keys.forEach((key) => {
      span = document.createElement("span");
      span.classList.add("horizontal-key");
      span.textContent = key;
      horizontalKeyCells[i].append(span);
    });
  }
}
renderHorizontalKeys(horizontalKeyCells, verticalClues);

function renderVerticalKeys(verticalKeyCells, arr) {
  let span = null;
  let keys = null;

  for (let i = 0; i < verticalKeyCells.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      keys = arr[i];
    }
    keys.forEach((key) => {
      span = document.createElement("span");
      span.classList.add("vertical-key");
      span.textContent = key;
      verticalKeyCells[i].append(span);
    });
  }
}

renderVerticalKeys(verticalKeyCells, horizontalClues);

//отмечаем темные квадраты

function handleClickDark() {
  const centerField = document.querySelector(".field__center");
  centerField.addEventListener("click", (e) => {
    initiateTimer();
    let clickedCell = e.target;
    if (e.target.classList.contains("field__cell")) {
      clickedCell.classList.remove("field__cell_cross");
      clickedCell.classList.toggle("field__cell_dark");
    }
    checkWin();
  });
}

handleClickDark();

// отмечаем крестики

function handleClickCross() {
  const centerField = document.querySelector(".field__center");
  centerField.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    initiateTimer();
    let clickedCell = e.target;
    if (e.target.classList.contains("field__cell")) {
      clickedCell.classList.remove("field__cell_dark");
      clickedCell.classList.toggle("field__cell_cross");
    }
    checkWin();
  });
}

handleClickCross();

//проверка на выигрыш

function checkWin() {
  let playerArray = [];
  let fieldCells = document.querySelectorAll(".field__cell");
  let array = Array.from(fieldCells);
  array.map((cell) => {
    if (cell.classList.contains("field__cell_dark")) {
      playerArray.push(1);
    } else {
      playerArray.push(0);
    }
  });
  //console.log(playerArray);
  let flattedMatrix = nonogramsMatrix.flat(nonogramsSize);
  let string1 = flattedMatrix.toString();
  let string2 = playerArray.toString();

  if (string1 === string2) {
    console.log("You win!");
  }
}

//Таймер
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerOn = false;
const startTimer = Date.now();

function updateTimer() {
  timerOn = true;
  seconds++;
  if (minutes < 60) {
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
  if (hours > 0) {
    timer.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
}

function initiateTimer() {
  if (timerOn === false) {
    timerOn = false;
    clearInterval(timer);
  }
  if (!timerOn === true) {
    timerOn = true;
    setInterval(() => {
      updateTimer(startTimer);
    }, 1000);
  }
}

// смена цветовой схемы

function changeTheme() {
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
}

dayNigthIcon.addEventListener("click", changeTheme);
