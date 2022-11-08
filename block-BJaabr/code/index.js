// look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// // - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// // - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// // - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// // - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// // - Execute the function
convertToString(21);

// // - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// // - Write a Function Declaration
function addOne (number){
  return number + 1;
}

// // - Write a Function Expression
let addOne = function  (number){
  return number + 1;
}

// // - Write an Arrow Function without curly brackets(if possible)
let addOne = (number) => number + 1

// // - Write an Arrow Function with curly brackets
let addOne = number => {
  return number + 1;
}

 
// - Execute the function
addOne(22);


// - Execute the function and store the return value in a variable.
let summation = addOne ();

// - What is the typeof returnValue
// typeof sum is "number"


/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne (number){
  return number - 1;
}

// - Write a Function Expression
let substractOne = function(number){
  return number - 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (number) => (number - 1);


// - Write an Arrow Function with curly brackets
let substractOne = number =>{
  return number - 1;
}
// - Execute the function
 substractOne(20);

// - Execute the function and store the return value in a variable.
let substraction  = substractOne();

// - What is the typeof returnValue
// typeof substract is  a "number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum (numA , NumB){
  return numA + NumB;
}

// - Write a Function Expression
let sum = function (numA , NumB){
  return numA + NumB;
}

// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA , numB) => numA + numB

// - Write an Arrow Function with curly brackets
let sum = (numA , numB) =>{
  return numA + numB
}

// - Execute the function
sum(10, 20);

// - Execute the function and store the return value in a variable
let addition = sum();

// - What is the typeof returnValue
// typeof sum is a "number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function squre(num){
  return (num * num)
}

// - Write a Function Expression
let squre = function(num){
  return (num * num )
}

// - Write an Arrow Function without curly brackets(if possible)
let squre = (num) => (num * num)

// - Write an Arrow Function with curly brackets
let squre = (num) => {
  return (num * num);
}

// - Execute the function
squre (20);

// - Execute the function and store the return value in a variable
let product = squre()

// - What is the typeof returnValue
// typeof squre is a "number"
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater (x , y){
  if (x > y){
    return true;
  }else {
    return false;
  }
}


// - Write a Function Expression
let isGreater = function(x , y){
  if (x > y){
    return true;
  }else {
    return false;
  }
}


// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x, y) => x > y ? `${x} is greater than ${y}`: 
  


// - Write an Arrow Function with curly brackets
let isGreater = (x, y) =>{
    if (x > y){
      return true;
    }else {
      return false;
    }  
}

// - Execute the function
isGreater (10 , 5);

// - Execute the function and store the return value in a variable
let compare = isGreater();

// - What is the typeof returnValue
// typeof isGreater is a "number"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(Number){
  if (Number % 2 === 0) {
    return "Number is odd"
  }else if (Number % 2 !== 2){
    return "Number is odd"
  }
}

// - Write an anonymous Function Expression
let oddOrEven = (Number){
  if (Number % 2 === 0) {
    return "Number is odd"
  }else if (Number % 2 !== 2){
    return "Number is odd"
  }
}

// - Write an named Function Expression
let oddOrEven = declare(Number){
  if (Number % 2 === 0) {
    return "Number is odd"
  }else if (Number % 2 !== 2){
    return "Number is odd"
  }
}


// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (num) => num % 2 == 0 ? "NUmber is even" : "Number is Odd";

// - Write an Arrow Function with curly brackets
let oddOrEven = (num) => {
  if (Number % 2 === 0) {
    return "Number is odd"
  }else if (Number % 2 !== 2){
    return "Number is odd"
  }
} 



// - Execute the function
let oddNum = oddOrEven();

// - Execute the function and store the return value in a variable
let check = oddOrEven()

// - What is the typeof returnValue
// typeof check is a "number"
