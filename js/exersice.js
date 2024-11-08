/*
? Попросіть користувача ввести число.
? Виведіть результат у консоль.
? Приведіть рядок до числа.

let userInput = prompt('Enter your number');
userInput = Number(userInput);
console.log(userInput);

або те ж саме:

const userInput = Number(prompt('Enter your number'));
console.log(userInput);
*/

/*
 ? Дізнайтесь числове значення ширини елемента.
const elementWidth = '50px';
const numericalWidth = Number.parseInt(elementWidth);
console.log('ElementWidth:', elementWidth);
console.log('NumericalWidth:', numericalWidth);
*/

/* ? Дізнайтесь числове значення висоти елемента.
const elementHeight = '200.74px';
const numericalHeight = Number.parseFloat(elementHeight);
console.log('elementHeight: ', elementHeight);
console.log('numericalHeight: ', numericalHeight);
*/

/* ? Попросіть користувача ввести два числа, складіть їх та виведіть результат у консоль.
const numA = Number(prompt('Enter first number'));
const numB = Number(prompt('Enter second number'));
const result = numA + numB;
console.log(result);
*/

/*
? Напиши скрипт, який виводить у консоль заокруглені вгору/вниз значення
? змінної value. Використовуй методи Math.floor(), Math.ceil()
? та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// let value = 27.4;
// value = Math.round(value);[27]
// value = Math.floor(value);[27]
// value = Math.ceil(value);[28]
// console.log(value);
*/

/* +++Фунції===================================================================================
function greet(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}
greet('Oleksiy', 'Repin');
greet('Diana');
*/

/*
function sum(numA, numB) {
  const result = numA + numB;
  return result;
}
console.log(sum(10, 20));
*/

// ? Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
// ? Сторони прямокутника будуть переденні до параметрів sideA та sideB.

// function getRectArea(sideA, sideB) {
//   const rectArea = sideA * sideB;
//   return rectArea;
// }
// console.log(getRectArea(8, 11)); // 88
// console.log(getRectArea(18, 11)); // 198
// console.log(getRectArea(8, 21)); // 168

/*
 ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 ? маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти.
 ?
 ? Вага та висота будуть спеціально передані як рядки.
 ?
 ? Індекс маси тіла необхідно округлити до однієї цифри після коми.

// function calcBMI(weight, height) {
//   weight = Number(weight);
//   height = Number(height);
//   const resultBmi = weight / height ** 2;
//   //   return resultBmi.toFixed(2);
// //   return Number(resultBmi.toFixed(2)); Якщо потрібне число
// }
// const bmi = calcBMI('88.3', '1.75');
// console.log(bmi);
*/

// ======Розгалуження==Exercise=================================================================
/* Запросіть у користувача число, якщо число дорівнює 10,
 то виведіть 'Вірно', інакше виведіть 'Невірно'.

const userNumber = Number(prompt('Введіть якесь число'));
console.log(userNumber);
if (userNumber === 10) {
  console.log('Вірно');
} else {
  console.log('Невірно');
}
*/

/*
? Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.

const balance = 10000;
if (balance > 0) {
  console.log('Positive');
} else {
  console.log('Negative');
}
*/

/*
Cкрипт для відображення часу дедлайну здачі проекту.
? Якщо до дедлайну 0 днів - виведи рядок "Today"
? Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
? Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
? Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
? В інших випадках - виведи рядок "Incorrect value of days"

const deadLine = 2;
if (deadLine === 0) {
  console.log('Today');
} else if (deadLine === 1) {
  console.log('Tomorrow');
} else if (deadLine === 2) {
  console.log('Overmorrow');
} else if (deadLine >= 3) {
  console.log('Date in the future');
} else {
  console.log('Incorrect value of days');
}
*/

/*
? Перепишіть конструкцію if з використанням тернарного оператора.

const numA = 6;
const numB = 1;
let result = '';

if (numA + numB < 4) {
  result = 'Мало';
} else {
  result = 'Багато';
}
console.log(result);

або ТЕРНАРНИЙ ОПЕРАТОР

const numA = 4;
const numB = 1;

let result = numA + numB < 4 ? 'Мало' : 'Багато';
console.log(result);
*/

/*
?  Перепишіть if..else за допомогою декількох тернарних операторів.
const login = 'Співробітник';
let message = '';
if (login === 'Співробітник') {
  message = 'Привіт';
} else if (login === 'Директор') {
  message = 'Вітаю';
} else if (login === '') {
  message = 'Немає логіну';
} else {
  message = 'dfg';
}
console.log(message);

// або тернарний Оператор//

const login = 'Співробітник';
let message =
  login === 'Співробітник'
    ? 'Привіт'
    : login === 'Директор'
    ? 'Вітаю'
    : login === ''
    ? 'Немає логіну'
    : 'dfg';
console.log(message);
*/
