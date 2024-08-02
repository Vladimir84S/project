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
// ===== 012 (д) Сетевые протоколы. Подключение компьютера к аккаунту Github через SSH =====
// ===== 013 Практика, ч.1. Начинаем создавать приложение =====

/* ===== 014 Условия =====

// if (4 == 9) {
//   console.log('Ok!');
// } else {
//   console.log('Error!');
// }

// const num = 50;
// if (num < 49) {
//   console.log('Error!');
// } else if (num > 100) {
//   console.log('Много');
// } else {
//   console.log('Ok!');
// }
// ---Тернарные операторы---

// (num === 50) ? console.log('Ok!') : console.log('Error!');

const num = '50';

switch (num) {
  case '49':
    console.log('Неверно');
    break;
  case '100':
    console.log('Неверно');
    break;
  case '50':
    console.log('В точку!');
    break;
  default:
    console.log('Не в этот раз!');
    break;
}
*/

/* ===== 015 (д) Логические операторы =====

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//   console.log('Я сыт!');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'sbsdbnjnjk');

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log('Все сыты!');
// } else {
//   console.log('Мы уходим!');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
  console.log('Все довольны!');
} else {
  console.log('Мы уходим!');
}

console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);
*/

/* ===== 016 Циклы =====

// ===== while =====

let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

//===== do...while =====

// do {
//   console.log(num);
//   num++;
// }
// while (num <= 55)

// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    // break; // Остановка цикла
    continue; // Переход к следующей итерации
  }
  console.log(i);
}
*/

/* ===== 017 (д) Цикл в цикле и метки =====

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += '\n';
// }

// console.log(result);


first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 5; k++) {
      if (k === 2) break first;
      console.log(`Third level: ${k}`);
    }
  }
}
*/

// ===== 018 Практика, ч2. Применяем условия и циклы =====

/*  ===== 019 Функции, стрелочные ф-ции (ES6) =====

// **** FUNCTION DECLARATION ****

let num = 20;

function showFirsMessage(text) {
  console.log(text);
  // let num = 10;
  console.log(num);
}

showFirsMessage("Hello World!");
console.log(num);

console.log(calc(4, 2));
console.log(calc(5, 6));
console.log(calc(10, 6));

function calc(a, b) {
  return (a + b);
}

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

// **** FUNCTION EXPRESSION ****

const logger = function () {
  console.log("Hello")
};

logger();

// **** СТРЕЛОЧНЫЕ ФУНКЦИИ ****

const calc = (a, b) => {
  console.log('1')
  return a + b
};

calc();
*/

/* ===== 020 (д) Еще раз про аргументы функций =====

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
  console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);
*/

/* ===== 021 (д) Про важность return =====

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr)
// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return
//   }
//   console.log('Done')
// }

// test()

function doNothing() { };
console.log(doNothing === undefined);
*/

/* ===== 022 Методы и свойства строк и чисел =====

// const str = "test";
// const arr = [1, 2, 3];

// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("q"));

// const logg = "Hello world";
// // console.log(logg.slice(-5, -1));
// // console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px"
console.log(parseInt(test));
console.log(parseFloat(test));
*/

// ===== 023 Практика , ч3. Используем функции =====

// ===== 024 (д) Метод trim() =====

/* ===== 025 Callback- функции =====

function first() {
  // Do something
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done() {
  console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);
*/

/* ===== 026 Объекты, деструктуризация объектов (ES6) =====

// const obj = new Object();

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  makeTest: function () {
    console.log("Test");
  }
};

options.makeTest();

// ****Деструктуризация объектов****

const { border, bg } = options.colors;
console.log(border);

// *********************************


// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//   if (typeof (options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);
*/

/* ===== 027 Массивы и псевдомассивы =====

const arr = [2, 13, 26, 8, 10]
arr.sort(compareNum);
console.log(arr);


function compareNum(a, b) {
  return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));
*/

// ===== 028 урока небыло =====
/* ===== 029 Передача по ссылке или по значению, Spread оператор (ES6-ES9) =====

// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; // Передача по ссылке

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
  d: 17,
  e: 20
};

// console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const mewArray = oldArray.slice();

mewArray[1] = 'asdadadaadad';

console.log(mewArray);
console.log(oldArray);

// **** Оператор разворота **** Spread оператор (...) ****

const video = ['youtube', 'vimeo', 'megogo'],
  blogs = ['wordpress', 'livejournal', 'blogger'],
  internet = [...video, ...blogs, 'facebook', 'instagram'];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
};

const num = [2, 5, 7];

log(...num)

const array = ["a", "b"]
const newArray = [...array];

const q = {
  one: 1,
  two: 2
};

const newObj = { ...q };
*/

