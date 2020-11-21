# Arithmetic Operators

` + , - , * , ** , / , % , ++ , -- ` 

## Addition operator (+), Subtraction (-)

```JS
console.log(2 + 2);// expected result: 4

console.log(2 + true);// expected result: 3

console.log('hello ' + 'everyone');// expected result: "hello everyone"

console.log(2001 + ': A Space Odyssey');// expected result: "2001: A Space Odyssey"
```

```js
console.log(5 - 3);
// expected output: 2

console.log(3.5 - 5);
// expected output: -1.5

console.log(5 - 'hello');
// expected output: NaN

console.log(5 - true);
// expected output: 4
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

## Multiplication `(*)`

```js
//Multiplication using numbers
 2 * 2      // 4
-2 * 2     // -4

//Multiplication with Infinity
Infinity * 0         // NaN
Infinity * Infinity  // Infinity

//Multiplication with non-numbers
'foo' * 2 // NaN
```

## Exponentiation (**)

```js
console.log(3 ** 4);
// expected output: 81

console.log(10 ** -2);
// expected output: 0.01

console.log(2 ** 3 ** 2); // is equal to 2 ** (3 ** 2)
// expected output: 512

console.log((2 ** 3) ** 2);
// expected output: 64
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

## Remainder (%)

```js
//Remainder with positive dividend
 12 % 5  //  2
 1 % -2 //  1
 1 % 2  //  1
 2 % 3  //  2
5.5 % 2 // 1.5

//Remainder with negative dividend
-12 % 5 // -2
-1 % 2  // -1
-4 % 2  // -0

//Remainder with NaN
NaN % 2 // NaN

//Remainder with Infinity
Infinity % 2 // NaN
Infinity % 0 // NaN
Infinity % Infinity // NaN
```

## Decrement (--) & Increment (++)

```js
//Postfix decrement
let x = 3;
y = x--;

// y = 3
// x = 2

//Prefix decrement
let a = 2;
b = --a;

// a = 1
// b = 1
```

```js
//Postfix increment
let x = 3;
y = x++;

// y = 3
// x = 4

//Prefix increment
let a = 2;
b = ++a;

// a = 3
// b = 3
```

# Assignment Operators

` = , += , -= , *= , /= , %= , &=`

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

## Subtraction assignment (-=)

```js
// Assuming the following variable
//  bar = 5

bar -= 2     // 3
bar -= 'foo' // NaN
```

## Multiplication assignment `(*=)`

```js
// Assuming the following variable
//  bar = 5

bar *= 2     // 10
bar *= 'foo' // NaN
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

## Remainder assignment (%=)

```js
// Assuming the following variable
//  bar = 5

bar %= 2     // 1
bar %= 'foo' // NaN
bar %= 0     // NaN
```

# Comparison Operators

` == , === , != , !== , > , < , >= , <= , |= , ^= , &= , **=`

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

If the operands are both objects, return true only if both operands reference the same object.


Comparison of objects

```js
const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 == object2 // false
object2 == object2 // true
```

If one operand is null and the other is undefined, return true.

```js
null == undefined;    // true
```

If the operands are of different types, try to convert them to the same type before comparing:
When comparing a number to a string, try to convert the string to a numeric value.

```js
"1" ==  1;            // true
1 == "1";             // true
```

If one of the operands is Boolean, convert the Boolean operand to 1 if it is true and +0 if it is false.

```js
0 == false;           // true
```

If one of the operands is an object and the other is a number or a string, try to convert the object to a primitive using the object's valueOf() and toString() methods.

```js
const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;         // true
number1 == number2;   // false
```

If the operands have the same type, they are compared as follows:
String: return true only if both operands have the same characters in the same order.
Number: return true only if both operands have the same value. +0 and -0 are treated as the same value. If either operand is NaN, return false.
Boolean: return true only if operands are both true or both false.

Comparison with type conversion

```js
0 == null;            // false
0 == undefined;       // false
0 == !!null;          // true, look at Logical NOT operator 
0 == !!undefined;     // true, look at Logical NOT operator 
```
Comparing strings and String objects

Note that strings constructed using new String() are objects. If you compare one of these with a string literal, the String object will be converted to a string literal and the contents will be compared. However, if both operands are String objects, then they are compared as objects and must reference the same object for comparison to succeed:

```js
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
Comparing Dates and strings
const d = new Date('December 17, 1995 03:24:00');
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s);    //true
```
## Strict equality (===) and (!==)

If the operands are of different types, return false.
If both operands are objects, return true only if they refer to the same object.
If both operands are null or both operands are undefined, return true.
If either operand is NaN, return false.

Otherwise, compare the two operand's values:
Numbers must have the same numeric values. +0 and -0 are considered to be the same value.
Strings must have the same characters in the same order.
Booleans must be both true or both false.

The most notable difference between this operator and the equality (==) operator is that if the operands are of different types, the == operator attempts to convert them to the same type before comparing.

```js
//Comparing operands of the same type
console.log("hello" === "hello");   // true
console.log("hello" === "hola");    // false

