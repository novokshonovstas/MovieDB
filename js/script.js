/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('[alt="some picture"]');
const genre = document.querySelector('.promo__genre');
const promoImg = document.querySelector('.promo__bg');
const filmList = document.querySelector('.promo__interactive-list');



adv.forEach(pic => {
    pic.remove();
});

genre.textContent = 'драма';


promoImg.style.cssText = `
background: url(../img/bg.jpg) center center/cover no-repeat;
`;

filmList.innerHTML = '';

movieDB.movies.sort();

 movieDB.movies.forEach((film, i) => {
   
filmList.innerHTML += `
<li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
</$li>`;
    }); 
