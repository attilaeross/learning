# Objects in JavaScript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

nearly all objects in JavaScript are instances of Object;

## There are different ways to create new objects:

### Define and create a single object, using an object literal.

Using an object literal, you both define and create an object in one statement.
An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
```

### Define and create a single object, with the keyword 'new'.

```js
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

If the value is null or undefined, it will create and return an empty object.

```js
const obj1 = new Object(null);
const obj2 = new Object(undefined);

console.log(obj1, obj2); //return {}{}
```

Otherwise, it will return an object of a Type that corresponds to the given value.

```js
const obj1 = new Object(11);
const obj2 = new Object("my Object");

console.log(obj1, obj2); //output [Number: 11] [String: 'my Object']
```

If the value is an object already, it will return the value.

### Define an object constructor, and then create objects of the constructed type.

The Object constructor creates an object wrapper for the given value.

```js
//object constructor function
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
//Objects of the same type are created by calling the constructor function with the new keyword:
let myFather = new Person("John", "Doe", 50, "blue");
let myMother = new Person("Sally", "Rally", 48, "green");
```

When called in a non-constructor context, Object behaves identically to new Object().

## Object Properties

A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.

The syntax for accessing the property of an object is:

```js
objectName.property; // person.age
objectName["property"]; // person["age"]
objectName[expression]; // x = "age"; person[x]

objectName.Property = value; //You can add new properties to an existing object by simply giving it a value. Assume that the object already exists
objectName.property = function () {}; //properties can be functions - called methods - we will see later
delete objectName.Property; // delete properties - delete properties from object
```

The delete keyword deletes both the value of the property and the property itself.
After deletion, the property cannot be used before it is added back again.
The delete operator is designed to be used on object properties. It has no effect on variables or functions.

!!! The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

All properties have a name. In addition they also have a value.
The value is one of the property's attributes.
Other attributes are: enumerable, configurable, and writable.

```js
const object1 = {
  property1: 42,
};
const descriptor = Object.getOwnPropertyDescriptor(object1, "property1");
console.log(descriptor); // output - { value: 42, writable: true, enumerable: true, configurable: true }
```

These attributes define how the property can be accessed (is it readable?, is it writable?)
In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).

( ECMAScript 5 has methods for both getting and setting all property attributes)

### Handy methods regarding properties in an object

Object.keys( obj ) - Returns an array of strings representing all the enumerable property names of the object.

```js
var obj = { name: "John", url: "https://johnresig.com/" };

print(Object.keys(obj).join(", "));
```

Object.getOwnPropertyNames( obj ) - Nearly identical to Object.keys but returns all property names of the object (not just the enumerable ones).

Object.create( proto, props ) - Creates a new object whose prototype is equal to the value of proto and whose properties are set via Object.defineProperties( props ).

Object.seal( obj ) - Sealing an object prevents other code from deleting, or changing the descriptors of, any of the object’s properties – and from adding new properties.

Object.isSealed( obj )

Object.isFrozen( obj ) - Freezing an object is nearly identical to sealing it but with the addition of making the properties un-editable.

## Object Methods

JavaScript methods are actions that can be performed on objects.
A JavaScript method is a property containing a function definition.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // output : John Doe
```

### The this Keyword

The JavaScript this keyword refers to the object it belongs to.

In a method, this refers to the owner object.

```js
fullName : function() {
  return this.firstName + " " + this.lastName;
}
```

When used alone, the owner is the Global object, so this refers to the Global object.
In a browser window the Global object is [object Window]:

```js
const x = this;
```

In a JavaScript function, the owner of the function is the default binding for this.
So, in a function, this refers to the Global object [object Window].

```js
function myFunction() {
  return this;
}
```

In a function, in strict mode, this is undefined.

```js
"use strict";
function myFunction() {
  return this;
}
```

In an event, this refers to the element that received the event.

```js
<button onclick="this.style.display='none'">Click to Remove Me!</button>
```

Methods like call(), and apply() can refer this to any object.

```js
var person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var person2 = {
  firstName: "John",
  lastName: "Doe",
};
person1.fullName.call(person2); // Will return "John Doe"
```

## Object Accessors (Getters / Setters)

Getters and setters allow you to define Object Accessors (Computed Properties).

```js
// Create an object:
var person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  get getLang() {
    return this.language;
  },
  set setLang(lang) {
    this.language = lang;
  },
};
console.log(person.getLang); // Display data from the object using a getter
person.setLang = "hu"; //Set language to 'hu'
console.log(person.getLang); // Display "new" data from the object using getter
```

Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes

What is the differences between these two ?
access fullName as a function: person.fullName().
access fullName as a property: person.fullName

The Object.defineProperty() method can also be used to add Getters and Setters:

```js
// Define object
var obj = { counter: 0 };

// Define setters
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
```

## Object Constructors

JavaScript does not have a class definition separate from the constructor. Instead, you define a **constructor function** to create objects with a particular initial set of properties and values.

Any JavaScript function can be used as a constructor.

Built-in JavaScript Constructors
JavaScript has built-in constructors for native objects:

```js
var x1 = new Object(); // A new Object object
var x2 = new String(); // A new String object
var x3 = new Number(); // A new Number object
var x4 = new Boolean(); // A new Boolean object
var x5 = new Array(); // A new Array object
var x6 = new RegExp(); // A new RegExp object
var x7 = new Function(); // A new Function object
var x8 = new Date(); // A new Date object
```

Own object constructor function

```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English / Hungarian";
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

personAttila = new Person("Attila", "Eross", 37, "brown");
consople.log(personAttila);
```

You cannot add a new property to an object constructor the same way you add a new property to an existing object, you must add it to the constructor function (new line and ;)

Your constructor function can also define methods but again this needs to be added to the constructor function...see above (cant be done same way as you add a new method to an existing object)

Did You Know?
As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster.

```js
var x1 = {}; // new object
var x2 = ""; // new primitive string
var x3 = 0; // new primitive number
var x4 = false; // new primitive boolean
var x5 = []; // new array object
var x6 = /()/; // new regexp object
var x7 = function () {}; // new function object
```

## Object Prototypes / Inheritance

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

JavaScript only has one construct: objects.
Each object has a private property which holds a link to another object called its prototype.
That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain

## Object Model

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

JavaScript is an object-based language based on prototypes, rather than being class-based.

Any object can be associated as the prototype for another object, allowing the second object to share the first object's properties / methods....

JavaScript does not have a class definition separate from the constructor. Instead, you define a **constructor function** to create objects with a particular initial set of properties and values.

Any JavaScript function can be used as a constructor.

### Inheritance with the prototype chain

#### Inheriting properties

JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

```js
// Let's create an object o from function f with its own properties a and b:
let f = function () {
  this.a = 1;
  this.b = 2;
};
let o = new f(); // {a: 1, b: 2}

// add properties in f function's prototype
f.prototype.b = 3;
f.prototype.c = 4;

// do not set the prototype f.prototype = {b:3,c:4}; this will break the prototype chain
// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype.
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.
```

#### Inheriting methods

When an inherited function (method) is executed, the value of this points to the inheriting object, not to the prototype object where the function is an own property.

```js
const o = {
  a: 2,
  m: function () {
    return this.a + 1;
  },
};

console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

var p = Object.create(o);
// p is an object that inherits from o

p.a = 4; // creates a property 'a' on p
console.log(p.m()); // 5
// when p.m is called, 'this' refers to p.
// So when p inherits the function m of o,
// 'this.a' means p.a, the property 'a' of p
```
