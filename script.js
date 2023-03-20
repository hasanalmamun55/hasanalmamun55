'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2} and ${ing3}`);
  },
};
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }
// for (const [i, el] of restaurant.mainMenu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }
// const ingredients = [
//   prompt("Let's make a Pasta! Ingredient 1?"),
//   prompt("Let's make a Pasta! Ingredient 2?"),
//   prompt("Let's make a Pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// restaurant.orderDelivery({
//   time: '22.30',
//   address: 'Via del, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del, 21',
//   mainIndex: 2,
// });

// const [starter, mainCourse] = restaurant.order(1, 1);

// const { name, categories, mainMenu } = restaurant;
// const { name: newName, categories: newCategories, mainMenu: Menu } = restaurant;
// console.log(name, categories);
// console.log(newName, newCategories, Menu);

// console.log(openingHours);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log(open, close);
// console.log(o, c);

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const a = ['a', 'b', 1, 6, 'th', null];

// const reduce = a.reduce(
//   (acc, v) => {
//     if (typeof v === 'string') acc.string.push(v);
//     if (typeof v === 'number') acc.number = acc.number + v;
//     if (typeof v !== 'number' && typeof v !== 'string')
//       acc.other = acc.other + v;

//     return acc;
//   },
//   { string: [], number: 0, other: '' }
// );
// console.log(reduce);

// const Reverse = arr => {
//   // limit specifies the amount of Reverse actions
//   for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   return arr;
// };

// console.log(Reverse([2, 3, 9]));
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
//1
// const [players1, players2] = game.players;
// // console.log(players1);
// // console.log(players2);
// //2
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //3
// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// console.log(players1Final);
// //5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...player) {
//   console.log(player);
//   console.log(`${player.length} goal scored`);
// };

// printGoals('Milky', 'Mamun', 'Yeasin', 'Milky');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more lucy to win');

const dog = new Set(['Milky', 'Mamun', 'Milky', 'Protik']);

// console.log(dog);

// const bookings = [];
// const createBooking = function (flightName, flightTime = 1, price = 100) {
//   const booking = {
//     flightName,
//     flightTime,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('25BB');
// console.log(bookings);

const flight = 'LH23A';
const mamun = {
  name: 'Mamun Hasan',
  passport: 12345678,
};
const mamun2 = {
  name: 'Mamun Hasan',
  passport: 12345678,
};
// const checkIn = function (flightName, passenger) {
//   flightName = 'KL266';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 12345678) {
//     alert('check in');
//   } else 'wrong passport';
// };
// checkIn(flight, mamun);
// console.log(flight);
// console.log(mamun);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };
// newPassport(mamun);
// console.log(mamun);

const data = {
  name: 'John Doe',
  age: 35,
  email: 'john.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
  },
  phone_numbers: [
    {
      type: 'home',
      number: '555-1234',
    },
    {
      type: 'work',
      number: '555-5678',
    },
  ],
  employment_history: [
    {
      company: 'Acme Inc',
      position: 'Software Engineer',
      start_date: '2010-01-01',
      end_date: '2015-12-31',
    },
    {
      company: 'Beta Corp',
      position: 'Senior Software Engineer',
      start_date: '2016-01-01',
      end_date: null,
    },
  ],
  education_history: [
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      major: 'Computer Science',
      start_date: '2000-09-01',
      end_date: '2004-05-31',
    },
    {
      institution: 'Stanford University',
      degree: 'Master of Science',
      major: 'Computer Science',
      start_date: '2004-09-01',
      end_date: '2006-06-30',
    },
  ],
};

const orders = [
  {
    id: 'order-1',
    customer: 'Alice',
    items: [
      { id: 'item-1', name: 'Widget', price: 9.99, quantity: 2 },
      { id: 'item-2', name: 'Gizmo', price: 4.99, quantity: 3 },
    ],
  },
  {
    id: 'order-2',
    customer: 'Bob',
    items: [
      { id: 'item-3', name: 'Thingamajig', price: 14.99, quantity: 1 },
      { id: 'item-4', name: 'Whatchamacallit', price: 7.99, quantity: 2 },
    ],
  },
  {
    id: 'order-3',
    customer: 'Charlie',
    items: [
      { id: 'item-5', name: 'Doodad', price: 2.99, quantity: 5 },
      { id: 'item-6', name: 'Doohickey', price: 1.99, quantity: 10 },
    ],
  },
];

// orders.forEach(order => {
//   order.items.forEach(item => {
//     item.totalSell = Math.trunc(item.price * item.quantity);
//   });
// });
// console.log(orders);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Mamun');

// const greet2 = greeting2 => name2 => console.log(`${greeting2} ${name2}`);
// const greeterHey2 = greet2('Hey');
// greeterHey2('Mamun2');

// const funn = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} to ${name}`);
//   };
// };

// const faru = funn('Welcome')('Mamun');

const address = {
  name: 'Mamun',
  age: 23,
  address: 'Gazipur',
  details(name, address) {
    return console.log(
      `${name} is ${this.age} years old and leave in ${address}`
    );
  },
};

address.details('Mamun', 'Gazipur');

const address2 = {
  age: 40,
};
const newArr = ['Milky', 'Joshour'];
address.details.bind(address2, ...newArr);

address.fruits = 300;
address.count = function () {
  console.log(this);
  this.fruits++;
  console.log(this.fruits);
};
address.count();

const btn = document.querySelector('.this');

btn.addEventListener('click', address.count.bind(address));

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  quession: 'What is the most popular programing language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
  },
};
const polling = document.querySelector('.poll');
polling.addEventListener('click', poll.registerNewAnswer);
console.log(poll);