/* ===== 030 Основы ООП, прототипно-ориентированное наследование =====

let str = "some";
let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  }
};

const jonh = Object.create(soldier);

// const jonh = {
//   health: 100
// };

// jonh.__proto__ = soldier;
// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);
jonh.sayHello()
*/

// ===== 031 Практика , ч4. Используем объекты =====

/* ===== 032 Отлавливаем ошибки в своем коде при помощи консоли разработчика. Breakpoints =====

function hello() {
  console.log("Hello World");
  debugger;
}


hello();

function hi() {
  console.log("Say hi!")
}

hi();

const arr = [1, 14, 4, 30, 54],
  sorted = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}

console.log(sorted);
*/

/* ===== 033 Динамическая типизация в JS =====

// To String (превращение чего-то в строку);

// 1) Команда String
console.log(typeof (String(null)));
console.log(typeof (String(4)));

// 2) Конкретинация (сложение строк или сложение строки с чем-то)
console.log(typeof (5 + ''));

const num = 5;

console.log("https://zakon.rada.gov.ua/laws/" + num)

const fontSize = 26 + 'px';

// To Number (превращение чего-то в число);

// 1) Команда Number
console.log(typeof (Number('4')))

// 2) Унарный плюс (знак плюса перед другим типом данных)
console.log(typeof (+'5'));

// 3) Превращение определенных структур в числа

console.log(typeof (parseInt("15px", 10)));


let answ = +prompt("Hello", "");

// To Boolean (в булиновое значение)

// 0, '', null, undefined, NaN; - false

// 1)
let switcher = null;
if (switcher) {
  console.log('Working...');
}

switcher = 1;
if (switcher) {
  console.log('Working...');
}

// 2)
console.log(typeof (Boolean('4')));

// 3)
console.log(typeof (!!"4444"));
*/

/* ===== 034 Замыкание и лексическое окружение =====

// let number = 5; debugger

// function logNumber() {

//   console.log(number); debugger
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger

function createCounter() {
  let counter = 0;

  const myFunction = function () {
    debugger
    counter = counter + 1; debugger
    return counter; debugger
  }

  return myFunction;
}
debugger
const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);

{
  let msg = 'Hello'
}

console.log(msg)

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let num = 3;
  }
  console.log(num);
}
*/

/* ===== 035 Задачи с собеседований на понимание основ =====

// let x = 5; alert(x++);

// [] + false - null + true
// console.log([] + false - null + true); // "NaN"

// let y = 1;
// let x = y = 2;
// alert(x);

// [ ] + 1 + 2
// console.log([] + 1 + 2); //"12"

// alert("1"[0]);

// 2 && 1 && null && 0 && undefined
// console.log(2 && 1 && null && 0 && undefined); // "И" запинается на лжи (false) "ИЛИ" запинается на правде (true)

// !!( a && b ) и (a && b)
// console.log(!!(1 && 2) === (1 && 2)); // "false"

// alert(null || 2 && 3 || 4); // "3"

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a === b); // "false"

// alert(+"Infinity");

// "Ёжик" > "яблоко"
// console.log("Ёжик" > "яблоко"); // "false"

// 0 || "" || 2 || undefined || true || falsе
// console.log(0 || "" || 2 || undefined || true || falsе);
*/

// ===== 036 Получение элементов со страницы =====

// ===== 037 Действия с элементами на странице =====
// ===== 038 Практика. Задание на отработку действий со страницей =====
// ===== 039 События и их обработчики =====
// ===== 040 Навигация по DOM - элементам, data-атрибуты, преимущество forof =====
/* ===== 041 Рекурсия =====

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//     // result = x * result;
//   }
//   return result;
// }

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// pow(2, 1) // 2
// pow(2, 2) // 4
// pow(2, 3) // 8
// pow(2, 4) // 16

let students = {
  js: [{
    name: 'John',
    progress: 100
  }, {
    name: 'ivan',
    progress: 60
  }],

  html: {
    basic: [{
      name: 'Peter',
      progress: 20
    }, {
      name: 'Ann',
      progress: 18
    }],

    pro: [{
      name: 'Sam',
      progress: 10
    }],
    semi: {
      students: [{
        name: 'Test',
        progress: 100
      }]
    }
  }
};


function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;

      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;

        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }

  return total / students;
}


// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }

    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);
*/
// ===== 042 Практика. Используем события на странице проекта =====