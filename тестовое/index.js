"use strict";

// 1. Написать фунукцию
// которая будет находить
// максимальное значение в массиве чисел
// function getMax(arr) {
//     let max = arr[0];
//     for (let elem of arr) {
//         if(elem > max) max = elem;
//     }
//     return max;
//   }

// examples:
// getMax([22, 4, 18, -1, 111, 100, 48]);
// getMax([1, 1, 1, 1]);
// getMax([0]);

// 2.Есть история транзакций клиента банка за последний день.
// Нужно реализовать функционал - нахождения транзакций,
// которые были больше определенной суммы.
// Список транзакций это массив чисел
//    ТРЕБОВАНИЯ:
//    Фукция getBigTransactions принимает массив всех транзакций клиента
//    и должна вернуть массив транзакций, которые были больше заданной суммы
//    если таких транзакций не найдено - возвращаем пустой массив

// function getBigTransactions(transactions, amount) {
//   let bigTransactions = [];
//   for (let elem of transactions) {
//       if (elem > amount) bigTransactions.push(elem);
//   }
//   return bigTransactions;
// }

// 3.Задан массив чисел. Числа в массиве могут повторяться сколько угодно раз
// Написать функцию которая из такого массива вернет массив уникальных чисел

// function getUniques(arr) {
//     let uniquesMeaning = [...new Set(arr)];
//     return uniquesMeaning;
// }

// 4.Задан массив транзакций.
// Транзакции с положительной суммой это доходы,
// с отрицательной - расходы.
// Задача - посчитать итоговый баланс по всем транзакциям

// function getTotalBalance(transactions) {
//   let amount = 0;
//   for(let element of transactions){
//     amount += element.amount
//   }
//  return amount;
//   let ollTransaction = dayTransactions.map((transactions) => {
//       return transactions.amount
//   });

//   let sumTransaction = ollTransaction.reduce((prevValue, currentElem) => {
//       return prevValue + currentElem;
//   }, 0 );
//   return sumTransaction;
//  }

//   const dayTransactions = [
//     { id: 1001, amount: 60 },
//     { id: 1002, amount: -160 },
//     { id: 1003, amount: 2000 },
//     { id: 1004, amount: -500 },
//     { id: 1005, amount: 136 },
//   ];

// getTotalBalance(dayTransactions);

// let incom = 17000;
// let rent = 7000;
// let otherExpenses = 6000;
// let balance = incom - (rent + otherExpenses);
// console.log(balance);

// const income = 1000;

// const rent = 400;
// let otherExpenses = 500;

// let balance = income - rent - otherExpenses;

// console.log(balance);

// // ---------------

// let freelanceIncome = 200;

// freelanceIncome += freelanceIncome;
// console.log(freelanceIncome);

// balance += freelanceIncome;
// console.log(balance);

// balance /= 2;
// console.log(balance);

// const userName = 'Andrey';
// const currentDay = 'Monday';

// let welcomeMessage = 'Hello, ' + userName + '! It is ' + currentDay;
// console.log(welcomeMessage);

// const students = ['Andrey', 'Denis', 'Alex', 'Nastya', 'Ninja', 'Skywoker', 'Joda', 'Leo'];

// console.log(students[2]);
// console.log(students.length);

// function printArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i])
//  }
// }

// printArray([1, 2, 3, 4, 5,])

// function printArrayForOf(arr) {
//   for (let value of arr) {
//     console.log(value)
//   }
// }

// printArrayForOf([1, 2, 3, 4, 5, true, 0])

// my balance
// const balance = 15600;

// // describe some product
// const id = 1001;
// let productName = 'IPhone 12 Pro Max';
// let isAvailable = true;
// let price = 20000;
// const color = 'Silver';
// let storeAddress = null;

// /**
//  * Может ли пользователь купить конкретный товар? Выведи результат проверки в консоль
//  */

// if (price <= balance) {
//   console.log(`You have enough money to buy ${productName}`)
// } else {
//   console.log(`You do not have enough money to buy ${productName}`)
// }

// /**
//  * Есть ли товар в наличии? Выведи результат проверки в консоль
//  */

//  if (isAvailable === true) {
//   console.log(`Product ${productName} is available now`)
// }

// /**
//  * Является ли цвет выбранного товара Silver. Выведи результат проверки в консоль
//  */

