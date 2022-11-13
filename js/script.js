/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

7) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

8) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

10) Фильмы должны быть отсортированы по алфавиту */

"use strict";
document.addEventListener("DOMContentLoaded", () => {


const movieDB = {
    movies: [
      "Мстители Финал",
      "Черная Пантера",
      "Доктор Стрендж",
      "Сорвиголова",
      "Тор: Рагнарок",
      "Что если...?",
    ],
  };
  
  const adv = document.querySelectorAll('.promo__adv img');
  const genre = document.querySelector('.promo__genre');
  const poster = document.querySelector('.promo__bg');
  const filmList = document.querySelector('.promo__interactive-list');
  const filmItem = filmList.querySelector('.promo__interactive-item');
  const form = document.querySelector('form.add');
  const input = form.querySelector('.adding__input');
  const checkbox = form.querySelector('[type="checkbox"]');


  




  const removeAdv = (arr) => {
    arr.forEach(img => {
        img.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = 'драма';

    poster.style.cssText = `
    background: url(../img/bg.jpg) center center/cover no-repeat;
    `;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let newFilm = input.value;
    const favorite = checkbox.checked;

    if(newFilm) {
        if(newFilm.length > 1) {
            newFilm = `${newFilm.slice(0, 21)}...`;
        }
        movieDB.movies.push(newFilm);
        createMovieList(movieDB.movies, filmList);
       
    }


    if(favorite) {
       
        
        console.log('Добавлен любимый фильм!');
    }


    e.target.reset();
  });



  const sortFilms = (arr) => {
    arr.sort();
  };


  const createMovieList = (films, parent) => {
    parent.innerHTML = '';
    sortFilms(movieDB.movies);

   

    films.forEach((film, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
                <span  display="none"></span>
                <div class="delete"></div>
        </li>`;

        
    });


     document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            films.splice(i, 1);
            createMovieList (films, parent);
        });
    });
    
};


  removeAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, filmList);
  
});