console.log(3 === 3);               // true
console.log(3 === 4);               // false

console.log(true === true);         // true
console.log(true === false);        // false

console.log(null === null);         // true

//Comparing operands of different types
console.log("3" === 3);           // false

console.log(true === 1);          // false

console.log(null === undefined);  // false

//Comparing objects
const object1 = {
  name: "hello"
}

const object2 = {
  name: "hello"
}

console.log(object1 === object2);  // false
console.log(object1 === object1);  // true
```

## Inequality (!=)

```js
//Comparison with no type conversion
1 != 2;              // true
"hello" != "hola";   // true

1 != 1;              // false
"hello" != "hello";  // false

//Comparison with type conversion
"1" !=  1;            // false
1 != "1";             // false
0 != false;           // false
0 != null;            // true
0 != undefined;       // true
0 != !!null;          // false, look at Logical NOT operator 
0 != !!undefined;     // false, look at Logical NOT operator 
null != undefined;    // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3;         // false
number1 != number2;   // true

//Comparison of objects
const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 != object2 // true
object2 != object2 // false
```

## Strict inequality (!==)

```js
//Comparing operands of the same type
console.log("hello" !== "hello");   // false
console.log("hello" !== "hola");    // true

console.log(3 !== 3);               // false
console.log(3 !== 4);               // true

console.log(true !== true);         // false
console.log(true !== false);        // true

console.log(null !== null);         // false

//Comparing operands of different types
console.log("3" !== 3);           // true

console.log(true !== 1);          // true

console.log(null !== undefined);  // true

//Comparing objects
const object1 = {
  name: "hello"
}

const object2 = {
  name: "hello"
}

console.log(object1 !== object2);  // true
console.log(object1 !== object1);  // false
```

## Greater than (>), Greater than or equal (>=), Less than (<), Less than or equal (<=) 

First, objects are converted to primitives using Symbol.ToPrimitive with the hint parameter be 'number'.

If both values are strings, they are compared as strings, based on the values of the Unicode code points they contain.

Otherwise JavaScript attempts to convert non-numeric types to numeric values:
Boolean values true and false are converted to 1 and 0 respectively.
null is converted to 0.
undefined is converted to NaN.
Strings are converted based on the values they contain, and are converted as NaN if they do not contain numeric values.

If either value is NaN, the operator returns false.
Otherwise the values are compared as numeric values.

```js
//String to string comparison
console.log("a" > "b");        // false
console.log("a" > "a");        // false
console.log("a" > "3");        // true

//String to number comparison
console.log("5" > 3);          // true
console.log("3" > 3);          // false
console.log("3" > 5);          // false

console.log("hello" > 5);      // false
console.log(5 > "hello");      // false

console.log("5" > 3n);         // true
console.log("3" > 5n);         // false

//Number to Number comparison

