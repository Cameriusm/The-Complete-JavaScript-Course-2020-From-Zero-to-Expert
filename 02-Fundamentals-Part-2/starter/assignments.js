'use strict';
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descRussia = describeCountry('Russia', 144, 'Moscow');
const descFinland = describeCountry('Finland', 6, 'Helsinki');
const descGermany = describeCountry('Germany', 83, 'Berlin');

console.log(descRussia);
console.log(descFinland);
console.log(descGermany);


function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageRussia1 = percentageOfWorld1(144);
const percentageFinland1 = percentageOfWorld1(6);
const percentageGermany1 = percentageOfWorld1(83);
console.log(percentageRussia1, percentageFinland1, percentageGermany1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percentageRussia2 = percentageOfWorld1(144);
const percentageFinland2 = percentageOfWorld1(6);
const percentageGermany2 = percentageOfWorld1(83);
console.log(percentageRussia2, percentageFinland2, percentageGermany2);


const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentageRussia3 = percentageOfWorld3(144);
const percentageFinland3 = percentageOfWorld3(6);
const percentageGermany3 = percentageOfWorld3(83);
console.log(percentageRussia3, percentageFinland3, percentageGermany3);


function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percCountry = percentageOfWorld1(population);
  const description = `${country} has ${population} million people which is about ${percCountry}% of the world.`;
  console.log(description);
}

describePopulation('Russia', 144);
describePopulation('Finland', 6);
describePopulation('Germany', 83);
*/

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [144, 6, 84, 844];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
