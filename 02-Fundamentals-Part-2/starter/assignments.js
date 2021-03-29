'use strict';

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descRussia = describeCountry('Russia', 144, 'Moscow');
const descFinland = describeCountry('Finland', 6, 'Helsinki');
const descGermany = describeCountry('Germany', 83, 'Berlin');

console.log(descRussia);
console.log(descFinland);
console.log(descGermany);
