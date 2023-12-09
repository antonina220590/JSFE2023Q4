import productsJson from './list.js';

const modal = [];
let modalContainer = null;
let componentContainer = null;
let modalOverlay = null;
let currentModal = '';
let currentCard = 'Latte';

let initialPrice = '';
//Отрисовка модального окна

function createModalWrapper (productsJson) {
  if(!Array.isArray(productsJson)) {
    throw TypeError('Products array is invalid');
  }
  componentContainer = document.createElement('div');
  componentContainer.classList.add('modal-window__container');

  productsJson.forEach((product) => {
    const modalComponent =  createModalWindow(product);
    modal.push(modalComponent);
  })
  return  componentContainer;
}

function createModalWindow (product) { //создаем саму структуру карточки
  validateProduct(product);

  const componentWrapper = document.createElement('div');
  componentWrapper.classList.add('modal__content__wrapper');

  const componentLeft = document.createElement('div');
  componentLeft.classList.add('modal-window_left-side');
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('modal-window__img_content');
  const image = document.createElement('img');
  image.classList.add('menu__img', 'menu__img_modal');
  image.src = product.img;

  imageContainer.append(image);
  componentLeft.append(imageContainer);

  const componentRight = document.createElement('div');
  componentRight.classList.add('modal-window_right-side');

  const componentTitle = document.createElement('div');
  componentTitle.classList.add('modal-window_right-side__title');

  const title = document.createElement('h3');
  title.classList.add('menu-list__title', 'menu-list__title-modal');
  title.textContent = product.name;

  const description = document.createElement('p');
  description.classList.add('menu-list__text', 'menu-list__title-modal');
  description.textContent = product.description;

  componentTitle.append(title, description);

  const componentSize = document.createElement('div');
  componentSize.classList.add('modal-window__size');

  const spanSize = document.createElement('span');
  spanSize.classList.add('modal-window_btns_title');
  spanSize.textContent = 'Size';

  const sizeBtnsWrapper = document.createElement('div');
  sizeBtnsWrapper.classList.add('modal-window__btns__wrapper', 'modal-window__btns__wrapper_size');

  const btnSsize = document.createElement('button');
  btnSsize.classList.add('menu__btn', 'menu__btn__modal', 'menu__btn_active');
  btnSsize.textContent = product.sizes.s.size;

  const btnSSizeSpan = document.createElement('span');
  btnSSizeSpan.classList.add('menu__btn_circle', 'menu__btn_circle-size', 'menu__btn_circle_active');
  btnSSizeSpan.textContent = 'S';

  btnSsize.append(btnSSizeSpan)

  const btnMsize = document.createElement('button');
  btnMsize.classList.add('menu__btn', 'menu__btn__modal');
  btnMsize.textContent = product.sizes.m.size;

  const btnMSizeSpan = document.createElement('span');
  btnMSizeSpan.classList.add('menu__btn_circle', 'menu__btn_circle-size');
  btnMSizeSpan.textContent = 'M';

  btnMsize.append(btnMSizeSpan)

  const btnLsize = document.createElement('button');
  btnLsize.classList.add('menu__btn', 'menu__btn__modal');
  btnLsize.textContent = product.sizes.l.size;

  const btnLSizeSpan = document.createElement('span');
  btnLSizeSpan.classList.add('menu__btn_circle', 'menu__btn_circle-size');
  btnLSizeSpan.textContent = 'L';

  btnLsize.append(btnLSizeSpan);

  sizeBtnsWrapper.append(btnSsize, btnMsize, btnLsize);

  componentSize.append(spanSize, sizeBtnsWrapper);

  const componentAdditives = document.createElement('div');
  componentAdditives.classList.add('modal-window__additives');

  const spanAdditives = document.createElement('span');
  spanAdditives.classList.add('modal-window_btns_title');
  spanAdditives.textContent = 'Additives';

  const additivesBtnsWrapper = document.createElement('div');
  additivesBtnsWrapper.classList.add('modal-window__btns__wrapper', 'modal-window__btns__wrapper_adds');

  const btn1Adds = document.createElement('button');
  btn1Adds.classList.add('menu__btn', 'menu__btn__modal');
  btn1Adds.textContent = product.additives[0].name;

  const btn1AddsSpan = document.createElement('span');
  btn1AddsSpan.classList.add('menu__btn_circle', 'menu__btn_circle-adds');
  btn1AddsSpan.textContent = '1';

  btn1Adds.append(btn1AddsSpan);

  const btn2Adds = document.createElement('button');
  btn2Adds.classList.add('menu__btn', 'menu__btn__modal');
  btn2Adds.textContent = product.additives[1].name;

  const btn2AddsSpan = document.createElement('span');
  btn2AddsSpan.classList.add('menu__btn_circle', 'menu__btn_circle-adds');
  btn2AddsSpan.textContent = '2';

  btn2Adds.append(btn2AddsSpan);

  const btn3Adds = document.createElement('button');
  btn3Adds.classList.add('menu__btn', 'menu__btn__modal');
  btn3Adds.textContent = product.additives[2].name;;

  const btn3AddsSpan = document.createElement('span');
  btn3AddsSpan.classList.add('menu__btn_circle', 'menu__btn_circle-adds');
  btn3AddsSpan.textContent = '3';

  btn3Adds.append(btn3AddsSpan);

  additivesBtnsWrapper.append(btn1Adds, btn2Adds, btn3Adds);

  componentAdditives.append(spanAdditives, additivesBtnsWrapper);

  const componentTotal = document.createElement('div');
  componentTotal.classList.add('modal-window__total');

  const totalSpanTitle = document.createElement('span');
  totalSpanTitle.classList.add('menu-list__price', 'modal-window_total');
  totalSpanTitle.textContent = 'Total'

  const totalSpanPrice = document.createElement('span');
  totalSpanPrice.classList.add('menu-list__price', 'modal-window__total-price');
  totalSpanPrice.textContent = product.price;

  let basePrice = product.price;
  console.log(+(basePrice.slice(1)))

  componentTotal.append(totalSpanTitle, totalSpanPrice);

  const componentWarningWrap = document.createElement('div');
  componentWarningWrap.classList.add('modal-window__info');

  const componentWarning = document.createElement('div');
  componentWarning.classList.add('modal-window__info_warning');

  const warningImg = document.createElement('img');
  warningImg.src = '../../assets/menu/info-empty.png';

  const warningText = document.createElement('p');
  warningText.classList.add('modal-window__info-text');
  warningText.textContent = 'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.'

  componentWarning.append(warningImg, warningText);

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('modal-window_close_btn');
  closeBtn.textContent = 'Close';

  componentWarningWrap.append(componentWarning, closeBtn);

  componentRight.append(componentTitle, componentSize, componentAdditives, componentTotal, componentWarningWrap)

  componentWrapper.append(componentLeft, componentRight);

  return componentWrapper;
}

