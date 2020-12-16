# Scopes

The scope is an important concept that manages the availability of variables. The scope is at the base closures, defines the idea of global and local variables.

The scope is a policy that manages the accessibility of variables.

## Block scope

A code block in JavaScript defines a scope for variables declared using let and const

The code block of if, for, while and standalone code blocks statements also create a scope.

```js
if (true) {
  // "if" block scope
  const message = "Hello";
  console.log(message); // 'Hello'
}
console.log(message); // throws ReferenceError
```

var is not block scoped

```js
if (true) {
  // "if" block scope
  var count = 0;
  console.log(count); // 0
}
console.log(count); // 0
```

A code block does not create a scope for var variables, but a function body does.

## Function scope

```js
function run() {
  // "run" function scope
  const two = 2;
  let count = 0;
  function run2() {}

  console.log(two); // 2
  console.log(count); // 0
  console.log(run2); // function
}

run();
console.log(two); // throws ReferenceError
console.log(count); // throws ReferenceError
console.log(run2); // throws ReferenceError
```

## Module scope

module also creates a scope for variables, functions, classes.

```js
// "circle" module scope
const pi = 3.14159;

console.log(pi); // 3.14159

// Usage of pi
```

```js
///
import "./circle";
///The variable pi is not accessible outside of circle module (unless explicitly exported using export).
console.log(pi); // throws ReferenceError
```

IMPORTANT : scope is an encapsulation mechanism for code blocks, functions, and modules.

## Nested Scopes

```js
function run() {
  // "run" function scope
  const message = "Run, Forrest, Run!";

  if (true) {
    // "if" code block scope  - inner scope (block scope) for the outer scope (function scope)
    const friend = "Bubba";
    console.log(message); // 'Run, Forrest, Run!'
  }

  console.log(friend); // throws ReferenceError
}

run();
```

TO REMEMBER : The inner scope can access the variables of its outer scope

## Global scope

The global scope is the outermost scope. It is accessible from any inner (aka local) scope.

A variable declared inside the global scope is named global variable. Global variables are accessible from any scope.

The global scope is a mechanism that lets the host of JavaScript (browser, Node) supply applications with host-specific functions as global variables.

```js
// myScript.js

// "global" scope
let counter = 1;
```

window and document, for example, are global variables supplied by the browser. In a Node environment, you can access process object as a global variable.

## Lexical scope

```js
function outerFunc() {
  // the outer scope
  let outerVar = "I am from outside!";

  function innerFunc() {
    // the inner scope
    console.log(outerVar); // 'I am from outside!'
  }

  return innerFunc;
}

const inner = outerFunc();
inner();
```

function innerFunc() is nested inside outerFunc()

Lexical scoping means that the accessibility of variables is determined statically by the position of the variables within the nested function scopes: the inner function scope can access variables from the outer function scope.

The lexical scope consists of outer scopes determined statically

# WHy scopes and conclusion

main reason is variables isolation

The scope is a policy that manages the availability of variables.

the scope isolates the variables. And what’s good different scopes can have variables with the same name - not that it is a good practice but still usable...

In JavaScript, scopes are created by code blocks, functions, modules.

While const and let variables are scoped by code blocks, functions or modules, var variables are scoped only by functions or modules.

The lexical scope consists of the outer function scopes determined statically. Any function, no matter the place where being executed, can access the variables of its lexical scope (this is the concept of closure).

```js
function foo() {
  // "foo" function scope
  let count = 0;
  console.log(count); // 0
}

function bar() {
  // "bar" function scope
  let count = 1;
  console.log(count); // 1
}

foo();
bar();
```
