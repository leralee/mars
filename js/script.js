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

movieDB['movies'].sort(); 

const moviesNotSorted = document.querySelectorAll('.promo__interactive-item');

for (let i=0; i<movieDB.movies.length; i++){
    moviesNotSorted[i].textContent = `${i+1} ${movieDB['movies'][i]}`;
};

document.querySelectorAll(".promo__adv-title")[0].remove()

const promo__adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector('.promo__bg'),
      promo__genre = poster.querySelector(".promo__genre");

promo__adv.forEach(element => {
    element.remove()
});

promo__genre.textContent = 'драма';

poster.style.backgroundImage = "url('img/bg.jpg')";

// document.querySelector('.promo__bg').replaceWith(promo__bg); 