//  if (color === 'Silver') {
//   console.log('Yes')
// } else {
// console.log('No')
// }

// //my balance
// const balance = 21600;

// // describe some product
// const id = 1001;
// let productName = 'IPhone 12 Pro Max';
// let isAvailable = true;
// let price = 20000;
// const color = 'Silver';
// let storeAddress = 'Kyiv, Melnichenka st';

// if (price <= balance && isAvailable === true) {
//     console.log(true);
// } else {
//   console.log(false);
// }

// if (isAvailable === true && storeAddress === 'Kyiv, Melnichenka st') {
//    console.log('You can buy this product in the store');
// }

// if (price <= balance && color === 'Silver') {
//   console.log('You have enough money to buy product in silver color');
// }

// if ((balance - price) > 1000) {
//   console.log('You have enough money to buy this product');
// }

// let studentsCount = 0;

// studentsCount += 10;
// console.log(studentsCount);

// studentsCount -= 4;
// console.log(studentsCount);

// studentsCount *= 2;
// console.log(studentsCount);

// studentsCount /= 5;
// console.log(studentsCount);

// const arr = [1, 2, 3, 4, 5];

// let newArr = arr.push(111);
// console.log(newArr);
// console.log(arr);

// /* pop - удалит из массива последний элемент и вернет его */

// /**
//  * С помощью метода pop удали последний элемент массива students
//  * Выведи в консоль результат работы метода pop, а так же массив students после выполнения pop
//  * */

// const students = ["Alex", "Ann", "Jaz", "Viktor"];

// let newStudents = arr.pop();
// console.log(newStudents);
// console.log(arr);

// /* shift - удалит из массива первый элемент и вернет его */

// /**
//  * С помощью метода shift удали первый элемент массива points
//  * Выведи в консоль результат работы метода shift, а так же массив points после выполнения shift
//  * */

// const points = [11, 24, 37, 40, 7];

// let newPoints = points.shift();
// console.log(newPoints);
// console.log(points);

// /* unshift - добавит элемент в начало массива */

// /**
//  * С помощью метода unshift добавь число 22 в начало массива ages
//  * Выведи в консоль результат работы метода unshift, а так же массив ages после выполнения unshift
//  * */

// const ages = [18, 25, 31, 29, 50, 11, 1000000];

// let newAges = ages.unshift(22);
// console.log(newAges);
// console.log(ages);

// const numbers = [5, 0, 8, 10, -4, 50, 220];

// console.log(numbers.includes(0));
// console.log(numbers.includes(100));

// function sayWelcome() {
//   let message = 'Hello, user! Have a good day!';
//   console.log(message);
// }

// sayWelcome();

// function sayWelcome(userName, currentDay) {
//   console.log(`Hello, ${userName}! Have a good ${currentDay}`);
// }

// sayWelcome('Andrei', 'monday');
// sayWelcome('Aleksandr', 'wednesday');
// sayWelcome('Ivan', 'friday');

// function getWelcomeMessage(userName, currentDay) {
//   let message = `Hello, ${userName}! Have a good ${currentDay}!`;
//   console.log(message);
//   return message;
// }

// getWelcomeMessage('Grisha', 'monday');
// getWelcomeMessage('Aleksandr', 'wednesday');
// getWelcomeMessage('Ivan', 'friday');

// function min(firstNumber, secondNumber) {
//   let minNumber;
//   if (firstNumber < secondNumber) {
//     minNumber = firstNumber;
//   } else {
//     minNumber = secondNumber;
//   }
//   console.log(minNumber);
//   return minNumber;
// }

// min(100, 40);
// min(30, 50);

// function min(firstNumber, secondNumber) {
//   let minNumber;
//   let maxNumber;
//   if (firstNumber < secondNumber) {
//     minNumber = firstNumber;
//     maxNumber = secondNumber;
//   } else {
//     minNumber = secondNumber;
//     maxNumber = firstNumber;
//   }
//   console.log(minNumber);
//   console.log(maxNumber);
//   return minNumber;
//   return maxNumber;
// }

// min(100, 40);
// min(30, 50);

// let min = (firstNumber, secondNumber) => {
//   let minNumber;
//   let maxNumber;
//   if (firstNumber < secondNumber) {
//     minNumber = firstNumber;
//     maxNumber = secondNumber;
//   } else {
//     minNumber = secondNumber;
//     maxNumber = firstNumber;
//   }
//   console.log(minNumber);
//   console.log(maxNumber);
//   return minNumber;
//   return maxNumber;
// }

