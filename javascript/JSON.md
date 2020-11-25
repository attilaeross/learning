# JSON

What is JSON?
JSON stands for JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is "self-describing" and easy to understand
JSON is language independent *

Why use JSON?

Since the JSON format is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

JavaScript has a built in function to convert a string, written in JSON format, into native JavaScript objects:

JSON.parse()

So, if you receive data from a server, in JSON format, you can use it like any other JavaScript object.

JSON Syntax Rules

JSON syntax is derived from JavaScript object notation syntax:
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays

JSON Data - A Name and a Value

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

```js
"name":"John"
```
## JSON Keys
In JSON, keys must be strings, written with double quotes:

```js
//JSON
{ "name":"John" }
In JavaScript, keys can be strings, numbers, or identifier names:

//JavaScript
{ name:"John" }
```
## JSON Values

In JSON, values must be one of the following data types:

a string - In JSON, string values must be written with double quotes. in JS can be single / double quotes + backtick
a number
an object (JSON object)
an array
a boolean
null

In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:

a function
a date
undefined

## JSON Strings
```js
{ "name":"John" }
```

## JSON Numbers
Numbers in JSON must be an integer or a floating point.

```js
{ "age":30 }
```

## JSON Objects
Values in JSON can be objects.

```js
{
"employee":{ "name":"John", "age":30, "city":"New York" }
}
```
Objects as values in JSON must follow the same rules as JSON objects.

## JSON Arrays
Values in JSON can be arrays.

```js
{
"employees":[ "John", "Anna", "Peter" ]
}
```
## JSON Booleans
Values in JSON can be true/false.

```js
{ "sale":true }
```
## JSON null
Values in JSON can be null.

```js
{ "middlename":null }
```

## `JSON.parse()`

A common use of JSON is to exchange data to/from a web server.
When receiving data from a web server, the data is always a string. 
Parse the data with JSON.parse(), and the data becomes a JavaScript object.

```js
const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
console.log(obj); //{ name: 'John', age: 30, city: 'New York' }
```

### Exceptions on PARSE

#### Parsing Dates

Date objects are not allowed in JSON.
If you need to include a date, write it as a string.
You can convert it back into a date object later

```js
const text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
console.log(obj); //{ name: 'John', birth: '1986-12-14', city: 'New York' }
```
notice birth is a string and not a Date obj

how to solve ?
1st option 

```js
const text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
console.log(obj); //{ name: 'John', birth: '1986-12-14', city: 'New York' }
obj.birth = new Date(obj.birth);
console.log(obj); // { name: 'John', birth: 1986-12-14T00:00:00.000Z, city: 'New York' }
```
2nd option
We can use the second parameter, of the JSON.parse() function, called reviver.
The reviver parameter is a function that checks each property, before returning the value.
```js
const text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});
console.log(obj); //{ name: 'John', birth: 1986-12-14T00:00:00.000Z, city: 'New York' }
```

#### Parsing Functions
Functions are not allowed in JSON.
If you need to include a function, write it as a string.
You can convert it back into a function later:

Convert a string into a function:

```js
const text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj = JSON.parse(text);
console.log(obj); // { name: 'John', age: 'function () {return 30;}', city: 'New York' }
console.log(obj.age()); // TypeError: obj.age is not a function
obj.age = eval("(" + obj.age + ")");
console.log(obj); // { name: 'John', age: [Function], city: 'New York' }
console.log(obj.age()); // will return 30 as now a function
```

## `JSON.stringify()`

A common use of JSON is to exchange data to/from a web server.
When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a string with JSON.stringify().

```js
const obj = { name: "John", age: 30, city: "New York" };
let arr = [ "John", "Peter", "Sally", "Jane" ];
let myJSON = JSON.stringify(obj);
console.log(myJSON); //{"name":"John","age":30,"city":"New York"}
myJSON = JSON.stringify(arr);
console.log(myJSON); //["John","Peter","Sally","Jane"]

```
myJSON is now a string, and ready to be sent to a server

### Exceptions on JSON `stringify()`

#### Stringify Dates

```js
const obj = { name: "John", today: new Date(), city : "New York" };
const myJSON = JSON.stringify(obj);
console.log(myJSON); //{"name":"John","today":"2020-11-20T11:54:03.176Z","city":"New York"}
```

You can convert the string back into a date object at the receiver.

#### Stringify Functions

```js
const obj = { name: "John", age: function () {return 30;}, city: "New York"};
const myJSON = JSON.stringify(obj);
console.log(myJSON); //{"name":"John","city":"New York"}
```

The `JSON.stringify()` function will remove any functions from a JavaScript object, both the key and the value

This can be omitted if you convert your functions into strings before running the JSON.stringify() function.

```js
const obj = { name: "John", age: function () {return 30;}, city: "New York" };
obj.age = obj.age.toString();
const myJSON = JSON.stringify(obj); 
console.log(myJSON); //{"name":"John","age":"function () {return 30;}","city":"New York"}
```

IMPORTANT!!! If you send functions using JSON, the functions will lose their scope, and the receiver would have to use `eval()` to convert them back into functions.

## JSON Object Syntax

```js
{ "name":"John", "age":30, "car":null }
```

JSON objects are surrounded by curly braces {}.

JSON objects are written in key/value pairs.

Keys must be strings, and values must be a valid JSON data type (string, number, object, array, boolean or null).

Keys and values are separated by a colon.

Each key/value pair is separated by a comma.

### Accessing JSON Object Values

```js
const myObj = { "name":"John", "age":30, "car":null };
const x = myObj.name; 
//OR
x = myObj["name"];
```

### Looping an JSON Object

```js
const myObj = { "name":"John", "age":30, "car":null };
for (x in myObj) {
  console.log(x); // to get properties 
  console.log(myObj[x]); // to get properties 
}
```

### Nested JSON Objects

```js
const myObj = {
  "name":"John",
  "age":30,
  "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
  }
 }

let x = myObj.cars.car2;
// or:
let x = myObj.cars["car2"];
```

### Modify JSON Values

```js
myObj.cars.car2 = "Mercedes";
//or
myObj.cars["car2"] = "Mercedes";
```

### Delete Object Properties

```js
delete myObj.cars.car2;
```

## Arrays as JSON Objects

Arrays in JSON are almost the same as arrays in JavaScript.
In JSON, array values must be of type string, number, object, array, boolean or null.

```js
const myObj {
"name":"John",
"age":30,
"cars":[ "Ford", "BMW", "Fiat" ]
}

const x = myObj.cars[0]; //access the array values by using the index number
```

### Looping Through an Array

```js
let x;
//for in loop
for (i in myObj.cars) {
  x += myObj.cars[i];
}
//for loop
for (i = 0; i < myObj.cars.length; i++) {
  x += myObj.cars[i];
}
```

### Nested Arrays in JSON Objects

```js
const myObj = {
  "name":"John",
  "age":30,
  "cars": [
    { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
    { "name":"BMW", "models":[ "320", "X3", "X5" ] },
    { "name":"Fiat", "models":[ "500", "Panda" ] }
  ]
 }

//looping trough done as below
let x = '';
for (i in myObj.cars) {
  x += '\n' + myObj.cars[i].name + ' ';
  for (j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + ' ';
  }
} 

console.log(x); 
/*Output :
Ford Fiesta Focus Mustang 
BMW 320 X3 X5 
Fiat 500 Panda */ 

//Use the index number to modify an array
 myObj.cars[1] = "Mercedes";

 //Use the delete keyword to delete items from an array
delete myObj.cars[1];
 ```


