'use sctrict';


const headerCityButton = document.querySelector('.header__city-button');

if (localStorage.getItem('lomoda-location')) {
    headerCityButton.textContent = localStorage.getItem('lomoda-location');
}

headerCityButton.addEventListener ('click', () => {
    const city = prompt ('Укажите ваш город');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
});


//модальное окно


const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

subheaderCart.addEventListener('click', () => {
    cartOverlay.classList.add('cart-overlay-open');
});