import nonograms from "./nonograms.js";

// отрисовка

function createElem(HTMLtag, classNames) {
  const newElement = document.createElement(HTMLtag);
  newElement.className = classNames;
  return newElement;
}

const mainContainer = createElem("main", "main__container");
const gameSection = createElem("section", "game__section");
const commonFieldWrapper = createElem("div", "field__wrapper_common");
const fieldWrapper = createElem("div", "field__wrapper");
const horizontalKeys = createElem("div", "horizontal-keys");
const verticallKeys = createElem("div", "vertical-keys");
const field = createElem("div", "field__center");
const btnContainer = createElem("div", "game__btns");
const resetBtn = createElem("button", "btn__reset", btnContainer);
resetBtn.textContent = "Reset";

btnContainer.append(resetBtn);

//модальное окно
const modal = createElem("div", "modal__window");
let levelContainer = createElem("div", "level__container");
let levelBtnsContainer = createElem("div", "level__btns");
let titleNonContainer = createElem("div", "name__container");
let nonogramsList = createElem("ul", "nonograms__list");
titleNonContainer.append(nonogramsList);
levelContainer.append(levelBtnsContainer, titleNonContainer);
modal.append(levelContainer);

//доп информация
const headerDiv = createElem("div", "header_div");
const title = createElem("h1", "game__title");
title.textContent = "Nonograms";

const themeChangerDiv = createElem("div", "theme__container");
const dayNigthIcon = createElem("img", "theme__icon");
dayNigthIcon.src = "./assets/daynight.png";
const levelIcon = createElem("img", "level__icon");
levelIcon.src = "./assets/level.png";

themeChangerDiv.append(dayNigthIcon, levelIcon);

const timer = createElem("span", "timer");
timer.textContent = "00 : 00";

const winMessage = createElem("span", "message");
headerDiv.append(title);
fieldWrapper.append(horizontalKeys, field);
commonFieldWrapper.append(fieldWrapper, verticallKeys);
gameSection.append(winMessage, timer, commonFieldWrapper);
mainContainer.append(
  modal,
  themeChangerDiv,
  headerDiv,
  gameSection,
  btnContainer
);
document.body.append(mainContainer);

//информация о дефолтной нонограме

let nonogramsInfo = nonograms[0];
let nonogramsSize = nonogramsInfo.size;
let nonogramsMatrix = nonogramsInfo.input;


function createField (size) {
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

function findHorizontalClues(matrix) {
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
}

// ищем ключи по горизонтали

let verticalClues = [];

function findVerticalClues(matrix) {
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
}

//Отрисовка ключей по горизонтали

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
      span.innerHTML = '';
      span.textContent = key;
      horizontalKeyCells[i].append(span);
    });
  }
}

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
      span.innerHTML = '';
      span.textContent = key;
      verticalKeyCells[i].append(span);
    });
  }

}

findHorizontalClues(nonogramsMatrix);
findVerticalClues(nonogramsMatrix);
renderVerticalKeys(verticalKeyCells, horizontalClues);
renderHorizontalKeys(horizontalKeyCells, verticalClues);

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
  let flattedMatrix = nonogramsMatrix.flat(nonogramsSize);
  let string1 = flattedMatrix.toString();
  let string2 = playerArray.toString();

  if (string1 === string2) {
    winMessage.classList.add("message_active");
    winMessage.textContent = `Great! You have solved the nonogram in ${timer.textContent} seconds!`;
    stopTimer();
    field.classList.add("field__center_disabled");
  }
}

