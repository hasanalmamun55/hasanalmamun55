'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// account4.movements.forEach(function (mov, i) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} : You have deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} : You have withdrew ${Math.abs(mov)}`);
//   }
// });
// console.log('              ====map===');
// account4.movements.map(function (mov, i) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} : You have deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} : You have withdrew ${Math.abs(mov)}`);
//   }
// });
const bio = [
  {
    name: 'Liton',
    title: 'Merchandising Supervisor',
    picture: 'Pic-1.jpeg',
  },
  {
    name: 'Anik',
    title: 'Assistant Merchandiser',
    picture: 'Pic-2.jpeg',
  },
  {
    name: 'Shemul Hasan',
    title: 'Merchandising Supervisor',
    picture: 'Pic-3.jpeg',
  },
  {
    name: 'Jahid',
    title: 'Assistant Merchandiser',
    picture: 'Pic-4.jpeg',
  },
  {
    name: 'Milky',
    title: 'Assistant Manager',
    picture: 'Pic-5.jpeg',
  },
  {
    name: 'Yeasin Ali',
    title: 'Assistant Manager',
    picture: 'Pic-6.jpeg',
  },
];

const personName = document.querySelector('.text-xl');
const personBio = document.querySelector('.text-base');
const btn = document.querySelector('.bg-blue-500');
const pictureField = document.querySelector('.w-full');

let currentIndex = 0;

personName.textContent = bio[0].name;
personBio.textContent = bio[0].title;
pictureField.src = bio[0].picture;

btn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % bio.length;
  const currentPerson = bio[currentIndex];
  pictureField.src = currentPerson.picture;
  personName.textContent = currentPerson.name;
  personBio.textContent = currentPerson.title;
});
console.log((0 + 1) % bio.length);
console.log((1 + 1) % bio.length);
console.log((2 + 1) % bio.length);
console.log((3 + 1) % bio.length);
console.log((4 + 1) % bio.length);
console.log((5 + 1) % bio.length);
//comments
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}:You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}:You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`);
//   }
// });

///////////////////////////////////////////////
// const slice = [2, 3, 5, 6, 4, 7];
// console.log(slice.slice(2, 4));
// console.log(slice.slice(5));
// console.log(slice.slice(-1));
// console.log(slice.slice(-3));
// console.log(slice.splice(2, 1));
// console.log(slice);

// console.log(slice.join('-'));
// let todoList = [];

// function addTodo(todoItem) {
//   todoList.push(todoItem);
// }

// function deleteTodo(todoItem) {
//   let index = todoList.indexOf(todoItem);
//   todoList.splice(index, 1);
// }

// function displayTodos() {
//   console.log(todoList);
// }

// function toggleCompleted(todoItem) {
//   let index = todoList.indexOf(todoItem);
//   todoList[index].completed = !todoList[index].completed;
// }

// function displayCompleted() {
//   let completedTodos = todoList.filter(todo => todo.completed);
//   console.log(completedTodos);
// }

// function displayIncomplete() {
//   let incompleteTodos = todoList.filter(todo => !todo.completed);
//   console.log(incompleteTodos);
// }

// // Example usage
// addTodo({
//   text: 'Learn JavaScript',
//   completed: false,
// });
// addTodo({
//   text: 'Build a todo app',
//   completed: false,
// });
// toggleCompleted(todoList[0]);
// displayCompleted(); // logs [{ text: "Learn JavaScript", completed: true }]
// displayIncomplete(); // logs [{ text: "Build a todo app", completed: false }]
// console.log(todoList);
// console.dir(todoList);
