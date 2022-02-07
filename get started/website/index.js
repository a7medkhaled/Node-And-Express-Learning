const s = "ahmed",
  v = "khaled";
const arr = new Array(s, v);

console.log(arr);

//Array Methods

//lenght
console.log(arr.length);

//push
console.log(arr.push(10));

//pop
console.log(arr.pop());

//splice
var donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-1, 1, "chocolate frosted", "glazed");

console.log(donuts);

//revese

donuts.reverse();
console.log(donuts);

//sort

donuts.sort();

//join
let b = donuts.join(" -");
console.log(b);

//FOREACH

let dArray = [1, 2, 3, 4];

dArray = dArray.forEach((item) => {
  item += "hi";
  return item;
});
console.log(dArray);

let ddArray = [1, 2, 3, 4];
let dddArray = ddArray.map((item) => {
  item += "hi";
  return item;
});
console.log(dddArray);
