// написати щось у модальному вікні ----alert--------
// alert('Hello World');

// перезапишу змінну ---- let---------------------
// let pricePer = 10;
// console.log(pricePer);
// pricePer = 30;
// console.log(pricePer);

// Ім"я в інпуті -----prompt-----------------------
// const firstName = prompt('Введіть Ваше ім"я');
// console.log(firstName);

// Так чи ні? -----confirm---------------------
// const isAdult = confirm('Чи є Вам 18 років?');
// console.log(isAdult);

// вказує тип даних ---- typeof---------------------
// const pricePer = 10;
// console.log(typeof pricePer);

// + - * / % **
// const numA = 10;
// const numB = 3;
// const result = numA ** numB;
// console.log(result);   // [13 7 3.33 1 1000]

// пріорітет операторів
// ()*/-+

// без/з комбінованим оператором---- +=   ---------------------
// let students = 100;
// // students = students + 50;
// students += 50;
// console.log(students);

// об"єднання 2 рядки в 1 ------------------
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName + '.';
// console.log(fullName);

// шаблонний рядок ${..}------------------------
// const quantity = 15;
// const orderMsg = `You orderer ${quantity + 10} bots.`;
// console.log(orderMsg);

// привітати користувача ---------------------------
// const firstName = prompt('Your first name');
// const lastName = prompt('Your last name');
// const message = `Hello ${firstName} ${lastName}, you are logged in!`;
// console.log(message);

// довжина рядка-------.length-------------------
// const message = 'This string is 28 chars long';
// const lengthofmessage = message.length;
// console.log(message);
// console.log(lengthofmessage);

// призвести дані до рядка ----String--------------------
// console.log(String(5));
// console.log(String(true));
// console.log(String(null));
// console.log(String('5' + 3));
// console.log(String('3 + false'));

// Явне перетворення типів.Призвести дані до числа ----Number--------------------
// console.log(Number('5')); [5]
// console.log(Number(true)); [1]
// console.log(Number(null)); [0]
// console.log(Number('5' + 3)); [53]
// console.log(Number(3 + false)); [3];
// console.log(Number('3' + 'false')); [NaN]
// console.log(Number('Ruslan')); [NaN];
// console.log(Number('25px')); [NaN];
// console.log(Number('undefind')); [NaN]

// унарний плюс ('+'теж саме,що і 'Number')-----------------
// console.log(+('3' + '6')); [36]
// console.log(+'20'); [20];

// Неявне перетворення типів---(*/-+%)--------------------
// console.log('5' * 2);  [10]
// console.log('10' - 5); [5]
// console.log('5' + true); [5true]
// console.log(5 + true); [6]
// console.log('5' - true); [4]
// console.log(2 + '5' + true); [25true]
// console.log(2 - '5' + true); [-2];
// Якщо рядок + щось, то щось стане рядком і буде конкатенація.

// 712false
// let a = 6;
// let b = false;
// let c = '12';
// let d = 1;
// let result = a + d + c + b;
// console.log(result);

// оператори порівняння-----<=>------------------
// Якщо порівнюємо рядок з числом, то буде число.
// console.log(5 > 4);[true];
// console.log('3' < 6); [true];

// Якщо порівнюються рядки, то порівнюються посимвольно і по юнікоду
// [https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin_script]
// console.log('2' < '12'); [false],тому що рядки по юнікоду
// console.log('2' < '22'); true
// console.log('papaya' <= 'papaya'); [true]

// оператор нестрогої рівності(всі типи призводяться до числа)
// console.log('4' == 4);[true];
// console.log(1 == true); [true]
// console.log('0' == false);[true];

// оператор строгої рівності(якщо рівняємо різні типи даних, то false)
// console.log('4' === 4);[false];
// console.log(1 === true);[false];

// [===================================================================================]