// min(100, 40);
// min(30, 50);

// function countArea(chickens, caws, pigs) {
//   let totalArea = chickens * 0.2 + caws * 1.5 + pigs * 0.5;

//   return console.log(totalArea);
// }

// countArea(10, 10, 10); // ===> 22
// countArea(10, 0, 1); // ===> 2.5
// countArea(6, 3, 5); // ===> 8.2

// function countCommision(amount, currency) {
//   let commission;
//   if (currency === 'UAH' && amount < 1000) {
//     commission = amount / 100 * 2;
//   } else if (currency === 'UAH' && amount > 1000) {
//     commission = amount / 100;
//   } else if (currency === 'USD' && amount < 5000) {
//     commission = amount / 100 * 0.5;
//   } else if (currency === 'USD' && amount > 5000) {
//     commission = amount / 100 * 0.25;
//   } else if (currency === 'EUR' && amount < 3000) {
//     commission = amount / 100 * 0.75;
//   } else if (currency === 'EUR' && amount > 3000) {
//     commission = 0;
//   }

//   console.log(commission);
//   return commission;
// }

// // examples
// countCommision(20000, 'USD'); // ===> 50
// countCommision(500, 'UAH'); // ===> 10
// countCommision(2000, 'UAH'); // ===> 20

// let countAreaArrow = (chickens, caws, pigs) => chickens * 0.2 + caws * 1.5 + pigs * 0.5;
// // examples
// console.log(countAreaArrow(10, 10, 10)); // ===> 22
// console.log(countAreaArrow(10, 0, 1)); // ===> 2.5
// console.log(countAreaArrow(6, 3, 5)); // ===> 8.2

// function convertMills(minutes, seconds, mills) {
//   let totalTime = ((minutes * 60 + seconds) * 1000) + mills;
//   console.log(totalTime);
//   return totalTime;
//  }

//  // examples
//  convertMills(1, 2, 100); // ===> 62100
//  convertMills(0, 2, 100); // ===> 2100
//  convertMills(5, 11, 230); // ===> 311230

// function canBuyProduct(price, balance) {
//   let possibility;
//   if (balance - price >= 500) {
//     possibility = true;
//   } else {
//     possibility = false;
//   }
//   console.log(possibility);
//   return possibility;
// }

// // examples
// canBuyProduct(100, 600); // ===> true
// canBuyProduct(150, 600); // ===> false
// canBuyProduct(1000, 1290); // ===> false

// function getMax(first, second, third) {
//   let maxNum;
//   if (first > second && first > third) {
//     maxNum = first;
//   } else if (second > first && second > third) {
//     maxNum = second;
//   } else if (third > first && third > second) {
//     maxNum = third;
//   } else {
//     maxNum = false;
//   }
//   console.log(maxNum);
//   return maxNum;
// }

// // examples
// getMax(10, 20, 30); // ===> 30
// getMax(100, 20, 30); // ===> 100
// getMax(0, 0, 0); // ===> 0

// function printNumbers(num) {
//   for (let i = 0; i <= num; i += 1) {
//     console.log(i);
//   };
// }

// printNumbers(9);

// function printNumbers(num) {
//   let i = 0;
//   while (i <= num) {
//     console.log(i);
//     i++
//   }
// }

// printNumbers(9)

// function sumOfMillions() {
//   let i = 0;
//   let num = 0;
//   while (i <= 10000000) {
//     num = num + i;
//     i++;
//   }
//   console.log(num);
//   return num;
// }

// sumOfMillions();

// function factorial(num) {
//   let i = 1;
//   let factorial = 1;
//   while (i <= num) {
//     factorial = factorial * i;
//     i++;
//   }
//   console.log(factorial);
//   return factorial;
// }

// factorial(3); // ===> 6
// factorial(5); // ===> 120
// factorial(0); // ===> 1

// function sum(from, to) {
//   let num = 0;
//     for (let i = from; i <= to; i += 1) {
//       num = num + i;
//     };
//   console.log(num);
//   return num;
// }

// // examples
// sum(5, 10); // ===> 45
// sum(11, 11); // ===> 11

// function sum(from, to) {
//   let num = 0;
//   for (let i = from; i <= to; i += 1) {
//     num = num + i;
//   };
// return num;
// }

