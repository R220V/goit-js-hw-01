/*
 Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.
Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику: • quantity— перший параметр, число, що містить кількість замовлених дроїдів • pricePerDroid — другий параметр, число, що містить вартість одного дроїда
Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;

  return `You ordered ${quantity} droids worth  ${totalPrice} credits`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"



----------------------------------------------------------------------------

Задача 2. Доставка товару
Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • country — перший параметр, рядок, що містить країну доставки • price — другий параметр, число, що містить загальну вартість товару • deliveryFee — третій параметр, число, що містить вартість доставки товару
Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де: • <country> — це країни доставки • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
  
    return `Shipping to ${country} will cost ${totalPrice} credits`;
  }
  
  console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
  console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
  console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"
---------------------------------------------------------------------------------

 Задача 3. Ширина елемента
Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • content— перший параметр, ширина контенту • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін • border — третій параметр, значення товщини бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.
Доповни код функції так, щоб вона повертала число —загальну ширину елемента. При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
  
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  
    return totalWidth + 'px';
  }
  
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

-------------------------------------------------------------------------------

===========   goit-js-hw-02 =========

Станція з продажу ремонтних дроїдів готова до запуску, 
залишилося написати програмне забезпечення для відділу продажів. 
Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), 
яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

quantity — кількість замовлених дроїдів
pricePerDroid — ціна одного дроїда
customerCredits — сума коштів на рахунку клієнта


Доповни функцію таким чином:

Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і
 задай їй вираз розрахунку цієї суми.
Додай перевірку, чи зможе клієнт оплатити замовлення:
якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, 
функція має повертати рядок "Insufficient funds!"
в іншому випадку функція має повертати рядок 
"You ordered <quantity> droids worth <totalPrice> credits!", 
де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.


function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) {
      return 'Insufficient funds!';
    } else {
      return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
  }
  console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
  console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
  console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
  console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
  console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
  
-----------------------------------------------------------------------------------------

Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) 
та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).



Доповни код функції таким чином, що:

Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.


Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
      return message;
    } else {
      return message.slice(0, maxLength) + '...';
    }
  }
  
  console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
  console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
  console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
  console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
  console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
  console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

  ------------------------------------------------------------------

  
Функція checkForSpam(message) приймає рядок (параметр message), 
перевіряє його на вміст заборонених слів spam і sale,
і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі,
наприклад SPAM або sAlE.

Доповни код функції таким чином, що:

Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
Якщо в рядку відсутні заборонені слова, функція повертає буль false


function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase();
    return (
      normalizedMessage.includes('spam') || normalizedMessage.includes('sale')
    );
  }
  console.log(checkForSpam('Latest technology news')); // false
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  console.log(checkForSpam('Get best sale offers now!')); // true
  console.log(checkForSpam('Amazing SalE, only tonight!')); // true
  console.log(checkForSpam('Trust me, this is not a spam message')); // true
  console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

  ------------------------------------------------------------------------------

  
Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість
доставки товару в країну користувача (параметр country) і повертати повідомлення про результат.
Обов'язково використовуй інструкцію switch.

Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість
<country> і <price> необхідно підставити відповідні значення.

Список країн і вартість доставки:

China — 100 кредитів
Chile — 250 кредитів
Australia — 170 кредитів
Jamaica — 120 кредитів

Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку,
 то функція повинна повернути рядок "Sorry, there is no delivery to your country".


function getShippingCost(country) {
    let price;
    switch (country) {
      case 'China':
        price = 100;
        break;
  
      case 'Chile':
        price = 250;
        break;
  
      case 'Australia':
        price = 170;
        break;
  
      case 'Jamaica':
        price = 120;
        break;
      default:
        return 'Sorry, there is no delivery to your country';
    }
    return `Shipping to ${country} will cost ${price} credits`;
  }
  
  console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
  console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
  console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
  console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
  console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
  console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
  -----------------------
*/