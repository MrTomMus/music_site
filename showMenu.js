let menu = document.querySelector('.show');
let arrow = document.querySelector('.arrows');
let arrowsBlock = document.querySelector('.block__arrows');

arrowsBlock.addEventListener('click', () => {
    arrow.classList.toggle('arrows__active');
    menu.classList.toggle('show__active');
})