# Primitive data types

https://developer.mozilla.org/en-US/docs/Glossary/Primitive

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

Good to know : Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.

General Short Description :

There are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol.
There also is null, which is seemingly primitive, but indeed is a special case for every Object: and any structured type is derived from null by the Prototype Chain.

All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

## String

https://developer.mozilla.org/en-US/docs/Glossary/string

In JavaScript, a String is one of the primitive values and the String object is a wrapper around a String primitive.

Strings can be created as primitives, from string literals, or as objects, using the String() constructor:

String literals (denoted by double or single quotes) and strings returned from String calls in a non-constructor context (that is, called without using the new keyword) are primitive strings. JavaScript automatically converts primitives to String objects, so that it's possible to use String object methods for primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup.

```js
const string1 = "A string primitive literal";
const string2 = "Also a string primitive literal";
const string3 = `Yet another string primitive literal`;
const string4 = String(`Another string primitive literal`);

const string4 = new String("A String object");
```

Important to know about stings:

String literals can be specified using single or double quotes (as seen above), which are treated identically, or using the backtick character `. This `` form specifies a template literal: with this form you can interpolate expressions.

accessing chars within string literals can be done by charAt() method or bracket notation (string1[1]).

```js
const string1 = "A string primitive literal";
console.log(string1[0]); // logs "A"
console.log(string1.charAt(2)); // logs "s"
```

When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed.

create "another" string :
A substring of the original by picking individual letters or using String.substr(start[, length]) / substring(indexStart[, indexEnd]) \*\*\* when indexStart > indexEnd it swaps arguments

```js
const string1 = "A string primitive literal";

console.log(string1.substr(5)); //output "ing primitive literal"
console.log(string1.substr(0, 5)); //output "A str"
console.log(string1.substring(0, 5)); //output "A str"
console.log(string1.substring(5)); //output "ing primitive literal"
```

A concatenation of two strings using the concatenation operator (+) or String.concat().

```js
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2)); //  output: "Hello World"
console.log(str2.concat(", ", str1)); // output: "World, Hello"
```

Strings are the common denominator of a lot of APIs (input fields, local storage values, XMLHttpRequest responses when using responseText, etc.) and it can be tempting to only work with strings.

### String Methods (most used)

```js
// charAt(); - Returns the character at the specified index (position)
const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`); // expected output: "The character at index 4 is q"

// concat(); Joins two or more strings, and returns a new joined strings
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2));

// includes(); - checks whether a string contains the specified string/characters
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
); // expected output: "The word "fox" is in the sentence"

// indexOf(); - Returns the position of the first found occurrence of a specified value in a string
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
); // expected output: "The index of the first "dog" from the beginning is 40"
console.log(
  `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
); // expected output: "The index of the 2nd "dog" is 52"

// match(); Searches a string for a match against a regular expression, and returns the matches
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found); // expected output: Array ["T", "I"]

//search(); - Searches a string for a specified value, or regular expression, and returns the position of the match

//slice(); Extracts a part of a string and returns a new string
const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.slice(31)); // expected output: "the lazy dog."
console.log(str.slice(4, 19)); // expected output: "quick brown fox"
console.log(str.slice(-4)); // expected output: "dog."
console.log(str.slice(-9, -5)); // expected output: "lazy"

// split(); Splits a string into an array of substrings
const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words[3]); // expected output: "fox"
const chars = str.split("");
console.log(chars[8]); // expected output: "k"
const strCopy = str.split();
console.log(strCopy); // expected output: Array ["The quick brown fox jumps over the lazy dog."]

substr(); //Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

substring(); //Extracts the characters from a string, between two specified indices

//toLowerCase(); Converts a string to lowercase letters
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.toLowerCase()); // expected output: "the quick brown fox jumps over the lazy dog."

// toString() - Returns the value of a String object
const stringObj = new String("foo");
console.log(stringObj); // expected output: String { "foo" }
console.log(stringObj.toString()); // expected output: "foo"

toUpperCase(); //Converts a string to uppercase letters

trim(); //Removes whitespace from both ends of a string
const greeting = "   Hello world!   ";
console.log(greeting); // expected output: "   Hello world!   ";
console.log(greeting.trim()); // expected output: "Hello world!";

