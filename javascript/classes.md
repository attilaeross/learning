
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 classalike semantics.

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

# Class declaration

```js
const p = new Rectangle(); // ReferenceError ---> declare class and then access it, otherwise code like the following will throw a ReferenceError

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

# Class expressions

can be named or unnamed

```js
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"
```

# Class body and method definitions

The body of a class is the part that is in curly brackets {}. This is where you define class members, such as methods or constructor.

The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

```js
//Class declaration
class Rectangle {
  //The constructor method is a special method for creating and initializing an object created with a class.
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

Static methods and properties

The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. 

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

Instance properties must be defined inside of class methods

Static (class-side) data properties and prototype data properties must be defined outside of the ClassBody declaration:

```js
Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
```

Public field declarations

```js
class Rectangle {
  //By declaring fields up-front, class definitions become more self-documenting, and the fields are always present.
  // can be predefined with default value or without
  height = 0;
  width;
  constructor(height, width) {    
    this.height = height;
    this.width = width;
  }
}
```

Private field declarations

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {    
    this.#height = height;
    this.#width = width;
  }
}
```

It's an error to reference private fields from outside of the class; they can only be read or written within the class body. By defining things which are not visible outside of the class, you ensure that your classes' users can't depend on internals, which may change version to version.

Private fields cannot be created later through assigning to them, the way that normal properties can.

# Sub classing with extends

The extends keyword is used in class declarations or class expressions to create a class as a child of another class.

```js
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
    //if not called --> ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```
NOTE: If there is a constructor present in the subclass, it needs to first call super() before using "this".

One may also extend traditional function-based "classes":

```js
// function based class ---> Classes are in fact "special functions"
function Animal (name) {
  this.name = name;  
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
// For similar methods, the child's method takes precedence over parent's method
```

Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, you can instead use Object.setPrototypeOf():

```js
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.
```

# Species

You might want to return Array objects in your derived array class MyArray. The species pattern lets you override default constructors.

For example, when using methods such as map() that returns the default constructor, you want these methods to return a parent Array object, instead of the MyArray object. The Symbol.species symbol lets you do this:

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}

let a = new MyArray(1,2,3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
```

# Super class calls with super

The super keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance.

```js
class Cat {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak(); // calling super class`s corresponding method 
    console.log(`${this.name} roars.`);
  }
}

let l = new Lion('Fuzzy');
l.speak(); 
// Fuzzy makes a noise.
// Fuzzy roars.
```