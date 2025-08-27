/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive');
*/

/*
function logger() {
    console.log('My name is Liandra');
} //criating the function

logger(); //calling the function

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; 
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1997);
console.log(age2);
*/

/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(2002, 'Liandra'));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges;`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
}

console.log(yearsUntilRetirement(2002, 'Liandra'));
console.log(yearsUntilRetirement(1945, 'John'));
*/

/*
const friend1 = 'Michael';
const friend2 = 'Stephen';
const friend3 = 'Peter';

const friends = ['Michael', 'Stephen', 'Peter'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Liandra';
const liandra = [firstName, 'Luiza', 'da Cruz',2037 - 2002, friends];

console.log(liandra);

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1997, 1998, 2001, 2002];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [
    calcAge(years[0]), 
    calcAge(years[1]), 
    calcAge(years[years.length - 1])
];

console.log(ages);
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
*/

/*
const liandra = {
    fistName: 'Liandra',
    lastName: 'da Cruz',
    age: 2037 - 2002,
    job: 'Student',
    favoriteSubjects: ['History', 'Sociology', 'Philosophy', 'Art']
};
*/

/*
const liandra = {
    firstName: 'Liandra',
    lastName: 'da Cruz',
    age: 2037 - 2002,
    job: 'Student',
    favoriteSubjects: ['History', 'Sociology', 'Philosophy', 'Art']
};

console.log(liandra);

console.log(liandra.lastName);
console.log(liandra['lastName']);

const nameKey = 'Name';
console.log(liandra['first' + nameKey]);
console.log(liandra['last' + nameKey]);

const interestedIn = prompt('What do you want to know about me? Choose between fistName, lastName, age, job, and favoriteSubjects');
console.log(liandra[interestedIn]);

if (liandra[interestedIn]) {
    console.log(liandra[interestedIn]);
} else {
    console.log('Wrong request! Choose between fistName, lastName, age, job, and favoriteSubjects');
}

liandra.location = 'Brazil';
liandra['favoriteColor'] = 'Green';
console.log(liandra);

console.log(`${liandra.firstName} has ${liandra.favoriteSubjects.length} favorite subjects, and her favorite subject is ${liandra.favoriteSubjects[3]}.`);
*/

/*
const liandra = {
    firstName: 'Liandra',
    lastName: 'da Cruz',
    birthYear: 2002,
    job: 'Student',
    favoriteSubjects: ['History', 'Sociology', 'Philosophy', 'Art'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year-old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};

console.log(liandra.calcAge());

console.log(liandra.age);
console.log(liandra.age);
console.log(liandra.age);

console.log(liandra.getSummary());
*/

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

/*
for(let rep = 1; rep <= 10; rep++ ) { //or rep = rep + 1
    console.log(`Lifting weights repetition ${rep}`);
};
*/

/*
const liandraArray = [
    'Liandra',
    'da Cruz',
    2037 - 2002,
    'Student',
    ['History', 'Philosophy', 'Sociology', 'Art'],
];

const types = [];

//Starting with the 0 because arrays are 0 based
for (let i = 0; i < liandraArray.length; i++) {
    console.log(liandraArray[i], typeof liandraArray[i]);

    //types[i] = typeof liandraArray[i];

    types.push(typeof liandraArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


console.log('---ONLY STRINGS---')
for(let i = 0; i < liandraArray.length; i++) {
    if(typeof liandraArray[i] !== 'string') continue;

    console.log(liandraArray[i], typeof liandraArray[i]);
}

console.log('---ONLY NUMBERS---');
for(let i = 0; i < liandraArray.length; i++) {
    if(typeof liandraArray[i] === 'number') break;

    console.log(liandraArray[i], typeof liandraArray[i]);
}
*/

/*
const liandra = [
    'Liandra',
    'da Cruz',
    2037 - 2002,
    'Student',
    ['History', 'Philosophy', 'Sociology', 'Art'],
    true
];

for (let i = liandra.length - 1; i >= 0; i--) {
    console.log(i, liandra[i]);
}

for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--------------- Starting exercise ${exercise}`);

    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: lifiting wheight repition ${rep}`);
    }
}
*/

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifiting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep++
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is ended');
}