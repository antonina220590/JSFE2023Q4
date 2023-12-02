//Burger menu

const BURGER = document.querySelector('.hamburger__btn');

if (BURGER) {
  const NAVIGATION_DISPLAY = document.querySelector('.navigation__container');
  const NAV_LINKS = document.querySelector('.navigation__links');
  const MENU = document.querySelector('.menu_cont');

  BURGER.addEventListener('click', () => {
    BURGER.classList.toggle('hamburger_active');
    NAVIGATION_DISPLAY.classList.toggle('navigation__container_active');
    NAV_LINKS.classList.toggle('navigation__links_active');
    document.body.classList.toggle("body__lock");
  })
};




