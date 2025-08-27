function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descFinland = describeCountry('Finland', 6, 'Helsinki');

const descSpain = describeCountry('Spain', 48.81, 'Madrid');

const descBrazil = describeCountry('Brazil', 212, 'Brasília');

console.log(descFinland, descSpain, descBrazil);

//function description
function percentageOfWorld1(population) {
    return population / 8142 * 100;
}

const percentageIndia = percentageOfWorld1(1451);
const percentageRomania = percentageOfWorld1(1907);
const percentageColombia = percentageOfWorld1(5289);

console.log(percentageIndia, percentageRomania, percentageColombia);

//function expression
const percentageOfWorld2 = function(population) {
    return (population / 8142) * 100;
}

const percentageIndia2 = percentageOfWorld2(1451);
const percentageRomania2 = percentageOfWorld2(1907);
const percentageColombia2 = percentageOfWorld2(5289);

console.log(percentageIndia2, percentageRomania2, percentageColombia2);

const percentageOfWorld3 = population => (population / 8142) * 100;
const percentageIndia3 = percentageOfWorld3(1451);
const percentageRomania3 = percentageOfWorld3(1907);
const percentageColombia3 = percentageOfWorld3(5289);

console.log(percentageIndia3, percentageRomania3, percentageColombia3);

function describePopulation(country, population) {
    const percPopulation = percentageOfWorld1(population);

    return `${country} has ${population} million people, which is about ${percPopulation}% of the world`;
}

const india = describePopulation('India', 1451);
const romania = describePopulation('Romania', 1907);
const colombia = describePopulation('Colombia', 5289);

console.log(india, romania, colombia);

const population = [1451, 1907, 5289];
console.log(population.length === 3);

const percentages = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2])];

console.log(percentages);

const neighbours = ['Argentina', 'Colombia','Peru'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')) {
    console.log('Probably not a central european contry :D');
}

console.log(neighbours.indexOf('Argentina'));
neighbours[0] = 'Venezuela';
console.log(neighbours);

const myCountry = {
    country: 'Brazil',
    capital: 'Brasilia',
    language: 'Portuguese',
    population: 212,
    neighbours: ['Argentina', 'Bolivia', 'Colombia', 'Guyana', 'Paraguai', 'Peru', 'Suriname', 'Uruguay', 'Vezezuela', 'French Guiana'],

    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);

for(let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

const population2 = [1451, 1907, 5289];
const percentages2 = [];

for(let i = 0; i < population2.length; i++) {
    const perc = percentageOfWorld1(population2[i]);
    percentages2.push(perc);
}

console.log(percentages2);

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];

for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}

const population3 = [1451, 1907, 5289];
const percentage3 = [];

let i = 0;
while(i < population3.length) {
    const perc = percentageOfWorld1(population3[i]);
    percentage3.push(perc);
    i++;
}

console.log(percentage3);