//Таймер
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerSet;
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
  if (!timerOn === true) {
    timerOn = true;
    timerSet = setInterval(() => {
      updateTimer(startTimer);
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerSet);
}

function resetTimer() {
  if (seconds !== 0) {
    seconds = 0;
  }
  if (minutes !== 0) {
    minutes = 0;
  }
  timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  stopTimer();
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
  resetBtn.classList.toggle("btn__reset_dark-theme");
  themeChangerDiv.classList.toggle("theme__container_dark-theme");
}

dayNigthIcon.addEventListener("click", changeTheme);

//Сброс игры

function resetGame() {
  document.querySelectorAll(".field__cell").forEach((cell) => {
    cell.classList.remove("field__cell_dark");
    cell.classList.remove("field__cell_cross");
  });
  field.classList.remove("field__center_disabled");
  winMessage.classList.remove("message_active");
  //resetTimer();
}

resetBtn.addEventListener("click", resetGame);

// Выбор уровня

function openModal() {
  document.body.classList.toggle("body__lock");
  let modal = document.querySelector(".modal__window");
  modal.classList.toggle("modal__window_active");
}

levelIcon.addEventListener("click", openModal);

//отрисовка модального окна

//const smallArr = nonograms.filter((item) => item.size === 5);

let btnArr = [];
function addLevelBtn() {
  for (let i = 0; i < 1; i++) {
    let levelBtns = createElem("button", "level__btn");
    levelBtnsContainer.append(levelBtns);
    btnArr.push(levelBtns);
  }
  for (let i = 0; i < btnArr.length; i++) {
    btnArr[0].textContent = "5 x 5";
    btnArr[0].classList.add("easy__level");
    btnArr[0].classList.add("level__btn_active");
    // btnArr[1].textContent = "10 x 10";
    // btnArr[1].classList.add("medium__level");
    // btnArr[2].textContent = "15 x 15";
    // btnArr[2].classList.add("hard__level");
  }
  return btnArr;
}
addLevelBtn();

function handleClickLevelBtn() {
  for (let i = 0; i < btnArr.length; i++) {
    btnArr[1].addEventListener("click", () => {
      displayListOfTitles();
      btnArr[1].classList.add("level__btn_active");
      btnArr[0].classList.remove("level__btn_active");
      btnArr[2].classList.remove("level__btn_active");
    });
    btnArr[0].addEventListener("click", () => {
      displayListOfTitles();
      btnArr[0].classList.add("level__btn_active");
      btnArr[1].classList.remove("level__btn_active");
      btnArr[2].classList.remove("level__btn_active");
    });
    btnArr[2].addEventListener("click", () => {
      displayListOfTitles();
      btnArr[2].classList.add("level__btn_active");
      btnArr[0].classList.remove("level__btn_active");
      btnArr[1].classList.remove("level__btn_active");
    });
  }
}
//handleClickLevelBtn();

let nonogramsNameList;
console.log(nonogramsNameList)
function createList() {
  nonogramsNameList = createElem("li", "nonograms__name");
  nonogramsList.append(nonogramsNameList);
}

function displayListOfTitles() {
  let easyLevelBtn = document.querySelector(".easy__level");
  //let mediumLevelBtn = document.querySelector(".medium__level");
  // let hardLevelBtn = document.querySelector(".hard__level");
  const smallArr = nonograms.filter((item) => item.size === 5);
  //  const mediumArr = nonograms.filter((item) => item.size === 10);
  //  const bigArr = nonograms.filter((item) => item.size === 15);
  let arr = [];
  if (easyLevelBtn.classList.contains("level__btn_active")) {
    nonogramsList.innerHTML = "";
    smallArr.forEach((item) => {
      createList();
      nonogramsNameList.textContent = item.name.toUpperCase();
      arr.push(item)
    });
    console.log(arr)
  }

  // if (mediumLevelBtn.classList.contains("level__btn_active")) {
  //   nonogramsList.innerHTML = "";
  //   mediumArr.forEach((item) => {
  //     createList();
  //     nonogramsNameList.textContent = item.name.toUpperCase();
  //   });
  // }
  // if (hardLevelBtn.classList.contains("level__btn_active")) {
  //   nonogramsList.innerHTML = "";
  //   bigArr.forEach((item) => {
  //     createList();

  //     nonogramsNameList.textContent = item.name.toUpperCase();
  //   });
  //}
  return nonogramsNameList;
}
displayListOfTitles();


let topKeys = document.querySelectorAll(".horizontal-key");
console.log(topKeys);

let currentNonogramsMatrix;
let currentNonogramsSize;

function renderTable() {
  nonogramsList.addEventListener("click", (e) => {
    let clickedName = e.target;
    for (let i = 0; i < nonograms.length; i++) {
      if (nonograms[i].name === clickedName.innerHTML) {
        //commonFieldWrapper.innerHTML = "";
        currentNonogramsMatrix = nonograms[i].input;
        currentNonogramsSize = nonograms[i].size
        console.log(currentNonogramsMatrix)
      }
    }
    //findHorizontalClues(currentNonogramsMatrix);
   // findVerticalClues(currentNonogramsMatrix);
    renderVerticalKeys(verticalKeyCells, horizontalClues);
    renderHorizontalKeys(horizontalKeyCells, verticalClues);
  });
}

let button = document.querySelector(".easy__level");
// console.log(button)
// button.addEventListener("click", () => {
  renderTable();
//   console.log('!')
// })