console.log(5 > 3);            // true
console.log(3 > 3);            // false
console.log(3 > 5);            // false

//Number to BigInt comparison

console.log(5n > 3);           // true
console.log(3 > 5n);           // false

//Comparing Boolean, null, undefined, NaN

console.log(true > false);     // true
console.log(false > true);     // false

console.log(true > 0);         // true
console.log(true > 1);         // false

console.log(null > 0);         // false
console.log(1 > null);         // true

console.log(undefined > 3);    // false
console.log(3 > undefined);    // false

console.log(3 > NaN);          // false
console.log(NaN > 3);          // false
```

```js
//String to string comparison
console.log("a" >= "b");     // false
console.log("a" >= "a");     // true
console.log("a" >= "3");     // true

//String to number comparison
console.log("5" >= 3);       // true
console.log("3" >= 3);       // true
console.log("3" >= 5);       // false

console.log("hello" >= 5);   // false
console.log(5 >= "hello");   // false

//Number to Number comparison
console.log(5 >= 3);         // true
console.log(3 >= 3);         // true
console.log(3 >= 5);         // false

//Number to BigInt comparison
console.log(5n >= 3);        // true
console.log(3 >= 3n);        // true
console.log(3 >= 5n);        // false

//Comparing Boolean, null, undefined, NaN
console.log(true >= false);  // true
console.log(true >= true);   // true
console.log(false >= true);  // false

console.log(true >= 0);      // true
console.log(true >= 1);      // true

console.log(null >= 0);      // true
console.log(1 >= null);      // true

console.log(undefined >= 3); // false
console.log(3 >= undefined); // false

console.log(3 >= NaN);       // false
console.log(NaN >= 3);       // false
```

```js
//String to string comparison
console.log("a" < "b");        // true
console.log("a" < "a");        // false
console.log("a" < "3");        // false

//String to number comparison
console.log("5" < 3);          // false
console.log("3" < 3);          // false
console.log("3" < 5);          // true

console.log("hello" < 5);      // false
console.log(5 < "hello");      // false

console.log("5" < 3n);         // false
console.log("3" < 5n);         // true

//Number to Number comparison
console.log(5 < 3);            // false
console.log(3 < 3);            // false
console.log(3 < 5);            // true

//Number to BigInt comparison
console.log(5n < 3);           // false
console.log(3 < 5n);           // true

//Comparing Boolean, null, undefined, NaN
console.log(true < false);     // false
console.log(false < true);     // true

console.log(0 < true);         // true
console.log(true < 1);         // false

console.log(null < 0);         // false
console.log(null < 1);         // true

console.log(undefined < 3);    // false
console.log(3 < undefined);    // false

console.log(3 < NaN);          // false
console.log(NaN < 3);          // false
```

```js
//String to string comparison
console.log("a" <= "b");     // true
console.log("a" <= "a");     // true
console.log("a" <= "3");     // false

//String to number comparison
console.log("5" <= 3);       // false
console.log("3" <= 3);       // true
console.log("3" <= 5);       // true

console.log("hello" <= 5);   // false
console.log(5 <= "hello");   // false

//Number to Number comparison
console.log(5 <= 3);         // false
console.log(3 <= 3);         // true
console.log(3 <= 5);         // true

//Number to BigInt comparison
console.log(5n <= 3);        // false
console.log(3 <= 3n);        // true
console.log(3 <= 5n);        // true

//Comparing Boolean, null, undefined, NaN
console.log(true <= false);  // false
console.log(true <= true);   // true
console.log(false <= true);  // true

console.log(true <= 0);      // false
console.log(true <= 1);      // true

console.log(null <= 0);      // true
console.log(1 <= null);      // false

console.log(undefined <= 3); // false
console.log(3 <= undefined); // false

