import Array from "./Array.js/Array.js";

const numbers = new Array(3, 8, 10, 2);

console.log("Numbers length: ", numbers.length);
console.log(
  "Numbers map (number + 1): ",
  numbers.map((number) => number + 1),
);
console.log(
  "Numbers filter (number < 10): ",
  numbers.filter((number) => number < 10),
);
console.log(
  "Numbers find (number < 10): ",
  numbers.find((number) => number < 10),
);
console.log(
  "Numbers some (number > 10): ",
  numbers.some((number) => number > 10),
);

export default numbers;
