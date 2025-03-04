'use strict';

//  Инкапсуляция функции конструктора

/* function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function () {
//     console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };

//   this.setAge = function (age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log('Недопустимое значение');
//     }
//   };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

//  ivan.say();
*/

//  Инкапсуляция классов

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = 'Babay';

  say = () => {
    console.log(
      `Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`
    );
  };

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое значение');
    }
  }

  // Getter для приватного свойства #surname

  get surname() {
    return this.#surname;
  }

  // Setter для приватного свойства #surname

  set surname(value) {
    if (typeof value === 'string' && value.trim().length > 0) {
      this.#surname = value;
    } else {
      console.log('Недопустимое значение для фамилии');
    }
  }
}

const ivan = new User('Ivan', 27);
// Получаем значение фамилии через getter
console.log(ivan.surname); // Выведет: Babay
// Устанавливаем новое значение фамилии через setter
ivan.surname = 'Petrov';
ivan.say(); // Выведет: Имя пользователя: Ivan Petrov, возраст 27
// Попытка установить недопустимое значение
ivan.surname = ''; // Выведет: Недопустимое значение для фамилии
ivan.say();
