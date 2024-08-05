/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ]
  };

  // Задание 1 с урока 038.

  const adv = document.querySelectorAll('.promo__adv img'), // для 1 задания с урока 038.
    poster = document.querySelector('.promo__bg'), // для 2 и 3 задания с урока 038.
    genre = poster.querySelector('.promo__genre'), // для 2 задания с урока 038.
    movieList = document.querySelector('.promo__interactive-list'), // для 4 задания с урока 038.
    addForm = document.querySelector('form.add'), // для 1 задания
    addInput = addForm.querySelector('.adding__input'), // для 1 задания
    checkbox = addForm.querySelector('[type="checkbox"]'); // для 4 задания

  // Задание 1.

  addForm.addEventListener('submit', (event) => {
    event.preventDefault(); // страничка не будет перезагружаться

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    // убирает пустые строки при нажатии кнопки просто так.
    if (newFilm) {
      // Задание 2
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`
      };
      // Задание 5
      if (favorite) {
        console.log("Добавляем любимый фильм");
      };

      movieDB.movies.push(newFilm); // добавление новой строки с фильмом
      sortArr(movieDB.movies); // сортировка по алфавиту

      createMovieList(movieDB.movies, movieList);
    }


    event.target.reset();

  });


  // Задание 1 с урока 038 и урока 042.
  // удаление рекламмы
  const deleteAdv = (arr) => {
    arr.forEach(item => {
      item.remove();
    });
  };


  // adv.forEach(function (item) {
  //     item.remove();
  // });

  // урок 042
  const makeChanges = () => {

    // Задание 2 с урока 038.

    genre.textContent = 'драма';

    // Задание 3 с урока 038.

    poster.style.backgroundImage = "url('img/bg.jpg')";
  };

  // урок 042 сортировка по алфавиту

  const sortArr = (arr) => {
    arr.sort();
  };

  // Задание 4 с урока 038 и урока 042.

  // movieDB.movies.sort(); // сортировка по алфавиту


  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films); // Задание 5

    // console.log(poster.innerHTML); // позволяет получать верстку в консоле
    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
    });
    // Задание 3 (удаление)
    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }

  deleteAdv(adv);
  makeChanges();

  createMovieList(movieDB.movies, movieList);

});

