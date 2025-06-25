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
  let found = false;

  for (let elem of array) {
    if (elem === name) {
      found = true; 
      break;
    }
  };

  if (found) {
    alert(`Welcome, ${name}!`);
  } else {
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

  return sum;
}

console.log( caclculateAverage(5, 'afs', 12));