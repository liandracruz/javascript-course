const country = 'Spain';
const continent = 'Europe';
let population = 48.35;
const isIsland = false;
const language = 'Spanish';

let halfPopulation = 48.35 / 2;
const finlandPopulation = 6;
const averagePopulation = 33;

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(country, continent, population, isIsland, language, halfPopulation, finlandPopulation > country, averagePopulation > country);
console.log(description)

if (population > 33.00) {
    console.log(`${country} population is ${population - 33.00} millions above the average`)
} else {
    console.log(`${country} population is ${33.00 - population} below the average`)
}