console.log(3 <= NaN);       // false
console.log(NaN <= 3);       // false
```


## Bitwise OR assignment (|=)

```js
let a = 5;      // 00000000000000000000000000000101
a |= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000111
// expected output: 7
```

## Bitwise XOR assignment (^=)

```js
let a = 5;      // 00000000000000000000000000000101
a ^= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
// expected output: 6
```

## Bitwise AND assignment (&=)

```js
let a = 5;      // 00000000000000000000000000000101
a &= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// expected output: 1
```
## Exponentiation assignment (**=)

```js
let a = 3;

console.log(a **= 2);
// expected output: 9

console.log(a **= 0);
// expected output: 1

console.log(a **= 'hello');
// expected output: NaN
```

# Conditional (Ternary) Operator

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

# Logical Operators

` && , || , ! `

## Logical AND (&&)

```js
a1 = true  && true       // t && t returns true
a2 = true  && false      // t && f returns false
a3 = false && true       // f && t returns false
a4 = false && (3 == 4)   // f && f returns false
a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
a6 = false && 'Cat'      // f && t returns false
a7 = 'Cat' && false      // t && f returns false
a8 = ''    && false      // f && f returns ""
a9 = false && ''         // f && f returns false
```

The following expressions might seem equivalent, but they are not, because the && operator is executed before the || operator 

```js
true || false && false      // returns true, because && is executed first
(true || false) && false    // returns false, because operator precedence cannot apply
```

## LLogical OR (||)

```js
o1 = true  || true       // t || t returns true
o2 = false || true       // f || t returns true
o3 = true  || false      // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
o6 = false || 'Cat'      // f || t returns "Cat"
o7 = 'Cat' || false      // t || f returns "Cat"
o8 = ''    || false      // f || f returns false
o9 = false || ''         // f || f returns ""
o10 = false || varObject // f || object returns varObject
```

The following expressions might seem equivalent, but they are not, because the && operator is executed before the || operator

```js
true || false && false      // returns true, because && is executed first
(true || false) && false    // returns false, because operator precedence cannot apply
```

## Logical NOT (!)

Returns false if its single operand can be converted to true; otherwise, returns true.

If a value can be converted to true, the value is so-called truthy. If a value can be converted to false, the value is so-called falsy.

Examples of expressions that can be converted to false are:

null;
NaN;
0;
empty string ("" or '' or ``);
undefined.
Even though the ! operator can be used with operands that are not Boolean values, it can still be considered a boolean operator since its return value can always be converted to a boolean primitive. To explicitly convert its return value (or any expression in general) to the corresponding boolean value, use a double NOT operator or the Boolean constructor.

Using NOT

```js
n1 = !true               // !t returns false
n2 = !false              // !f returns true
n3 = !''                 // !f returns true
n4 = !'Cat'              // !t returns false
```

Double NOT (!!)

```js
n1 = !!true                   // !!truthy returns true
n2 = !!{}                     // !!truthy returns true: any object is truthy...
n3 = !!(new Boolean(false))   // ...even Boolean objects with a false .valueOf()!
n4 = !!false                  // !!falsy returns false
n5 = !!""                     // !!falsy returns false
n6 = !!Boolean(false)         // !!falsy returns false
```

# Bitwise operators 

` & , | , ~ , ^ , << , >>`

## Bitwise AND (&)

The bitwise AND operator (&) returns a 1 in each bit position for which the corresponding bits of both operands are 1s.

```js
const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a & b); // 00000000000000000000000000000001
// expected output: 1
```

!!! NOTE : Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32 bit integer

## Bitwise OR (|)

```js
const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a | b); // 00000000000000000000000000000111
// expected output: 7
```

## Bitwise NOT (~)

```js
const a = 5;     // 0000000000000101
const b = -3;    // 1111111111111101

console.log(~a); // 1111111111111010
// expected output: -6

console.log(~b); // 0000000000000010
// expected output: 2
```

## Bitwise XOR (^)

```js
const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
// expected output: 6
```

# Comma operator (,)

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

# Grouping operator ( )

```js
var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence 
// addition before multiplication   
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9
```