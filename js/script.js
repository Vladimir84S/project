"use strict";

/* ===== 003 Переменные и строгий режим / ==== 004 (д) Правила и типы названия переменных =====

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//   a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Ivan';

// {
//   var result = 50;
// }

// console.log(result);

// alert(5);
// [].push('a');

// const vehicleBodyWidth = 5000;
// const vehicleBodyLength = 4000;

// console.log('Ширина кузова автомобиля: ' + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);

// ['vruru', 'ecrvrev', 'vvuguegv'].map(item = >)

// Request
// data
// response

// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase


// let COLOR_RED = '#F00';

// const _apiBase = 'https://gateway.marvel.com:443/v1/public';
// // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
// const _apiKey = 'apikey=d4eesadvdhbhvsdbghyu5451vbsb';
*/

/* ===== 005 Классификация типов данных в JavaScript / ==== 006 (д) Разница между объектами и массивами и неочевидные синтаксические возможности=====

let number = 4.6;

console.log(-4 / 0);
console.log('string' * 9);

const persone = "Alex";

const bool = false;

// console.log(something);

let und;
console.log(und);

const obj = {
  name: "John",
  age: 25,
  isMarried: false
};

// console.log(obj.name)
console.log(obj["name"]);



let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);


const arr = ['a', 'b', 'c'];
arr[10] = '3456';

console.log(arr);


const arrObj = {
  0: 'a',
  1: 'b',
  2: 'c',
  abc: {
    df: [{}, {}],
    def: {

    }
  }
};
const b = 'b';

// arrObj.b = '1234';
arrObj['b'] = {};

console.log(arrObj['b']);
console.log(arrObj.b);

// const obj = { a: 1, b: 2 };
const obj = {
  'Anna': 500,
  'Alice': 600
};
*/

/* ===== 007 Простое общение с пользователем =====

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("Как Ваше имя?", '');
// answers[1] = prompt("Какая Ваша фамилия?", '');
// answers[2] = prompt("Сколько Вам лет?", '');

// console.log(typeof (answers));
*/

/* ===== 008 Интерполяция (ES6) =====

const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = "Ivan";

alert(`Привет, ${user}`);
*/

/* ===== 009 Операторы в JS =====

console.log('arr' + ' - object');
console.log(4 + +'5');

let incr = 10,
  decr = 10;

// ++incr; // оператор инкрeмента (увиличение на 1 единицу)
// --decr; // оператор декрeмента (уменьшение на 1 единицу)

console.log(++incr);
console.log(--decr);

console.log(5 % 2); // оператор остатка
console.log(2 * 4 == '8'); // оператор равно
console.log(2 * 4 === '8'); // оператор cтрогого равно
console.log(2 + 2 * 2 === '8');
console.log(2 + 2 * 2 !== '8');

// && // оператор "И"
// || // оператор "ИЛИ"
// ! // оператор "НЕ" (отрицания);
// !== // оператор "НЕ РАВЕН";

const isChecked = false,
  isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);
*/

// ===== 010 Учимся работать с системой контроля версий Git и с сервисом GitHub =====
// ===== 011 Как работать с GitHub с разных компьютеров, gitignore и Git Kraken =====