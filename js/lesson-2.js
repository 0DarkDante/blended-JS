// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

let styles = ['jazz', 'blues'];

styles.push('rock-n-roll');
for (let i = 0; i < styles.length; i++) {
  if (styles[i] === 'blues') {
    styles[i] = 'classic';
  }
}

function logItems(array) {
  let i = 1;
  for (let elem of array) {
    console.log(`${i} - ${elem}`);
    ++i;
  }
}

// logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(array) {
  let name = prompt("Введіть ім'я");
  // let found = false;

  // for (let elem of array) {
  //   if (elem === name) {
  //     found = true; 
  //     break;
  //   }
  // };

  // if (found) {
  //   alert(`Welcome, ${name}!`);
  // } else {
  //   alert("User not found");
  // }
  
  if (array.includes(name)) {
    alert(`Welcome, ${name}!`);
  }else {
    alert("User not found");
  }
  
};

// checkLogin(logins)

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...rest) {
  let sum = 0;
  for (let elem of rest) {
    if (Number(elem)) {
      sum += elem; 
    } else {
      console.log('NaN')
    }
  };

  return sum/rest.length;
}

// console.log(caclculateAverage(5, 3, 12));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function sumAdjacentPairs(array) {
  let arr1 = [];

  for (let i = 0; i < array.length-1; i++) {
    arr1.push(array[i] + array[i + 1]);
  }
  return arr1;
}

// console.log(sumAdjacentPairs(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 0, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
  let min = numbers[0];

  if (Array.isArray(numbers)) {
    for (let i = 1; i < numbers.length; i++) {
      if (min > numbers[i]) {
        min = numbers[i];
      }
    }
  } else {
    return 'Sory, it is not an array!';
  }
  return min;
}

// console.log(findSmallestNumber(numbers));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

function findLongestWord(string) {
  let arr = string.split(' '),
      bigStr = ' ';

  for (let elem of arr) {
    if (elem.length > bigStr.length) {
      bigStr = elem;
    }
  }

  return bigStr;  
}

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = 'happy';
// console.log(user);

user.hobby = 'skydiving';
// console.log(user);

user.premium = false;
// console.log(user);

// for (let elem of Object.keys(user)) {
//   console.log(`${elem}: ${user[elem]}`);
// }

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

let sum = 0;

if (Object.keys(salaries).length === 0) {
  console.log(0);
} else {
  for (let value of Object.values(salaries)) {
    sum += value;
  }
}

// console.log(sum);

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'




