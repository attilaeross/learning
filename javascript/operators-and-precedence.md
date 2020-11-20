# Operators

## Addition operator (+)

```JS
console.log(2 + 2);// expected result: 4

console.log(2 + true);// expected result: 3

console.log('hello ' + 'everyone');// expected result: "hello everyone"

console.log(2001 + ': A Space Odyssey');// expected result: "2001: A Space Odyssey"
```

### Numeric addition

```js
// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2 ---> true evaluates to 1 / false = 0

// Boolean + Boolean -> addition
false + false // 0 ---> false = 0
```

### String concatenation

```js
// String + String -> concatenation
'foo' + 'bar' // "foobar"

// Number + String -> concatenation
5 + 'foo' // "5foo"

// String + Boolean -> concatenation
'foo' + false // "foofalse"
```

## Addition assignment (+=)

```js
// Assuming the following variables
//  foo = 'foo'
//  bar = 5
//  baz = true

// Number + Number -> addition
bar += 2 // 7

// Boolean + Number -> addition
baz += 1 // 2

// Boolean + Boolean -> addition
baz += false // 1

// Number + String -> concatenation
bar += 'foo' // "5foo"

// String + Boolean -> concatenation
foo += false // "foofalse"

// String + String -> concatenation
foo += 'bar' // "foobar"

```

## Assignment (=)

```js
//Simple assignment and chaining
// Assuming the following variables
//  x = 5
//  y = 10
//  z = 25

x = y     // x is 10
x = y = z // x, y and z are all 25
```
## Bitwise operators 

### Bitwise AND (&)

The bitwise AND operator (&) returns a 1 in each bit position for which the corresponding bits of both operands are 1s.

```js
const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a & b); // 00000000000000000000000000000001
// expected output: 1
```

!!! NOTE : Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32 bit integer

### Bitwise AND assignment (&=)

```js
let a = 5;      // 00000000000000000000000000000101
a &= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// expected output: 1
```

### Bitwise NOT (~)

```js
const a = 5;     // 0000000000000101
const b = -3;    // 1111111111111101

console.log(~a); // 1111111111111010
// expected output: -6

console.log(~b); // 0000000000000010
// expected output: 2
```

### Bitwise OR (|)

```js
const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a | b); // 00000000000000000000000000000111
// expected output: 7
```

### Bitwise OR assignment (|=)

```js
let a = 5;      // 00000000000000000000000000000101
a |= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000111
// expected output: 7
```

### Bitwise XOR (^)

```js
const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
// expected output: 6
```

### Bitwise XOR assignment (^=)

```js
let a = 5;      // 00000000000000000000000000000101
a ^= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
// expected output: 6
```

## Comma operator (,)

The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. This lets you create a compound expression in which multiple expressions are evaluated, with the compound expression's final value being the value of the rightmost of its member expressions. This is commonly used to provide multiple parameters to a for loop.

```js
let x = 1;
x = (x++, x);
console.log(x);
// expected output: 2

x = (2, 3);
console.log(x);
// expected output: 3
```

```js
const a, b, c;

a = b = 3, c = 4; // Returns 4 in console
console.log(a); // 3 (left-most)

const x, y, z;

x = (y = 5, z = 6); // Returns 6 in console
console.log(x); // 6 (right-most)
```

Note that the comma operators in assignments may appear not to have the normal effect of comma operators because they don't exist within an expression. In the above example, a is set to the value of b = 3 (which is 3), but the c = 4 expression still evaluates and its result returned to console (i.e., 4). This is due to operator precedence and associativity.

## Conditional (ternary) operator

syntax --> condition ? exprIfTrue : exprIfFalse

```js
function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"
```

Handling null values

```js
let greeting = person => {
    let name = person ? person.name : `stranger`
    return `Howdy, ${name}`
}

console.log(greeting({name: `Alice`}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"
```

Conditional chains

```js
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
```

## Decrement (--)

```js
let x = 3;
const y = x--; // If used postfix, with operator after operand (for example, x--), the decrement operator decrements and returns the value before decrementing

console.log(`x:${x}, y:${y}`);
// expected output: "x:2, y:3"

let a = 3;
const b = --a; //If used prefix, with operator before operand (for example, --a), the decrement operator decrements and returns the value after decrementing.

console.log(`a:${a}, b:${b}`);
// expected output: "a:2, b:2"
```

## Destructuring assignment

```js
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
```

## Division (/)

```js
console.log(12 / 2);
// expected output: 6

console.log(3 / 2);
// expected output: 1.5

console.log(6 / '3');
// expected output: 2

console.log(2 / 0);
// expected output: Infinity
```

## Division assignment (/=)

```js
let a = 3;

console.log(a /= 2);
// expected output: 1.5

console.log(a /= 0);
// expected output: Infinity

console.log(a /= 'hello');
// expected output: NaN
```

## Equality (==)

The equality operator (==) checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.

```js
console.log(1 == 1);
// expected output: true

console.log('hello' == 'hello');
// expected output: true

console.log('1' ==  1);
// expected output: true

console.log(0 == false);
// expected output: true
```