function validateProduct(product) {
  Object.keys(product).forEach((key) => {
    if((typeof (product[key]) ==='string' && product[key] === '') && Array.isArray(product[key]) === false) {
      throw TypeError(`Field ${key} is invalid`);
    }
  })
  return true;
}

function generateModalCard() {

  modalContainer = createModalWrapper(productsJson);
  modalOverlay = document.querySelector('.modal-window__overlay');
  modalOverlay.append(modalContainer);
  return modalOverlay;
}
generateModalCard();


function defineVisibleModal() {
  modal.forEach((item) => {
    item.querySelectorAll('.menu-list__title-modal').forEach(el => { //el - это название продукта в модальном окне
      if(el.textContent === currentCard) {
        currentModal = item;
      }
  })
})

return currentModal;
}

defineVisibleModal();

function renderVisibleCards() {
      modalContainer.insertAdjacentElement('beforeend', currentModal)
}
renderVisibleCards();

// Открытие и закрытие модального окна при клике по карточке

const closeModalBtn = document.querySelector('.modal-window_close_btn');

let clickedCard = '';
function cardsClickHandler () {
  document.querySelector('.menu__list').addEventListener('click', (event) => {

    if(event.target.closest('.menu__content')) {
     clickedCard = event.target.closest('.menu__content');
      currentCard = clickedCard.id;
       defineVisibleModal();
       renderVisibleCards();
      toggleModal();
    }
  })

}



function toggleModal() {
 const window =  document.querySelector('.modal-window__overlay');
 window.classList.toggle('modal-window__overlay_active');
 document.body.classList.toggle('body__lock');
}


closeModalBtn.addEventListener('click', () => {
  toggleModal();
});

document.addEventListener('click', (e) => {
 if (e.target.classList.contains('modal-window__overlay')) {
  toggleModal();
  };
});

window.addEventListener('load', () => {
  cardsClickHandler ()
 })

// Изменение цены



