// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb){
 return cb(a + b)
}

// function consume2(callback){
//   // const cb = 'idk';
//   console.log(callback(callback));
// };

// consume2(consume('apple', 'banana'));


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consumeMath(num1, num2, cb){
  return cb(num1, num2);
}

const add = (num1, num2) => {
  return num1 + num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

const greeting = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

console.log(consumeMath(2, 3, add));
console.log(consumeMath(2, 5, multiply));
console.log(consumeMath('Billy', 'Bob', greeting));

console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

/* Explain in your own words why nestedfunction can access the variable internal:

  -Nested objects can only inherit upwards/outwards because of the function scope.
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
