import productsJson from './list.js';

const loadMoreBtn = document.querySelector('.load-more__button');
const numberOfCards = 8;
const numberOfCardsForTablet = 4;
const tabletWidth = 768;

let defaultCategory = 'coffee';
let currentWidth = null;
let componentCard = null;
let cards = [];
let visibleCards = [];
let cardContainer = null;
let menuWrapper = null;

//Создаем карточки и вытягиваем данным из json

function createComponent (productsJson) { //созданную карточку наполняем контентом из json
  if(!Array.isArray(productsJson)) {
    throw TypeError('Products array is invalid'); //проверка на массив
  }
  componentCard = document.createElement('div');
  componentCard.classList.add('menu__list');

  productsJson.forEach((product) => {
    const cardComponent = createMenuCard(product);
    cards.push(cardComponent);
  })
  return componentCard;
}

function createMenuCard (product) { //создаем саму структуру карточки
  validateProduct(product);

  const component = document.createElement('div');
  component.classList.add('menu__content');
  component.id = product.id;

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('menu__list__img-content');
  const image = document.createElement('img');
  image.classList.add('menu__img');
  image.src = product.img;
  image.innerText = product.category;


  imageContainer.append(image);

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('menu-list__text-content')

  const title = document.createElement('h3');
  title.classList.add('menu-list__title');
  title.textContent = product.name;


  const description = document.createElement('p');
  description.classList.add('menu-list__text');
  description.textContent = product.description;


  const price = document.createElement('span');
  price.classList.add('menu-list__price');
  price.textContent = product.price;

  infoContainer.append(title, description, price);

  component.append(imageContainer, infoContainer);

  return component;
}


function validateProduct(product) {
  Object.keys(product).forEach((key) => {
    if((typeof (product[key]) ==='string' && product[key] === '') && Array.isArray(product[key]) === false) {
      throw TypeError(`Field ${key} is invalid`);
    }
  })
  return true;
}

function generateCards() { //цепляем карточки к wrapper

  cardContainer = createComponent(productsJson);
  menuWrapper = document.querySelector('.menu__list__wrapper');
  menuWrapper.append(cardContainer);
  return menuWrapper;
}
generateCards();

function defineVisibleCards() { // создаем массив с карточками, которые будут отображаться в зависимости от категории
  let visibleCards = [];
  cards.forEach((card) => {
    card.querySelectorAll('.menu__img').forEach(img => {
      if(img.textContent === defaultCategory) {
        visibleCards.push(card)
      }
  })
})
return visibleCards;
}

function renderVisibleCards() { // отрисовываем карточки по категориям
  componentCard.innerHTML = '';
  visibleCards.forEach((card)=> {
   componentCard.insertAdjacentElement("beforeend", card)
  })
}


function renderPermanentCards() {
 let coffeeBtn = document.getElementById('coffee');
 if(coffeeBtn.classList.contains('menu__btn_active')) {
  const activeCard = defineVisibleCards();
      visibleCards = [...activeCard];
      renderVisibleCards();
 }
}
renderPermanentCards();

function changeBtnHandler () { // перелистывание страниц
  document.querySelector('.menu__buttons').addEventListener('click', (event) => {
    if(event.target.classList.contains('menu__btn')) {
      let clickedBtn = event.target;
      defaultCategory = clickedBtn.innerText.trim().toLowerCase();
      removeActiveClass();
      addActiveClass(clickedBtn);
      const activeCard = defineVisibleCards();
      visibleCards = [...activeCard];
      renderVisibleCards();
      resizeWindow();
      btnForCategory();
    }
    });
    }

function removeActiveClass() {
  let activeBtns = document.querySelectorAll('.menu__buttons .menu__btn');
  activeBtns.forEach((btn) => {
    btn.classList.remove('menu__btn_active');
  })
}

function addActiveClass(clickedBtn) {
  clickedBtn.classList.add('menu__btn_active');
}


//Прячем и показываем лишние карточки

function hideCards() {
  if((currentWidth <= tabletWidth)) {
     visibleCards.slice(numberOfCardsForTablet).forEach((card) => card.classList.add('menu__content_none'));
  }
 }

 function showSlicedCards() {
  visibleCards.forEach((card) => card.classList.remove('menu__content_none'));
 }

 // Отображение кнопки loadMore

 function showLoadBtn() {
  loadMoreBtn.classList.add('load-more__button_active');
}

function hideLoadBtn() {
  loadMoreBtn.classList.remove('load-more__button_active');
}

function btnForCategory() {
  visibleCards.forEach((card) => {
    card.querySelectorAll('.menu__img').forEach(img => {
      if(img.textContent === 'tea') {
        loadMoreBtn.classList.remove('load-more__button_active');
      }
  })
})
}

// Активация кнопки загрузки

function loadMore() {
  showSlicedCards();
  hideLoadBtn();
}

loadMoreBtn.addEventListener('click', loadMore)


function resizeWindow() {
  currentWidth = window.innerWidth;

  if(currentWidth > tabletWidth) {
    if(cards.length >= numberOfCards) {
      showSlicedCards();
      hideLoadBtn();
    }
    if(cards.length <= numberOfCardsForTablet) {
      showSlicedCards();
      hideLoadBtn();
    }
  }

  if(currentWidth <= tabletWidth) {
    if((cards.length >= numberOfCards) || (cards.length <= numberOfCardsForTablet)) {
      hideCards();
      showLoadBtn();
    }
  }
}

window.addEventListener('resize', resizeWindow)

window.addEventListener('load', () => {
 changeBtnHandler();
 resizeWindow();

})

