   // start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);

age = 200;
console.log(age, age2);

let name1 = 'Igor';
let name2 = name1;
console.log(name1, name2);

name1 = 'Hloe';
console.log(name1, name2);
// строки, числа и булевы значения не изменяются, так как второй переменной присвоено значение, до изменения первой переменной,то есть значение присваивается в моменте

    // Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
const team = players;

console.log(players, team);
    // You might think we can just do something like this:
team[3] = 'Lux';
// здесь значение players также поменяется, так как team это ссылка на массив players (по сути у одного и того же массива теперь просто две ссылки на него) и при изменении его мы изменяем сам массив
    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
const team2 = players.slice(); // метод возвращает копию (часть) исходного массива в виде нового массива
    // one way

    // or create a new array and concat the old one in
const team3 = [].concat(players); // возвращает новый массив, на котором он был вызван ([] если пустой) и складывает его с соединяемым массивом
    // or use the new ES6 Spread
const team4 = [...players];
team4 [3] = 'heeee';
console.log(team4);

const team5 = Array.from(team4); // создает новый экзмепляр массива, также не меняя исходный
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

    // and think we make a copy:
const captain = person;
captain.number = 99; // также как ис массивами - две ссылки на один объект
    // how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 100 }); // присваивает свойства исходного объекта целевому объекту, плюс может добавить свои как здесь number

    // We will hopefully soon see the object ...spread
const cap3 = {...person}; // также как в примере с массивом

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}

const dev2 = JSON.parse(JSON.stringify(wes)); // используется для глубокого клонирования объектов с несколькими уровнями вложенности
console.log(dev2);
