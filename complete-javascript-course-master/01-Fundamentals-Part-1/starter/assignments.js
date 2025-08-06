const country = 'Spain';
const continent = 'Europe';
let population = 48.35;
const isIsland = false;
const language = 'spanish';

let halfPopulation = 48.35 / 2;
const finlandPopulation = 6;
const averagePopulation = 33;

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(country, continent, population, isIsland, language, halfPopulation, finlandPopulation > country, averagePopulation > country);
console.log(description)

if (population > 33.00) {
    console.log(`${country} population is ${population - 33.00} millions above the average`);
} else {
    console.log(`${country} population is ${33.00 - population} below the average`);
}

/*
const numNeighbours = Number(prompt('How many neighbour contries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border!');
} else {
    console.log('No borders');
}
*/

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th mist spoken language');
        break;
        default:
            console.log('Great language too :D');
}