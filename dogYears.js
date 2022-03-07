//Dog Years

// creating a variable for my age
const myAge = 22;
// a variable earlyYears
let earlyYears = 2;
earlyYears *= 10.5;
//calculating later years
let laterYears = myAge - 2;
//number of dogs years accounted for by year later
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//sum of early years and later years
let myAgeInDogYears = earlyYears + laterYears;

//my name to lower case
let myName ='Kofi Max'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} yearsold in human years which is ${myAgeInDogYears} years old in dog years.`);