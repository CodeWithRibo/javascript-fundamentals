// const isRange = randomValue >= 1 / 3 && randomValue < 2 / 3;

// console.log(randomValue);
// console.log(isRange);

const randomNumber = Math.random();
const checkingIf =
  (randomNumber >= 0) & (randomNumber < 1 / 3)
    ? `truthy \n ${randomNumber}`
    : `falsy \n${randomNumber}`;

console.log(checkingIf);