// /**
// * @param {number} firstFrom
// * @param {number} firstTo
// * @param {number} secondFrom
// * @param {number} secondTo
// * @return {boolean}
// */
// function compareSums(firstFrom, firstTo, secondFrom, secondTo){
// let comparison;
// let firstSum = sum(firstFrom, firstTo);
// let secondSum = sum(secondFrom, secondTo);
// if (firstSum == secondSum) {
//   comparison = true;
// } else {
//   comparison = false;
// }
// return comparison;
// }

// // examples
// sum(5, 10); // ===> 45
// sum(11, 11); // ===> 11

// compareSums(5, 10, 5, 10); // ===> false
// compareSums(5, 15, 3, 5); // ===> true
// compareSums(-2, 5, 5, 9); // ===> false

// function sendEmail() {
//   console.log('Gromcode party invitation was sent!');
// }

// function sendEmailList() {
//   for (let i = 0; i < 30; i++) {
//     sendEmail();
//   }
// }

// sendEmailList()

// function sum(from, to) {
//   let result = 0;

//   for (let i = from; i <= to; i++) {
//     result += i;
//   }

//   return result;
// }

// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   return (firstFrom, firstTo) > sum(secondFrom, secondTo);
// }

// console.log(sum(2, 10));
// console.log(compareSums(1, 4, 4, 6)) ;

// * @param {number[]} points
// * @param {number} homeTeam
// * @param {number} awayTeam
// * @param {string} result
// * @return {number[]}

// function addPoints(points, homeTeam, awayTeam, result) {
//   let newPoints = points.slice();

//   if (result === "win") {
//     newPoints[homeTeam - 1] += 3;
//   } else if (result === "lose") {
//     newPoints[awayTeam - 1] += 3;
//   } else if (result === "draw") {
//     newPoints [homeTeam - 1] += 1;
//     newPoints [awayTeam - 1] += 1;
//   }
//   console.log(newPoints);
// }

// // examples
// addPoints([8, 6, 4, 1], 1, 2, "win"); // returns ==> [11, 6, 4, 1]
// addPoints([18, 15, 8, 2, 1, 0], 1, 4, "lose"); // returns ==> [18, 15, 8, 5, 1, 0]
// addPoints([18, 15, 8, 2, 1, 0], 5, 6, "draw"); // returns ==> [18, 15, 8, 2, 2, 1]

// function sendEmail(userName) {
//   console.log('Gromcode party invitation was sent to ' + userName + '!');
// }

// /**
//  * @param {string[]} userNames
//  * @return {undefined}
//  */
// function sendEmailList(userNames) {
//   for (let i = 0; i < userNames.length; i++) {
//     sendEmail(userNames[i]);
//   }
// }

// sendEmailList(['ivan', 'vasili', 'sergei', 'nikolai', 'anna'])

// /**
//  * @param {number[]} sales
//  * @return {number}
// */
//  function getRevenue(sales) {
//    let total = 0;
//    for (let value of sales) {
//      total += value;
//    }
//    return total;
//  }

// /**
//  * @param {number[]} sales
//  * @param {number} plannedRevenue
//  * @return {boolean}
//  */
// function checkRevenue(sales, plannedRevenue) {
//   return console.log(getRevenue(sales) >= plannedRevenue);
// }

// // examples
// getRevenue([25, 40, 10, 58]); // returns ==> 133
// checkRevenue([25, 40, 10, 58], 100); // returns ==> true

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
//  function reverseArray(arr) {
//   let newArr = arr.slice();
//   return console.log(newArr.reverse());
// }

// // examples
// reverseArray([11, 4, 8, 3]); // ==> [3, 8, 4, 11]
// reverseArray([]); // ==> []
// reverseArray([100, 50]); // ==> [50, 100]

// /**
//  * @param {array} arr
//  * @param {number} numberOfElements
//  * @return {array}
//  */
//  const getSubArray = (arr, numberOfElements) => {
//   return arr.slice(0, numberOfElements);
// }
// // examples
// getSubArray([11, 4, 8, 3], 2); // ==> [11, 4]
// getSubArray([1, 2, 3, 4, 5], 3); // ==> [1, 2, 3]
// getSubArray(['some string', 'hello', 'I am happy'], 1); // ==> ['some string']

