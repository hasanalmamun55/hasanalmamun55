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
  // openingHours,

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
// const ingredients = [
//   prompt("Let's make a Pasta! Ingredient 1?"),
//   prompt("Let's make a Pasta! Ingredient 2?"),
//   prompt("Let's make a Pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

restaurant.orderDelivery({
  time: '22.30',
  address: 'Via del, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del, 21',
  mainIndex: 2,
});

const [starter, mainCourse] = restaurant.order(1, 1);

const { name, categories, mainMenu } = restaurant;
const { name: newName, categories: newCategories, mainMenu: Menu } = restaurant;
console.log(name, categories);
console.log(newName, newCategories, Menu);

console.log(openingHours);

const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(open, close);
console.log(o, c);

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const a = ['a', 'b', 1, 6, 'th', null];

const reduce = a.reduce(
  (acc, v) => {
    if (typeof v === 'string') acc.string.push(v);
    if (typeof v === 'number') acc.number = acc.number + v;
    if (typeof v !== 'number' && typeof v !== 'string')
      acc.other = acc.other + v;

    return acc;
  },
  { string: [], number: 0, other: '' }
);
console.log(reduce);

const Reverse = arr => {
  // limit specifies the amount of Reverse actions
  for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

console.log(Reverse([2, 3, 9]));
