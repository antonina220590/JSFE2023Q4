import nonograms from "./nonograms.js";
import { createElem, gameSection, title, resetBtn, timer, solutionBtn } from "./index.js";
import { active, playRandom, defaultNono } from "./modal.js";

let horizontalClues = [];
let verticalClues = [];
export let winMessage = createElem("span", "message", gameSection);

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

export function stopTimer() {
  timerOn = false;
  clearInterval(timerSet);
}

export function resetTimer() {
  seconds = 0;
  minutes = 0;
  hours = 0;
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

//reset

function resetGame() {
  document.querySelectorAll(".field__cell").forEach((cell) => {
    cell.classList.remove("field__cell_dark");
    cell.classList.remove("field__cell_cross");
  });
  let field = document.querySelector(".field__center");
  field.classList.remove("field__center_disabled");
  winMessage.classList.remove("message_active");
}

resetBtn.addEventListener("click", resetGame);

export function findHorizontalClues(matrix) {
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

export function findVerticalClues(matrix) {
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

export function createGameTable(size, arr) {
  verticalClues = [];
  horizontalClues = [];
  let gameField = createElem("div", "field__wrapper_common", gameSection);
  const fieldWrapper = createElem("div", "field__wrapper", gameField);
  const horizontalKeys = createElem("div", "horizontal-keys", fieldWrapper);
  const verticalKeys = createElem("div", "vertical-keys", gameField);
  const field = createElem("div", "field__center", fieldWrapper);
  let span = null;
  let keys = null;

  let topKeys = null;
  let leftKeys = null;
  for (let i = 0; i < size; i++) {
    const activeField = createElem("div", "field__horizontal", field);
    topKeys = createElem("div", "key-top", horizontalKeys);
    leftKeys = createElem("div", "key-left", verticalKeys);
    activeField.innerHTML = "";

    for (let j = 0; j < size; j++) {
      const fieldCells = createElem("div", "field__cell", activeField);
      fieldCells.id = j;
    }
  }
  let horizontalKeyCells = document.querySelectorAll(".key-top");
  let verticalKeyCells = document.querySelectorAll(".key-left");

  horizontalKeyCells.innerHTML = "";
  verticalKeyCells.innerHTML = "";

  for (let k = 0; k < horizontalKeyCells.length; k++) {
    findVerticalClues(arr);
    for (let l = 0; l < verticalClues.length; l++) {
      keys = verticalClues[k];
    }
    keys.forEach((key) => {
      span = createElem("span", "vertical-key", horizontalKeyCells[k]);
      span.textContent = "";
      span.textContent = key;
    });
  }
  for (let k = 0; k < verticalKeyCells.length; k++) {
    findHorizontalClues(arr);
    for (let l = 0; l < horizontalClues.length; l++) {
      keys = horizontalClues[k];
    }
    keys.forEach((key) => {
      span = createElem("span", "horizontal-key", verticalKeyCells[k]);
      span.textContent = "";
      span.textContent = key;
    });
  }
  handleClickCross();
  handleClickDark();
}

createGameTable(nonograms[active].size, nonograms[active].input);
console.log(nonograms[active].input)

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

// отмечаем крестики

function handleClickCross() {
  const centerField = document.querySelector(".field__center");
  centerField.addEventListener("contextmenu", (e) => {
    initiateTimer();
    e.preventDefault();
    let clickedCell = e.target;
    if (e.target.classList.contains("field__cell")) {
      clickedCell.classList.remove("field__cell_dark");
      let nonogramsSize = nonograms[active].size;
      if (nonogramsSize === 5) {
        console.log(nonogramsSize)
      clickedCell.classList.toggle("field__cell_cross");
      }
      if (nonogramsSize === 10){
        clickedCell.classList.toggle("field__cell_cross_medium");
      }
      if (nonogramsSize === 15){
        clickedCell.classList.toggle("field__cell_cross_big");
      }

    }
    checkWin();
  });
}

//проверка на выигрыш

export function checkWin() {
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

  let nonogramsMatrix = nonograms[active].input;
  let nonogramsSize = nonograms[active].size;
  let flattedMatrix = nonogramsMatrix.flat(nonogramsSize);
  let string1 = flattedMatrix.toString();
  let string2 = playerArray.toString();

  if (string1 === string2) {
    winMessage.classList.add("message_active");
    winMessage.textContent = `Great! You have solved the nonogram in ${timer.textContent} seconds!`;
    stopTimer();
    let field = document.querySelector(".field__center");
    field.classList.add("field__center_disabled");
  }
}

//показать решение

function getSolution() {
  let cells = document.querySelectorAll(".field__cell");
  stopTimer();
  let defaultNonoMatrix;
  for (let i = 0; i < nonograms.length; i++) {
    if (nonograms[i].name === defaultNono) {
      defaultNonoMatrix = nonograms[i].input.flat();
    }
  }

  for (let i = 0; i < defaultNonoMatrix.length; i++) {
    let cell = cells[i];
    cell.classList.remove("field__cell_dark");
    cell.classList.remove("field__cell_cross");
    if (defaultNonoMatrix[i] === 1) {
      cell.classList.toggle("field__cell_dark");
    }
  }
}

solutionBtn.addEventListener("click", getSolution)