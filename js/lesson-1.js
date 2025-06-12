// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

function checkNumber() {
  let number = Number(prompt('Введіть число'));

  if (number === 10) {
    alert('Вірно');
  } else {
    alert('Не вірно');
  }
  console.log(number)
}

// checkNumber();

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min = Math.floor(Math.random() * (59 - 0) + 0);

function checkNumber2() {
  if (min <= 15) {
    alert(`${min} входить в першу чверть`);
  } else if (min > 15 && min <= 30) {
    alert(`${min} входить в другу чверть`);
  } else if (min > 30 && min <= 45) {
    alert(`${min} входить в третю чверть`);
  } else if (min > 45 && min < 60) {
    alert(`${min} входить в четврету чверть`)
  } else {
    alert('Число не валідне');
  };
}

// checkNumber2()

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.


function getSeasonByNumber() {
  let num = prompt('Введіть значення від 1 до 4');
  let result;

  switch (num) {
    case '1':
      result = "зима";
      break;
    case '2':
      result = "весна";
      break;
    case '3':
      result = "літо";
      break;
    case '4':
      result = "осінь";
      break;
    default:
      result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
      break;
  }

  console.log(result);
}

// getSeasonByNumber()

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

function formatMinutesToTime() {
  let minut = Math.floor(Number(prompt('Введіть кількість хвилин')));
  let hours = Math.floor(minut / 60);
  let minutes = minut % 60;
  let formattedHours = String(hours).padStart(2, '0');
  let formattedMinutes = String(minutes).padStart(2, '0');

  console.log(`${formattedHours}:${formattedMinutes}`);
}

// formatMinutesToTime()

// Завдання 5:

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// logIn();

function logIn() {
  const login = prompt("Введіть логін");

  if (login === null || login === "") {
    alert("Скасовано");
  } else if (login === "Адмін") {
    const password = prompt("Введіть пароль");

    if (password === null || password === "") {
      alert("Скасовано");
    } else if (password === "Я головний") {
      alert("Добрий день!");
    } else {
      alert("Невірний пароль!");
    }
  } else {
    alert("Я вас не знаю");
  }

  console.log(`Введено логін: ${login}`);
}

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// logNumbersToTwenty(20);

function logNumbersToTwenty(num) {
  let i = 0;

  while (i <= num) {
    console.log(i);
    i++;
  }
}

// EX 7
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// console.log(getNumbers(0, 20));

function getNumbers(min, max) {
  let sum = 0;

  for (; max >= min; max--){
    if (max % 2 === 0) {
      sum += max;
    }
  }
  return sum;
}

// Ex 8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

console.log(min(10,20));

function min(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Not a number!';
  } else if(a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else {
    return 'числа одинакові';
  }
}

