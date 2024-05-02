let photos = document.querySelectorAll('.photo-item');
let photoTarget = document.querySelector('.popup__foto');
let popup = document.querySelector('.popup');
let link = document.querySelector('.popup__link');

photos.forEach(e => e.addEventListener('click', (e) => {
    let photo = e.currentTarget;

    popup.style.display = 'block';

    photoTarget.src = photo.src;
    link.href = photo.src;

}))


popup.addEventListener('click', (e) => {
    let elem = e.target;

    if(elem.className !== 'popup__foto') {
        popup.style.display = 'none';
    }
})