import {
  modal,
  levelIcon,
  levelBtnsContainer,
  nonogramsList,
  createElem,
} from "./index.js";
import nonograms from "./nonograms.js";
import { createGameTable, findVerticalClues, findHorizontalClues } from "./gamefield.js";

function openModal() {
  document.body.classList.toggle("body__lock");
  let modal = document.querySelector(".modal__window");
  modal.classList.toggle("modal__window_active");
}

levelIcon.addEventListener("click", openModal);

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

let nonogramsNameList;

function createList() {
  nonogramsNameList = createElem("li", "nonograms__name", nonogramsList);
}

export function displayListOfTitles() {
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
      nonogramsNameList.id = item.ind;
      arr.push(item);
    });
    console.log(arr);
  }
  return nonogramsNameList;
}
displayListOfTitles();

let defaultNono = "STROLLER";
export let active = 0;

function changeNono () {
  document.querySelector('.nonograms__list').addEventListener('click', (event) => {
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

      document.querySelector(".field__wrapper_common").remove();

      createGameTable(nonograms[active].size, nonograms[active].input);

    }
    console.log(active)
    });
    }
    changeNono ()



    function removeActiveClass() {
      let activeBtns = document.querySelectorAll('.nonograms__name');
      activeBtns.forEach((btn) => {
        btn.classList.remove('nonograms__name_active');
      })
    }

    function addActiveClass(clickedBtn) {
      clickedBtn.classList.add('nonograms__name_active');
    }



