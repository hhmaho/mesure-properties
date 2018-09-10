// 293 = 20celsius
const kelvin = 0;
// Celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;
//  we will round the number saved to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// .floor() method to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`${kelvin} Kelvin is equivalent to ${fahrenheit} degrees Fahrenheit.`)
console.log(`${fahrenheit} degrees Fahrenheit is equivalent to ${celsius} degrees Celsius.`)
let newton = celsius * (33/100)
newton = Math.floor(newton);
console.log(`${celsius} degrees Celsius is equivalent to ${newton} Newton.`)