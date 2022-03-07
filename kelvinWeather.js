// Kelvin Weather

// a constant variable name kelvin set to 293
const kelvin = 0;
// convert to celsius 
const celsius = kelvin - 273;
// convert to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// rounding down the value of fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// convert to newton
let newton = celsius * (33 / 100);
//roud down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees newton.`);