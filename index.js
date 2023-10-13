import CodersArray from "./Array.js/Array.js";

const numbers = new CodersArray(3, 8, 10, 2);
// Const names = new Array("Marta", "Luis", "Pere");

console.log("Numbers length: ", numbers.length);
// Console.log("Names length: ", names.length);

console.log("Numbers push (6, 7, 4): ", numbers.push(6, 7, 4));

// Console.log(
//   "Numbers map (number) => number + 1): ",
//   numbers.map((number) => number + 1),
// );

// Console.log(
//   "Names map (Alumn name): ",
//   names.map((alumn) => "Alumn " + alumn),
// );

// console.log(
//   "Numbers filter (number < 10): ",
//   numbers.filter((number) => number < 10),
// );

// console.log(
//   "Numbers find (number < 10): ",
//   numbers.find((number) => number < 10),
// );

// console.log(
//   "Numbers some (number > 10): ",
//   numbers.some((number) => number > 10),
// );

export default numbers;
