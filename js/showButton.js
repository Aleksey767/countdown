const input = document.querySelector('.form-input');
const firstImage = document.querySelector('.btn-first-image');
const secondImage = document.querySelector('.btn-second-image');
const logoLink = document.querySelector('.logoLink');

logoLink.setAttribute('href', 'https://aleksey-sazonov.herokuapp.com/') //задаем ссылку логотипу на текущую страницу

input.onfocus = function() {                                   //убирать кнопку при фокусе
    firstImage.style.display = 'none';
    secondImage.style.display = 'none';
};
input.onblur = function() {
    firstImage.style.display = 'block';
    secondImage.style.display = 'block';
};





