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


const neighbours = ['Germany', 'Czech', 'Poland'];
neighbours.push('Utopia');
neighbours.pop();
if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Czech')] = 'Czech republic';
console.log(neighbours);


const myCountry = {
  country: 'France',
  capital: 'Paris',
  language: 'french',
  population: 67,
  neighbours: [
    'Belgium',
    'Luxembourg',
    'Germany',
    'Switzerland',
    'Italy',
    'Monaco',
    'Spain',
    'Andorra',
  ],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
// console.log(
// // // // // `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);


for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}
*/
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [144, 6, 84, 844];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }
// console.log(percentages2);

// const listOfNeighbours = [
//   ['Canada', 'Mexico'], 
//   ['Spain'], 
//   ['Norway', 'Sweden', 'Russia']
// ];
// for(let i = 0; i < listOfNeighbours.length ; i++) {
//   for(let k = 0; k < listOfNeighbours[i].length; k++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][k]}`)
//   }

// }

const percentages3 = [];
 let i = 0;
 while (i < populations.length) {
 const perc = percentageOfWorld1(populations[i]);
 percentages3.push(perc);
 i++;
 }
 console.log(percentages3);