// function isLetter(c) {
//   return c.toLowerCase() !== c.toUpperCase();
// }

// /**
//  * @param {string} str
//  * @return {boolean}
//  */
// function isValidWord(str) {
//   let strArr = str.split('');

//   for (let i = 0; i < strArr.length; i++) {
//     if (!isLetter(strArr[i]) || strArr.length < 2) {
//       return false;
//     }
//   }
//   return true;
// }

// // examples
// isLetter('h'); // ==> true
// isLetter('W'); // ==> true
// isLetter('@'); // ==> false
// isLetter('1'); // ==> false

// console.log(isValidWord('o')); // ==> true
// console.log(isValidWord('Hello')); // ==> true
// console.log(isValidWord('Test@')); // ==> false
// console.log(isValidWord('someName1')); // ==> false
// console.log(isValidWord('It is me')); // ==> false

// /**
//  * @param {string} str
//  * @return {string}
//  */
//  function capitalize(str) {
//   let newStr = str[0].toUpperCase() + str.slice(1);
//   console.log(newStr)
// }

// // examples
// capitalize('cake'); // ==> Cake
// capitalize('Monday'); // ==> Monday
// capitalize('hello, it is me'); // ==> Hello, it is me

// /**
//  * @param {string} str
//  * @return {string}
//  */
//  function getAbbreviation(str) {
//    let abbrevition = "";
//    let newArrStr = str.split(" ");
//    for (let i of newArrStr) {
//      if (i.length > 2) {
//        abbrevition += i[0].toUpperCase();
//      }
//    }
//    return abbrevition;
//  }

// // examples
// getAbbreviation('some company name'); // ===> SCN
// getAbbreviation('Union of Soviet Socialist Republics'); // ===> USSR
// getAbbreviation('United States'); // ===> US

// function camelCase(str) {
//   let newStrArr = str.split(" ");
//   let cCase = newStrArr[0].toLowerCase();
//   newStrArr = newStrArr.slice(1)
//   for (let i of newStrArr) {
//     cCase += i[0].toUpperCase() + i.slice(1);
//   }
//    console.log(cCase)
// }

// // examples
// camelCase('Some function name'); // ===> someFunctionName
// camelCase('get message'); // ===> getMessage
// camelCase('render tasks list'); // ===> renderTasksList

// let product = {
//   id: 3412,
//   name: 'Lg ES',
//   isAvailable: true,
//   price: 360,
//   color: 'red',
//   storeAddress: null,
// }

// let productName = product.name;
// let toreAddress = product.storeAddress;
// product.deliveryOptions = ['Новая почта', 'Укр почта', 'Самовывоз'];

// console.log(productName);
// console.log(toreAddress);
// console.log(product);

// /**
//  * @param {object} obj
//  * @return {string[]}
//  */

//  let obj = {
//   id: 3412,
//   name: 'Lg ES',
//   isAvailable: true,
//   price: 360,
//   color: 'red',
//   storeAddress: null,
// }

//  function getKeys(obj) {
//   const keys = Object.keys(obj);
//   return console.log(keys);
// }

// /**
//  * @param {object} obj
//  * @return {array}
//  */
// function getValues(obj) {
//  const values = Object.values(obj);
//  return console.log(values);
// }

// getKeys(obj)
// getValues(obj)

// function copyObj(obj) {
//   let newObj = {};

//   for (const key in obj) {
//     newObj[key] = obj[key]
//   }
//   return newObj;
// }

//  * @param {object[]} players
//  * @return {object[]}
//
//  function getGoalsStat(players) {
//    let goalsStat = [];
//    let object;
//    for (const i in players) {
//      object = {
//        name: players[i].name,
//        goals: players[i].goals,
//        team: players[i].team,
//      };
//      goalsStat.push(object);
//    }
//    console.log(goalsStat);
//  }

//  // examples
//  const players = [
//    {
//      name: 'Jason Mount',
//      birthdate: '19.12.1993',
//      country: 'Deutschland',
//      number: '21',
//      team: 'Manchester United',
//      position: 'MF',
//      goals: 4,
//    },
//    {
//      name: 'Jason Mount',
//      birthdate: '01.01.2001',
//      country: 'Deutschland',
//      number: '16',
//      team: 'Manchester United',
//      position: 'MF',
//      goals: 0,
//    },
//    {
//      name: 'Finne Bard',
//      birthdate: '13.02.1995',
//      country: 'Norwegen',
//      number: '26',
//      position: 'FW',
//      team: 'Fulham United',
//      goals: 1,
//    },
//    {
//      name: 'Gerhardt Yannick',
//      birthdate: '13.03.1994',
//      country: 'Deutschland',
//      number: 31,
//      position: 'MF',
//      team: 'Liverpool',
//      goals: 8,
//    },
//  ];

