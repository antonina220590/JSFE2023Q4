import {
  modal,
  levelIcon,
  levelBtnsContainer,
  nonogramsList,
  createElem,
  playBtn,
  timer,
  randomBtn
} from "./index.js";
import nonograms from "./nonograms.js";
import { createGameTable, resetTimer, winMessage } from "./gamefield.js";

function openModal() {
  document.body.classList.toggle("body__lock");
  let modal = document.querySelector(".modal__window");
  modal.classList.toggle("modal__window_active");
}

levelIcon.addEventListener("click", openModal);

let btnArr = [];
function addLevelBtn() {
  for (let i = 0; i < 3; i++) {
    let levelBtns = createElem("button", "level__btn");
    levelBtnsContainer.append(levelBtns);
    btnArr.push(levelBtns);
  }
  for (let i = 0; i < btnArr.length; i++) {
    btnArr[0].textContent = "5 x 5";
    btnArr[0].classList.add("easy__level");
    btnArr[0].classList.add("level__btn_active");
    btnArr[1].textContent = "10 x 10";
    btnArr[1].classList.add("medium__level");
    btnArr[2].textContent = "15 x 15";
    btnArr[2].classList.add("hard__level");
  }
  return btnArr;
}
addLevelBtn();

function handleClickLevelBtn() {
  for (let i = 0; i < btnArr.length; i++) {
    btnArr[1].addEventListener("click", () => {
      console.log("btn1")
      displayListOfTitles();
      btnArr[1].classList.add("level__btn_active");
      btnArr[0].classList.remove("level__btn_active");
      btnArr[2].classList.remove("level__btn_active");
    });
    btnArr[0].addEventListener("click", () => {
      console.log("btn2")
      displayListOfTitles();
      btnArr[0].classList.add("level__btn_active");
      btnArr[1].classList.remove("level__btn_active");
      btnArr[2].classList.remove("level__btn_active");
    });
    btnArr[2].addEventListener("click", () => {
      console.log("btn2")
      displayListOfTitles();
      btnArr[2].classList.add("level__btn_active");
      btnArr[0].classList.remove("level__btn_active");
      btnArr[1].classList.remove("level__btn_active");
    });
  }
}
handleClickLevelBtn();

let nonogramsNameList;
console.log(nonogramsNameList)
function createList() {
  nonogramsNameList = createElem("li", "nonograms__name");
  nonogramsList.append(nonogramsNameList);
}

function displayListOfTitles() {
  let easyLevelBtn = document.querySelector(".easy__level");
  let mediumLevelBtn = document.querySelector(".medium__level");
  let hardLevelBtn = document.querySelector(".hard__level");
  const smallArr = nonograms.filter((item) => item.size === 5);
   const mediumArr = nonograms.filter((item) => item.size === 10);
   const bigArr = nonograms.filter((item) => item.size === 15);
  let arr = [];
  if (easyLevelBtn.classList.contains("level__btn_active")) {
    nonogramsList.innerHTML = "";
    smallArr.forEach((item) => {
      createList();
      nonogramsNameList.textContent = item.name.toUpperCase();
      arr.push(item)
    });
  }
  if (mediumLevelBtn.classList.contains("level__btn_active")) {
    nonogramsList.innerHTML = "";
    mediumArr.forEach((item) => {
      createList();
      nonogramsNameList.textContent = item.name.toUpperCase();
    });
  }
  if (hardLevelBtn.classList.contains("level__btn_active")) {
    nonogramsList.innerHTML = "";
    bigArr.forEach((item) => {
      createList();
      nonogramsNameList.textContent = item.name.toUpperCase();
    });
  }
  return nonogramsNameList;
}
displayListOfTitles();


let defaultNono = "STROLLER";
export let active = 0;

function changeNono () {
  document.querySelector('.nonograms__list').addEventListener('click', (event) => {
    console.log('!')
    if(event.target.classList.contains('nonograms__name')) {
      let clickedBtn = event.target;
      removeActiveClass();
      addActiveClass(clickedBtn);
      defaultNono = clickedBtn.textContent;
      for (let i = 0; i < nonograms.length; i++) {
        if (nonograms[i].name === defaultNono) {
          active = nonograms[i].ind;
        }
      }
      resetTimer();
      document.querySelector(".field__wrapper_common").remove();
      createGameTable(nonograms[active].size, nonograms[active].input);
      console.log(nonograms[active].input)
    }
    });
    }

    document.querySelectorAll('.nonograms__name').forEach((name) => {
      name.addEventListener('click', changeNono)
    })

    function removeActiveClass() {
      let activeBtns = document.querySelectorAll('.nonograms__name');
      activeBtns.forEach((btn) => {
        btn.classList.remove('nonograms__name_active');
      })
    }

    function addActiveClass(clickedBtn) {
      clickedBtn.classList.add('nonograms__name_active');
    }


    function playGame() {
      modal.classList.remove("modal__window_active");
      winMessage.classList.remove("message_active");
      document.body.classList.toggle("body__lock");
    }

    playBtn.addEventListener('click', playGame)

   export function playRandom() {
      document.querySelector(".field__wrapper_common").remove();
      winMessage.classList.remove("message_active");
      resetTimer();
      active = Math.floor(Math.random() * nonograms.length);
      createGameTable(nonograms[active].size, nonograms[active].input);
      console.log(nonograms[active].input)
      console.log(nonograms[active].name)
      modal.classList.remove("modal__window_active");
      document.body.classList.toggle("body__lock");
    }

    randomBtn.addEventListener("click", playRandom);