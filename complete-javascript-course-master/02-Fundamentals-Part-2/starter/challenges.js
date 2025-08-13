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
