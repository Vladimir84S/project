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

// Задание 1.

const adv = document.querySelectorAll('.promo__adv img'), // для 1 задания
    poster = document.querySelector('.promo__bg'), // для 2 и 3 задания
    genre = poster.querySelector('.promo__genre'), // для 2 задания
    movieList = document.querySelector('.promo__interactive-list'); // для 4 задания


adv.forEach(item => {
    item.remove();
});

// adv.forEach(function (item) {
//     item.remove();
// });

// Задание 2.

genre.textContent = 'драма';

// Задание 3.

poster.style.backgroundImage = "url('img/bg.jpg')";

// Задание 4.

movieList.innerHTML = "";
movieDB.movies.sort(); // сортировка по алфавиту
// console.log(poster.innerHTML); // позволяет получать верстку в консоле
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});