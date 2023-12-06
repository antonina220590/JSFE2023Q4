import productsJson from './list.js';

const loadMoreBtn = document.querySelector('.load-more__button');
const numberOfCards = 8;
const numberOfCardsForTablet = 4;
const desktopWidth = 1440;
const tabletWidth = 768;


let defaultCategory = '';
let currentCategory = '';
let currentWidth = null;
let componentCard = null;
let cards = [];
let cardContainer = null;
let menuList = null;
//Создаем карточки и вытягиваем данным из json

function createComponent (productsJson) {
  if(!Array.isArray(productsJson)) {
    throw TypeError('Products array is invalid'); //проверка на массив
  }
  componentCard = document.createElement('div');
  componentCard.classList.add('menu__list');

  productsJson.forEach((product) => {
    const cardComponent = createCard(product);
    cards.push(cardComponent);
  })
  return componentCard;
}

function generateCards() {
  cardContainer = createComponent(productsJson);
  menuList = document.querySelector('.menu__list__wrapper');
  menuList.append(cardContainer);
  return menuList;
}
generateCards();

function createCard (product) {
  validateProduct(product);

  const component = document.createElement('div');
  component.classList.add('menu__content');

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

function renderCards () {
  for (let i = 0; i < 20; i++) {
    cardContainer.append(cards[i])
}
}

function changeBtnHandler () {
  document.querySelector('.menu__buttons').addEventListener('click', (event) => {
    if(event.target.classList.contains('menu__btn')) {
      let clickedBtn = event.target;
      currentCategory = clickedBtn.innerText.trim().toLowerCase();
      removeActiveClass();
      addActiveClass(clickedBtn);
      renderCards();
      filterCardsByCategory(currentCategory);
      console.log(currentCategory)
    }
  })
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

function filterCardsByCategory(currentCategory) {
  let visibleCards = document.querySelectorAll('.menu__list__wrapper .menu__content');

  visibleCards.forEach(card => {
    card.classList.add("menu__content_hidden");
    card.querySelectorAll('.menu__img').forEach(img => {
      if(img.textContent === currentCategory) {
        card.classList.remove("menu__content_hidden");
        console.log(currentCategory)
      }
    })
    })
}

//Test
function hideCards() {
  if((currentWidth <= tabletWidth)) {
     cards.slice(numberOfCardsForTablet).forEach((card) => card.classList.add('menu__content_none'))
  }
 }

 // Отображение кнопки loadMore

 function showLoadBtn() {
  loadMoreBtn.classList.add('load-more__button_active');
}

function hideLoadBtn() {
  loadMoreBtn.classList.remove('load-more__button_active');
}

function btnForCategory() {
  if (currentCategory === 'tea') {
    loadMoreBtn.classList.remove('load-more__button_active');
  }
}

function showSlicedCards() {
 return cards.forEach((card) => card.classList.remove('menu__content_none'));

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
      for (let i = 0; i < numberOfCards; i++) {
        cardContainer.append(cards[i]);
    }
    }
    if(cards.length <= numberOfCardsForTablet ) {
      for (let i = 0; i < numberOfCardsForTablet; i++) {
        cardContainer.append(cards[i]);
    }
    }
    }
    showSlicedCards();
    hideLoadBtn();

    if(currentWidth <= tabletWidth) {
      if(cards.length >= numberOfCards) {

        for (let i = 0; i < numberOfCards; i++) {
                cardContainer.append(cards[i])
            }
      }

      if (cards.length <= numberOfCardsForTablet) {
        for (let i = 0; i < numberOfCardsForTablet; i++) {
          cardContainer.append(cards[i])
      }
      }
          hideCards();
          showLoadBtn();
          btnForCategory();
  }
}

window.addEventListener('resize', resizeWindow)

window.addEventListener('load', () => {
 //renderCards();
 changeBtnHandler();
 resizeWindow();
})

