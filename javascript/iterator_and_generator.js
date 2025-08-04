let fruits = ["banana", "apple", "orange"];
let it = fruits[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function* timeOfDay() {
  yield "morning";
  yield "afternoon";
  yield "evening";
}

for (let time of timeOfDay()) {
  console.log(time);
}
console.log("cound to five");

function* countToFive() {
  for (let i = 0; i <= 5; i++) {
    yield i;
  }
}

let gen = countToFive();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // Undefined

///////

function* doubleValues(arr) {
  for (let val of arr) {
    yield val * 2;
  }
}

let result = doubleValues([1, 2, 3]);

for (let x of result) {
  console.log(x);
}
