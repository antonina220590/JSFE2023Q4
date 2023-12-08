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

console.log(sliderCount)
console.log(offset)
SLIDER_LINE.style.transform = `translateX(-${offset}px)`
}

function nextSlide() {

  sliderCount++;
  offset -= sliderWidth;


  if(sliderCount >= SLIDE.length) {
    offset = 0;
    sliderCount = 0;
  }

  console.log(sliderCount)
  console.log(offset)


  SLIDER_LINE.style.transform = `translateX(${offset}px)`;
}



ARROW_LEFT.addEventListener('click', prevSlide)
ARROW_RIGHT.addEventListener('click', nextSlide)




