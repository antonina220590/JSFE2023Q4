import productsJson from './list.js';

//Создаем карточки и вытягиваем данным из json

let cards = [];
const loadMoreBtn = document.querySelector('.load-more__button')
const numberOfCards = 8;
const numberOfCardsForTablet = 4;
let defaultCategory = 'tea';
const desktopWidth = 1440;
const tabletWidth = 768;
let currentWidth;

function createComponent (productsJson) {
  if(!Array.isArray(productsJson)) {
    throw TypeError('Products array is invalid'); //проверка на массив
  }

  const componentCard = document.createElement('div');
  componentCard.classList.add('menu__list');

  productsJson.forEach((product) => {
    if(product.category === defaultCategory) {
    const cardComponent = createCard(product);
    cards.push(cardComponent);
    }
  })
  return componentCard;
}

const cardContainer = createComponent(productsJson);
const menuList = document.querySelector('.menu__list__wrapper');
menuList.append(cardContainer);


function createCard (product) {
  validateProduct(product);


  const component = document.createElement('div');
  component.classList.add('menu__content');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('menu__list__img-content');
  const image = document.createElement('img');
  image.classList.add('menu__img');
  image.src = product.img;

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

function defineCardCategory() {
  cards = productsJson.filter((card) => card.category === defaultCategory);
}


 function hideCards() {
  if((currentWidth <= tabletWidth)) {
    return cards.slice(numberOfCardsForTablet).forEach((card) => card.classList.add('menu__content_none'))
  }
 }

 function showSlicedCards() {
  return cards.forEach((card) => card.classList.remove('menu__content_none'))
 }

  // Отображение кнопки loadMore

  function showLoadBtn() {
    loadMoreBtn.classList.add('load-more__button_active');
  }

  function hideLoadBtn() {
    loadMoreBtn.classList.remove('load-more__button_active');
  }

//Генерация карточек в зависимости от размера экрана

// function renderCards() {

//   currentWidth = window.innerWidth;

//   if(currentWidth > tabletWidth) {
//     for (let i = 0; i < numberOfCards; i++) {
//         cardContainer.append(cards[i]);
//     }
//     console.log("desktop")
//    showSlicedCards();
//    hideLoadBtn();
//     }
//   }
//     if(currentWidth <= tabletWidth) {
//       for (let i = 0; i < numberOfCards; i++) {
//         cardContainer.append(cards[i])
//     }
//   console.log("tablet")
//   hideCards();
//   showLoadBtn();
//   }
// renderCards();

function renderCards() {
    currentWidth = window.innerWidth;

    if(currentWidth > tabletWidth) {
      if(cards.length >= numberOfCards) {
        for (let i = 0; i < numberOfCards; i++) {
          cardContainer.append(cards[i]);
      }

      }
      if(cards.length  <= numberOfCardsForTablet ) {
        for (let i = 0; i < numberOfCardsForTablet; i++) {
          cardContainer.append(cards[i])
      }
      }
      }
      console.log("desktop")
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
        console.log("tablet")
            hideCards();
            showLoadBtn();
    }
  }


  renderCards();
window.addEventListener('resize', renderCards)

console.log(cards.length)