/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = 'Jonas';
console.log(firstName);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Lia');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(year)
*/

/*
let age = 30;
age = 31;

const birthYear = 1994;
*/


/*
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Lia';
const lastName = 'Cruz';
console.log(firstName + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);
*/

/*
const now = 2037;
const ageJonas = now - 1991;

const ageSarah = now - 2018;

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonas);

console.log(`String
with
multiple
lines`);
*/

const age = 19;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Sarah can start driving`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah in too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2002;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)

