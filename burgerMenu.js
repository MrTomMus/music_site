const burgerMenu = document.querySelector('.burger__menuBtn');
const menuOne = document.querySelector('.header__burger__menu748');
const menuTwo = document.querySelector('.burger__menu748');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger__menuBtn__active')
    menuOne.classList.toggle('header__burger__menu748__active');
    menuTwo.classList.toggle('burger__menu748__active');
})