//  getGoalsStat(players);
//  // ===>
//  // [
//  //   { name: 'Jason Mount', team: 'Manchester United', goals: 4 },
//  //   { name: 'Jason Mount, team: 'Manchester United', goals: 0 },
//  //   { name: 'Finne Bard', team: 'Fulham United', goals: 1 },
//  //   { name: 'Gerhardt Yannick', team: 'Liverpool', goals: 8 },
//  // ];

// /**
//  * @param {object[]} users
//  * @return {object}
//  */
// function usersCountByCity(users) {
//   let countUsers = {
//     Kyiv: 0,
//     Odesa: 0,
//     Lviv: 0,
//   };
//   for (const index of users) {
//     if (index["city"] === "Kyiv") {
//       countUsers["Kyiv"] += 1;
//     } else if (index["city"] === "Lviv") {
//       countUsers["Odesa"] += 1;
//     } else if (index["city"] === "Odesa") {
//       countUsers["Lviv"] += 1;
//     }
//   }
//   console.log(countUsers);
// }

// // examples
// const users = [
//   {
//     id: 888,
//     name: "Denis",
//     age: 44,
//     city: "Kyiv",
//   },
//   {
//     id: 333,
//     name: "Alex",
//     age: 33,
//     city: "Lviv",
//   },
//   {
//     id: 392,
//     name: "Nastya",
//     age: 22,
//     city: "Kyiv",
//   },
//   {
//     id: 123,
//     name: "Violetta",
//     age: 15,
//     city: "Odesa",
//   },
//   {
//     id: 640,
//     name: "Mykola",
//     age: 31,
//     city: "Lviv",
//   },
// ];

// usersCountByCity(users); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }


// /**
//  * @param {object[]} users
//  * @param  {string} name
//  * @return {object[]}
//  */
// function findUsersByName(users, name) {
//   // put your code here
// }

// /**
//  * @param {object[]} users
//  * @param  {string} str
//  * @return {object[]}
//  */
// function findUsersByString(users, str) {
//   // put your code here
// }

// // examples
// const users = [
//   {
//     id: 101,
//     name: 'Denis',
//     city: 'Kyiv',
//   },
//   {
//     id: 102,
//     name: 'Alexandr',
//     city: 'Lviv',
//   },
//   {
//     id: 103,
//     name: 'Nastya',
//     city: 'Kyiv',
//   },
//   {
//     id: 104,
//     name: 'Violetta',
//     city: 'Odesa',
//   },
//   {
//     id: 105,
//     name: 'Mykola',
//     city: 'Lviv',
//   },
//   {
//     id: 106,
//     name: 'Denis',
//     city: 'Lviv',
//   },
//   {
//     id: 107,
//     name: 'Andrey',
//     city: 'Odesa',
//   },
//   {
//     id: 108,
//     name: 'Alexey',
//     city: 'Dnipro',
//   },
// ];

// findUsersByName(users, 'Denis'); // ===> [ { id: 101, name: 'Denis', city: 'Kyiv' }, { id: 106, name: 'Denis', city: 'Lviv' } ]
// findUsersByName(users, 'Andrey'); // ===> [ { id: 107, name: 'Andrey', city: 'Odesa' } ]
// findUsersByName(users, 'Anna'); // ===> [ ]

// findUsersByString(users, 'Al'); // ===> [ { id: 102, name: 'Alexandr', city: 'Lviv' }, { id: 108, name: 'Alexey', city: 'Dnipro' } ]
// findUsersByString(users, 't'); // ===> [ { id: 103, name: 'Nastya', city: 'Kyiv' }, { id: 104, name: 'Violetta', city: 'Odesa' } ]
// findUsersByString(users, 'Vik'); // ===> [ ]

// findUsersByString(users, 'm'); // ===> [ ]
// // explanation: letter 'm' is not included in any user name, 'Mykola' includes 'M' not 'm', so it is not added to the result
