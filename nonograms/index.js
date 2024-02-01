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

fieldWrapper.append(horizontalKeys, field);
commonFieldWrapper.append(fieldWrapper, verticallKeys);
gameSection.append(commonFieldWrapper);
mainContainer.append(gameSection);
document.body.append(mainContainer);

// информация о нонограмме
let nonogramsInfo = nonograms[0];
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
console.log(verticalClues);

//Отрисовка ключей по горизонтали
console.log(horizontalClues);

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
  let fieldCells = document.querySelectorAll(".field__cell");
  centerField.addEventListener("click", (e) => {
    let clickedCell = e.target;
    if (e.target.classList.contains("field__cell")) {
      clickedCell.classList.add("field__cell_dark");
    }
    checkWin();
  });
}

handleClickDark();

//проверка на выигрыш

function checkWin() {
  let playerArray = [];
  let fieldCells = document.querySelectorAll(".field__cell");
  let array = Array.from(fieldCells);
  array.map((cell) => {
    if (cell.classList.contains("field__cell_dark")) {
      playerArray.push(1);
    }else{
      playerArray.push(0)
    }
  })

  let flattedMatrix = nonogramsMatrix.flat(nonogramsSize);
  let string1 = flattedMatrix.toString();
  let string2 = playerArray.toString();

  if(string1 === string2) {
    console.log("You win!")
  }
}





