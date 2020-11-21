
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
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