// valueOf(); Returns the primitive value of a String object
const stringObj = new String("foo");
console.log(stringObj); // expected output: String { "foo" }
console.log(stringObj.valueOf()); // expected output: "foo"
```

## Number

https://developer.mozilla.org/en-US/docs/Glossary/number

Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754).
The number type has three symbolic values: +Infinity, -Infinity, and NaN ("Not a Number").
To check for the largest available value or smallest available value within ±Infinity, you can use the constants Number.MAX_VALUE or Number.MIN_VALUE.

Is created by calling `Number()` function

```js
Number(123);
const myNum1 = 10;
let myNum2 = 11.4;
```

The number type has only one integer with two representations: 0 is represented as both -0 and +0. (0 is an alias for +0.)

```js
console.log(42 / +0); // output : Infinity
console.log(42 / -0); // output : -Infinity
```

### Convert numeric strings and null to numbers

The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

```js
Number("123"); // 123
Number("123") === 123; /// true
Number("12.3"); // 12.3
Number("12.00"); // 12
Number("123e-1"); // 12.3
Number(""); // 0
Number(null); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
Number("-Infinity"); //-Infinity
```

### Number Object

Inheritance: Object > Function > Number

Is created by calling the Number constructor:

```js
new Number(123) instanceof Number; // true

typeof new Number(123) === "object"; // true
typeof new Number(123) === "number"; // false
```

Casting to Number type

```js
Number(null); // 0
Number({}); // NaN
Number(""); // 0
Number(" "); // 0
Number("abc"); // NaN
Number(true); // 1
Number(false); // 0
```

Has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number)

### NaN

is a special value which is not equal to itself.

```js
NaN === NaN; // false
typeof NaN === "number"; // true
```

Determining if a value is a number:

```js
typeof value === "number" && !Number.isNaN(value);
```

### Number static methods

```js
Number.isInteger(); //determines whether the passed value is an integer

Number.isSafeInteger(); //determines whether the provided value is a number that is a safe integer

Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true

Number.isFinite(); //determines whether the passed value is a finite number

Number.isFinite(1000 / 1); // true
Number.isFinite(1000 / 0); // false
Number.isFinite(Infinity); // false
Number.isFinite(Number.NaN); // false
Number.isFinite(-Infinity); // false
Number.isFinite(null); // false
Number.isFinite("0"); // false
```

NOTE: the difference between isFinite() and Number.isFinite(): the former will return true if the value is currently a number, OR if it is going to be after it is coerced to a number, while the latter will return true ONLY if the value is currently a number

```js
Number.isNaN() //determines whether the passed value is NaN and its type is Number

⚠️ Number.isNaN() !=== window.isNaN

Number.isNaN('100F'); // false
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

Math.sqrt(-1); // NaN
parseInt('blabla'); // NaN

// e.g. these would have been true with global isNaN()
Number.isNaN('NaN'); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN('blabla'); // false

// These all return false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('');
```

NOTE: the difference between isNaN() and Number.isNaN(): the former will return true if the value is currently NaN, OR if it is going to be NaN after it is coerced to a number, while the latter will return true ONLY if the value is currently NaN

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
// however
Number.isNaN(Number("hello world")); // true
```

```js
Number.parseInt(value: string, radix?: number[2..36]) //parses a string argument and returns an integer of the specified radix or base.

Number.parseInt('123'); // 123
Number.parseInt('111', 2); // 7
Number.parseInt('20', 16); // 32
Number.parseInt('a11'); // NaN
```

## Boolean

https://developer.mozilla.org/en-US/docs/Glossary/boolean

Boolean represents a logical entity and can have two values: true and false.
Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.

Any object of which the value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. For example, the condition in the following if statement evaluates to true:

```js
const x = new Boolean(false);
if (x) {
  // this code is executed as x (object) will be evaluated as true
}
```

This behavior does not apply to Boolean primitives. For example, the condition in the following if statement evaluates to false:

```js
const x = false;
if (x) {
  // this code is not executed as x (boolean primitive data type) is set as false
}
```

Creating Boolean objects with an initial value of false

```js
const undefinedToBoolean = new Boolean();
const zeroToBoolean = new Boolean(0);
const nullToBoolean = new Boolean(null);
const emptyString = new Boolean("");
const falseValue = new Boolean(false);
```

