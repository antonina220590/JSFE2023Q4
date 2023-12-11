const ARROW_LEFT = document.querySelector('.favourite__slider-btn-prev');
const ARROW_RIGHT = document.querySelector('.favourite__slider-btn-next');
const SLIDER_CONTAINER = document.querySelector('.content__container')
const SLIDER_LINE = document.querySelector('.slider__content');
const SLIDE = document.querySelectorAll('.slides');
let gapStyle = getComputedStyle(SLIDER_LINE);
let progressBar = document.querySelectorAll('.pagination__line_dark_active');
let state = 0;
let activeState = 100;
let startState = 10;
let gap = parseInt(gapStyle.getPropertyValue('gap'));
let sliderWidth = SLIDE[0].clientWidth + gap;
let offset = 0;
let sliderCount = 0;
let currentWidth = null;

//Progress Bar

function nextSlide() {
  progressBar[sliderCount].style.width = '0%';
  state = startState;
  sliderCount++;
  if(offset === -2 * sliderWidth) {
    sliderCount = 0;
    offset = 0;
  }else {
    offset -= sliderWidth
  }
  SLIDER_LINE.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
 progressBar[sliderCount].style.width = '0%';
 state = startState;
 sliderCount--;
  if(offset === 0) {
    sliderCount = 2;
    offset -= 2 * sliderWidth;
  }else {
    offset += sliderWidth;
  }

SLIDER_LINE.style.transform = `translateX(${offset}px)`;
}

function moveProgressBar(sliderCount) {
  if(state >= activeState) {
    state = 0;
    progressBar[sliderCount].style.width = '0%';
    prevSlide();
  } else{
    state += 10;
    progressBar[sliderCount].style.width = `${state}%`;
  }
}

let  moveIntervalSlide = null;
let moveIntervalBar = null;

function autoSlide() {

moveIntervalSlide = setInterval(() =>{
  prevSlide(sliderCount)
}, 6000);

moveIntervalBar = setInterval(() => {
  moveProgressBar(sliderCount)
}, 600)
}

autoSlide()

// Drag and drop

SLIDER_LINE.addEventListener('touchstart', touchStart, false);
SLIDER_LINE.addEventListener('touchmove', touchMove, false);

let x1 = null;

function touchStart (event) {
const initialTouch = event.touches[0];

x1 = initialTouch.clientX;
}

function touchMove(event) {
  if(!x1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let difference = x2 - x1;

  if(Math.abs(difference)) {
    if(difference > 0){
      prevSlide()
    } else {
      nextSlide()
  }
  x1 = 0;
  }
}


//Прерывание перелистывания при наведении мыши

function stopMoving() {
  clearInterval(moveIntervalSlide);
  clearInterval(moveIntervalBar);
}

function startMoving() {
  clearInterval(moveIntervalSlide);
  clearInterval(moveIntervalBar);
  autoSlide()
}


function resizeWindow() {
  currentWidth = window.innerWidth;
  gap = parseInt(gapStyle.getPropertyValue('gap'));
}

window.addEventListener('resize', resizeWindow);

SLIDE.forEach((slide) => {
  slide.addEventListener('mouseover', stopMoving, true);
  slide.addEventListener('mouseout', startMoving, true);
})

ARROW_LEFT.addEventListener('click', prevSlide);
ARROW_RIGHT.addEventListener('click', nextSlide);
