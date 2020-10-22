# Primitive data types

https://developer.mozilla.org/en-US/docs/Glossary/Primitive

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

Good to know : Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.

General Short Description :

There are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol.
There also is null, which is seemingly primitive, but indeed is a special case for every Object: and any structured type is derived from null by the Prototype Chain.

All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

## String

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
charAt(); //Returns the character at the specified index (position)
concat(); //Joins two or more strings, and returns a new joined strings
includes(); //Checks whether a string contains the specified string/characters
indexOf(); //Returns the position of the first found occurrence of a specified value in a string
match(); //Searches a string for a match against a regular expression, and returns the matches
repeat(); //Returns a new string with a specified number of copies of an existing string
replace(); //Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search(); //Searches a string for a specified value, or regular expression, and returns the position of the match
slice(); //Extracts a part of a string and returns a new string
split(); //Splits a string into an array of substrings
substr(); //Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring(); //Extracts the characters from a string, between two specified indices
toLowerCase(); //Converts a string to lowercase letters
toString(); //Returns the value of a String object
toUpperCase(); //Converts a string to uppercase letters
trim(); //Removes whitespace from both ends of a string
valueOf(); //Returns the primitive value of a String object
```

## Number

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

## Boolean

Boolean represents a logical entity and can have two values: true and false.

```js

```

## Undefined

```js

```

## NULL

```js

```

## Symbol

```js

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
