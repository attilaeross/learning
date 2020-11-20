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