# Functions & IIFE & Clusures

## Functions

performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

Function declarations
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly brackets, {...}.

For example, the following code defines a simple function named square:

```js
function square(number) {
  return number * number;
}
```

Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.

If you pass an object - the reference will be passed and changes will be visible outside the function.

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = { make: "Honda", model: "Accord", year: 1998 };
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
// (the make property was changed by the function)
```

```js
//function declaration
function fnDeclarationSquare(number) {
  return number * number;
}

//function expression
const fnExpressionSquare = function (number) {
  return number * number;
};
```

### Calling functions

Calling the function actually performs the specified actions with the indicated parameters.

```js
console.log(square(5));
/* ... */
function square(n) {
  return n * n;
}
```

Functions must be in scope when they are called, but the function declaration (as above) can be hoisted.

```js
console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // Uncaught TypeError: square is not a function
const square = function (n) {
  return n * n;
};
```

A function can call itself. For example, here is a function that computes factorials recursively

```js
// recursive call
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}
```

### Function scope

```js
// The following variables are defined in the global scope
let num1 = 20,
  num2 = 3,
  name = "Chamahk";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  let num1 = 2,
    num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Chamahk scored 5"
```

### Scope and the function stack

#### Recursion

- A function can refer to and call itself. There are three ways for a function to refer to itself 1
- The function's name 1a
- arguments.callee 1b
- An in-scope variable that refers to the function 1c\

In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case)

```js
//while loop
var x = 0;
while (x < 10) {
  // "x < 10" is the loop condition
  // do stuff
  x++;
}

//recursive function call
function loop(x) {
  if (x >= 10)
    // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

In fact, recursion itself uses a stack: the function stack.

```js
function foo(i) {
  if (i < 0) return;
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
}
foo(3);

// Output:

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
```

#### Nested functions and closures

You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.

It also forms a **closure**. A closure is an expression (most commonly, a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

To summarize:

The inner function can be accessed only from statements in the outer function.
The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
The following example shows nested functions:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
```

Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
// it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
```

### Name conflicts

The more inner scopes take precedence.

```js
function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
result = outside()(20); // returns 20 instead of 10
```

The name conflict happens at the statement return x and is between inside's parameter x and outside's variable x. The scope chain here is {inside, outside, global object}. Therefore, inside's x takes precedences over outside's x, and 20 (inside's x) is returned instead of 10 (outside's x).

### Multiply-nested functions

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)
```

## Closures

Closures are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).

However, the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables of the inner function.

Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the duration of the outer function execution, if the inner function manages to survive beyond the life of the outer function. A closure is created when the inner function is somehow made available to any scope outside the outer function.

```js
const pet = function (name) {
  // The outer function defines a variable called "name"
  const getName = function () {
    return name; // The inner function has access to the "name" variable of the outer
    //function
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
myPet = pet("Vivie");

myPet(); // Returns "Vivie"
```

It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned.

```js
const createPet = function (name) {
  let sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver
```

In the code above, the name variable of the outer function is accessible to the inner functions, and there is no other way to access the inner variables except through the inner functions. The inner variables of the inner functions act as safe stores for the outer arguments and variables. They hold "persistent" and "encapsulated" data for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.

### Using the arguments object

The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows

```js
arguments[i];
//where i is the ordinal number of the argument,
//The total number of arguments is indicated by arguments.length
```

Using the arguments object, you can call a function with more arguments than it is formally declared to accept.

```js
function myConcat(separator) {
  var result = ""; // initialize list
  var i;
  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

### Function parameters

Starting with ECMAScript 2015, there are two new kinds of parameters: default parameters and rest parameters.

#### Default parameters

In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value.

```js
//Without default parameters (pre-ECMAScript 2015)
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;

  return a * b;
}
multiply(5); // 5

//With default parameters (post-ECMAScript 2015)
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```

#### Rest parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Arrow functions

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

Differences & Limitations:

Does not have its own bindings to this or super, and should not be used as methods.
Does not have arguments, or new.target keywords.
Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
Can not be used as constructors.
Can not use yield, within its body.

### Comparing traditional functions to arrow functions

```js
// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```

For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:

```js
// Traditional Function with arguments
function (a, b){
  return a + b + 100;
}

// Arrow Function with arguments
(a, b) => a + b + 100;

// Traditional Function (no arguments)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;
```

Likewise, if the body requires additional lines of processing, you'll need to re-introduce brackets PLUS the "return" (arrow functions do not magically guess what or when you want to "return"):

```js
// Traditional Function
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
```

And finally, for named functions we treat arrow expressions like variables

```js
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
let bob = (a) => a + 100;
```

"this" and Arrow Functions

One reason arrow functions were introduced was to alleviate scope ( this ) complexities and make executing functions much more intuitive.

```js
// Traditional functions default this to the window scope:

//window.age = 10; // <-- notice me?
function Person() {
  this.age = 42; // <-- notice me?
  setTimeout(function () {
    // <-- Traditional function is executing on the window scope
    console.log("this.age", this.age); // yields "10" because the function executes on the window scope
  }, 100);
}
var p = new Person();

//Arrow functions do not default this to the window scope, rather they execute in the scope they are created
window.age = 10; // <-- notice me?
function Person() {
  this.age = 42; // <-- notice me?
  setTimeout(() => {
    // <-- Arrow function executing in the "p" (an instance of Person) scope
    console.log("this.age", this.age); // yields "42" because the function executes on the Person scope
  }, 100);
}

var p = new Person();
```

## How do you determine whether a function exists?

```js
if (typeof window.foo === "function") {
  // use foo()
} else {
  // do something else
}
```

## IIFE

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```js
(function () {
  statements;
})();
```

It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

Examples
The function becomes a function expression which is immediately executed. The variable within the expression can not be accessed from outside it.

```js
(function () {
  var aName = "Barry";
})();
// Variable aName is not accessible from the outside scope
aName; // throws "Uncaught ReferenceError: aName is not defined"
```

Assigning the IIFE to a variable stores the function's return value, not the function definition itself.

```js
var result = (function () {
  var name = "Barry";
  return name;
})();
// Immediately creates the output:
result; // "Barry"
```
