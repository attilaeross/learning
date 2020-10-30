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

Function declaration vs function expression

```js
function foo() {}
console.log(foo); // "[Function: foo]"
```

Function name :
cannot be changed but
can be used only within the function's body (recursive)

```js
// recursive
const calculateFactorial = function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1); //recursive call - call itself within the body of the function
};
calculateFactorial(3); // 6
factorial(3); // throws
```

### How do you determine whether a function exists?

```js
if (typeof window.foo === "function") {
  // use foo()
} else {
  // do something else
}
```

### Function arguments

Array-like object corresponding to the arguments passed to a function
local variable arguments available within all functions
does not have any Array properties except length
arguments can be converted to a real Array

```js
function foo(number1, number2, string1, obj1) {
  const args = Array.prototype.slice.call(arguments);
  console.log(args); //output : [ 1, 2, 'hello', {} ]
}
foo(1, 2, "hello", {});

// ES6
function bar(...args) {
  // same as above
  console.log(args); //output : [ 1, 2, 'hello', {} ]
}
bar(1, 2, "hello", {});
```

### Lexical scoping

Describes how a parser resolves variable names when functions are nested.

The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available.

Nested functions have access to variables declared in their outer scope.

# Closures

A closure is the combination of a function and the lexical environment within which that function was declared.

```js
const a = 1;
function foo(b) {
  return a + b;
}
// both `a` and `foo` were created in the same lexical environment
foo(2); // "3"
```

⚠️ Closures reduce the need to pass state around the application.

Scope chain
For every closure we have three scopes:

Local Scope (Own scope)
All Outer Functions Scope
Global Scope

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

## Name conflicts

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
