import Array from "./Array.js/Array.js";

export const numbers = new Array(3, 8, 10, 2);

console.log(numbers.map((number) => number + 1));

console.log(numbers.filter((number) => number < 10));

console.log(numbers.find((number) => number < 10));
