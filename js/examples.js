/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/
/*
const minutes = 20;

if (minutes >= 0 && minutes < 15) {
  console.log('перша чверть години');
} else if (minutes >= 15 && minutes < 30) {
  console.log('друга чверть години');
} else if (minutes >= 30 && minutes < 45) {
  console.log('третя чверть години');
} else if (minutes >= 45 && minutes < 60) {
  console.log('четверта чверть години');
} else {
  console.log('некоректна кількість хвилин!');
}
  =============================================================================

/*
?  Перепишіть код за допомогою однієї конструкції SWITCH:

const number = Number(prompt('Введіть число між 0 та 3'));
switch (number) {
  case 0: {
    console.log('Ви ввели число 0');
    break;
  }
  case 1: {
    console.log('Ви ввели число 1');
    break;
  }
  case 2:
  case 3: {
    console.log('Ви ввели число 2, а може й 3');
    break;
  }
  default: {
    console.log('Ви ввели якесь інше число');
  }
}
*/

// if (number === 0) {
//   console.log('Ви ввели число 0');
// } else if (number === 1) {
//   console.log('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   console.log('Ви ввели число 2, а може й 3');
// } else {
//   console.log('Ви ввели якесь інше число');
// }

/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
 */
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// let canOpenChat = isOnline && isFriend && !isDnd;

// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
 ? Що буде виведено в консоль?
 */
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// -------------------------------------------------------------------------------

// Нормалізація рядка toLowerCase()

// Напишіть код, який запитуватиме:
// 'Яка «офіційна» назва JavaScript?'
// Якщо користувач вводить ECMAScript,
//  то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»

// const answer = 'ECMAScript';
// let userInput = prompt('Яка «офіційна» назва JavaScript?');

// if (userInput.toLowerCase() === answer.toLowerCase()) {
//   console.log('Вірно!');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

// -------------------------------------------------------------

//  Форматування посилання (endsWith)

// Напиши скрипт який перевіряє чи закінчується значення
// змінної link символом /. Якщо ні, додай до кінця
// значення link цей символ.
// Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   // link = link + '/';
//   link += '/';
// }
// console.log(link);

// -----------------------------------------------------------------

// ? Форматування посилання (includes та логічне «І»)
// ? Напиши скрипт який перевіряє чи закінчується значення
// ? змінної link символом /. Якщо ні, додай до кінця
// ? значення link цей символ, але тільки в тому випадку,
// ? якщо в link є підрядок "my-site".
// ? Використовуй конструкцію if...else або тернарний оператор.

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// console.log(link);

// --------------------------------------------------------------------
/*
? Пошук у рядку методом includes()
?
? Напиши функцію isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2),
? яка буде перевіряти чи є у рядку заборонені слова.
? Параметри функції:
? string - рядок;
? blacklistedWord1 - перше заборонене слово;
? blacklistedWord2 - друге заборонене слово.
? Функція має повернути true або false.
*/


// Повна версія функції isStrIncludesForbiddenWords

// function isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2) {
//   const normalizedStr = string.toLowerCase();

//   const result = normalizedStr.includes(blacklistedWord1) || normalizedStr.includes(blacklistedWord2);

//   return result;
// }

// const string1 = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// console.log(isStrIncludesForbiddenWords(string1, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string2, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string3, 'spam', 'sale'));
---------
// Скорочена версія функції isStrIncludesForbiddenWords


// function isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2) {
//   return string.toLowerCase().includes(blacklistedWord1) || string.toLowerCase().includes(blacklistedWord2);
// }

// const string1 = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// console.log(isStrIncludesForbiddenWords(string1, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string2, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string3, 'spam', 'sale'));
