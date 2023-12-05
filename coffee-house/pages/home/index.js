//Burger menu
console.log("I'm burger file");

const BURGER = document.querySelector('.hamburger');

if (BURGER) {
  const NAVIGATION_DISPLAY = document.querySelector('.navigation__container');
  const NAV_LINKS = document.querySelector('.navigation__links');
  const LINKS = document.querySelectorAll('.link_typography');

  const handleBurger = () => {
    BURGER.classList.toggle('hamburger_active');
    NAVIGATION_DISPLAY.classList.toggle('navigation__container_active');
    NAV_LINKS.classList.toggle('navigation__links_active');
    document.body.classList.toggle('body__lock');
  }

  BURGER.addEventListener('click', () => {
    handleBurger();
  });

  LINKS.forEach((link) => {
    link.addEventListener('click', () => {
      console.log(link)
      if(BURGER.classList.contains('hamburger_active')) {
        handleBurger();
      }
    })
  });

};






