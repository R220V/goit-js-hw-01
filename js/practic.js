// Задачки:
// 1 Тип змінної/
// 2 довжина рядка/
// 3 символ в рядку/
// 4 вибір з 3/
// 5 перевірка на знижку/
// 6 реєстрація на сайті/

// для умов з 3 елем. використ. елс-іф.
// для умов з 4-10 умов, викор. світч

//  В (умова), а в { дія}

//  1

// Фунція для визначення типу змінної
// ф-я отримує будь-яку значення в якості аргументу
// і визначає тип цієї змінної. Виводить в консоль
// повідомлення "Тип змінної: type"

// Відповідь:[5 5 true 0]

// function variableType(valueType) {
//   typeof valueType;
//   return `Тип змінної: ${typeof valueType}`;
// }
// console.log('5');
// console.log(5);
// console.log(true);
// console.log(0);

// -----------------------------------------------------------------------

//  2

// Написати Функцію для обчислення довжини рядка.
// Ф-я отримує рядок в якості аргументу і
// виводить в консоль повідомлення 'Довжина рядка length';

// Відповідь:[Довжина рядка 19]

// function length(i) {
//   let long = i.length;
//   return `Довжина рядка ${long}`;
// }
// console.log(length('jkgyuflhjhluglijblk'));

//------------------------------------------------------------------------

//  3

// Дано рядок, що складається з символів 'abcd'
// перевір,що другий символ рядка є літера 'b'.
// Виведи "ТАК" або "НІ" в консоль.

// Відповідь:[ТАК НІ]

// function symbol(string) {
//   if (string[1] === 'b') {
//     return 'ТАК';
//   } else {
//     return 'НІ';
//   }
// }
// console.log(symbol('absd'));
// console.log(symbol('bambuk'));

//--------------------------------------------------------------------------

//  4

// Фунція приймає аргумент і визначає його тип даних.
// Якщо тип - строка, ф-я повертає
// "string", якщо чило-"number", інше-"unknown"

// Відповідь:[String Number unknown]

// function check(a) {
//   if (typeof a === 'string') {
//     return 'String';
//   } else if (typeof a === 'number') {
//     return 'Number';
//   } else {
//     return 'unknown';
//   }
// }
// console.log(check('bamboo'));
// console.log(check(5));
// console.log(check(true));

//--------------------------------------------------------------------------

// 5

// Функція перевіряє право на знижку (.так чи ні)
// якщо він:
// студент, пенсіонер, або від 12 до 18 років.

// Відповідь:[Має Має Має Не має Не має]

// function hasDiscount(isStudent, isPensioner, age) {
//   return isStudent || isPensioner || (age >= 12 && age <= 18)
//     ? 'Має право на знижку'
//     : 'Не має право на знижку';
// }
// console.log(hasDiscount(true, false, 25));
// console.log(hasDiscount(false, true, 65));
// console.log(hasDiscount(false, false, 14));
// console.log(hasDiscount(false, false, 40));
// console.log(hasDiscount(false, false, 80));

//--------------------------------------------------------------------------

// 6

//Чи може Користувач зареєструватись на сайті,
// якщо йому є 16р. і він прийняв умови використання (буль).
// Відповідь:[true false false]

// function canRegisterOnSite(age, accept) {
//   return age >= 16 && accept;
// }
// console.log(canRegisterOnSite(17, true));
// console.log(canRegisterOnSite(17, false));
// console.log(canRegisterOnSite(13, true));

//--------------------------------------------------------------------------

// 7

// Тернарний оператор
//Чи парне число у функції, якщо результат
//  не число, повідом "невалідне значення"

// Відповідь:[Число парне Число непрарне Невалідне значення]

// function isEvenNumber(number) {
//   if (typeof number === 'number') {
//     return number % 2 === 0 ? 'Число парне' : 'Число непрарне';
//   } else {
//     return 'Невалідне значення';
//   }
// }
// console.log(isEvenNumber(8));
// console.log(isEvenNumber(5));
// console.log(isEvenNumber('6'));

//--------------------------------------------------------------------------

// 8

// Функція перевіряє значення. Якщо це число,то бере в квадрат.
// Якщо строка - то переводить в число.
// Якщо не може - пише 'Invalid Input';
// Відповідь:[ 12  The square of 12 is 144
//          NaN    Invalid Input
//           14.2    The square of 14.2 is 201.64
//          20    The square of 20 is 400 ]

// function calculateSquare(value) {
//   const bamboo = parseFloat(value);

//   console.log(bamboo);
//   if (isNaN(bamboo)) {
//     return 'Invalid Input';
//   } else {
//     return `The square of ${bamboo} is ${bamboo ** 2}`;
//   }
// }
// console.log(calculateSquare('12d'));
// console.log(calculateSquare('ki89'));
// console.log(calculateSquare('14.2abcd'));
// console.log(calculateSquare(20));

//--------------------------------------------------------------------------

// Функція checkString(value) перевіряє, чи значення є рядком і не містить символ $.
// Якщо це так, виводимо к-сть символів у рядку.
// Якщо значення не рядок, виведіть повід. про невірний ввід.
// Відповідь:[2 4 Incorrect entry 11  Incorrect entry]

// function checkString(value) {
//   if (typeof value === 'string' && !value.includes('$')) {
//     return value.length;
//   } else {
//     return 'Incorrect entry';
//   }
// }
// console.log(checkString('5l'));
// console.log(checkString('test'));
// console.log(checkString('te$t'));
// console.log(checkString('testuvalnik'));
// console.log(checkString('$'));
