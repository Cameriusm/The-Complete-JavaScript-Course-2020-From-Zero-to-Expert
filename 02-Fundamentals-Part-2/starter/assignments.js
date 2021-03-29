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
*/

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