Creating Boolean objects with an initial value of true

```js
const trueToBoolean = new Boolean(true);
const trueStringToBoolean = new Boolean("true");
const falseStringToBoolean = new Boolean("false");
const SuLinStringToBoolean = new Boolean("Su Lin");
const ArrayProtoToBoolean = new Boolean([]);
const ObjProtoToBoolean = new Boolean({});
```

## Undefined

https://developer.mozilla.org/en-US/docs/Glossary/undefined

undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.

```js
var x; //create a variable but assign it no value

console.log("x's value is", x); //logs "x's value is undefined"
```

Property attributes of undefined
Writable no
Enumerable no
Configurable no

JavaScript Demo: Standard built-in objects - undefined

```js
function test(t) {
  if (t === undefined) {
    return "Undefined value!";
  }
  return t;
}

let x;

console.log(test(x)); // expected output: "Undefined value!"
```

## NULL

https://developer.mozilla.org/en-US/docs/Glossary/null

null is seemingly primitive, but indeed is a special case for every Object: and any structured type is derived from null by the Prototype Chain.

In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations.

In JavaScript, null is marked as one of the primitive values, because its behaviour is seemingly primitive.

But in certain cases, null is not as "primitive" as it first seems! Every Object is derived from null value, and therefore typeof operator returns object for it:

```js
typeof null === "object"; // true
```

## Symbol

https://developer.mozilla.org/en-US/docs/Glossary/symbol

A value having the data type Symbol can be referred to as a "Symbol value". In a JavaScript runtime environment, a symbol value is created by invoking the function Symbol, which dynamically produces an anonymous, unique value. A symbol may be used as an object property.

Symbol can have an optional description, but for debugging purposes only.

A Symbol value represents a unique identifier. For example:

```js
// Here are two symbols with the same description:
let Sym1 = Symbol("Sym");
let Sym2 = Symbol("Sym");

console.log(Sym1 === Sym2); // returns "false"
// Symbols are guaranteed to be unique.
// Even if we create many symbols with the same description,
// they are different values.
```

Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert.

```js
let Sym = Symbol("Sym");
alert(Sym); // TypeError: Cannot convert a Symbol value to a string
```

to show a symbol, we need to call .toString() on it.

```js
let Sym = Symbol("Sym");
alert(Sym.toString()); // Symbol(Sym), now it works
```

Well-known symbols

The Symbol class has constants for so-called well-known symbols. These symbols let you configure how JS treats an object, by using them as property keys.

Examples of well-known symbols are: Symbol.iterator for array-like objects, or Symbol.search for string objects.

They are listed in the specification in the Well-known symbols table like

Symbol.iterator

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1; // yield - Pause and resume a generator function.
  yield 2;
  yield 3;
};

console.log([...myIterable]); // [1, 2, 3]
```

Global symbol registry

`Symbol.for(key: string)` searches in global symbol registry by key, creates new symbol when key cannot be found.

```js
console.log(Symbol.for("bar") === Symbol.for("bar")); // expected output: true

console.log(Symbol("bar") === Symbol("bar")); // expected output: false

const symbol1 = Symbol.for("foo");

console.log(symbol1.toString());
// expected output: "Symbol(foo)"
```

`Symbol.keyFor(sym: Symbol)` retrieves a shared symbol key from the global symbol registry.

```js
const sym = Symbol.for("foo");
Symbol.keyFor(sym); // 'foo'
Symbol.keyFor(Symbol("foo")); // undefined
Symbol.keyFor(Symbol.iterator); // undefined
```

# Adding / concat Strings and Numbers / null / undefined

```js
const x = 5 + 5; // returns 10 (number)
const x = 5 + NaN; // returns NaN
const x = "Hello" + 5; // returns "Hello5" (string)
const x = "5" + "5"; // returns "55" (string)
const x = "5" + 5; // returns "55" (string)
const x = "5" + undefined; // returns "5undefined" (string)
const x = null + "5"; // returns "null5" (string)
const x = null + 5; // returns 5 (number)
const x = undefined + 5; // returns NaN
const x = null + NaN; // returns NaN
```
