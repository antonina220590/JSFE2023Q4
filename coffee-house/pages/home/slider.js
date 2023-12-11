const ARROW_LEFT = document.querySelector('.favourite__slider-btn-prev');
const ARROW_RIGHT = document.querySelector('.favourite__slider-btn-next');
const SLIDER_CONTAINER = document.querySelector('.content__container')
const SLIDER_LINE = document.querySelector('.slider__content'); //carousel
const SLIDE = document.querySelectorAll('.slides');

let sliderWidth = SLIDE[0].clientWidth + 200;
let offset = 0;
let sliderCount = 0;


function prevSlide() {
sliderCount--;
offset += sliderWidth;

 if(sliderCount <= -SLIDE.length) {
    sliderCount = 0;
    offset = 0;
  }
SLIDER_LINE.style.transform = `translateX(-${offset}px)`
}



function nextSlide() {

  sliderCount--;
  offset += sliderWidth;

  if(sliderCount <= -SLIDE.length) {
    offset = 0;
    sliderCount = 0;
  }

  SLIDER_LINE.style.transform = `translateX(${-offset}px)`;
}

ARROW_LEFT.addEventListener('click', prevSlide)
ARROW_RIGHT.addEventListener('click', nextSlide)
let  moveInterval = null;

function autoSlide() {
moveInterval = setInterval(timer, 5000);
  function timer() {
    nextSlide()
  }
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
  clearInterval(moveInterval);
}

function startMoving() {
  clearInterval(moveInterval);
  autoSlide()
}

SLIDE.forEach((slide) => {
  slide.addEventListener('mouseover', stopMoving, true);
  slide.addEventListener('mouseout', startMoving, true)
})
