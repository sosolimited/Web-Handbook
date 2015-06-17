# Javascript: The Essential Parts

Taken from [David’s javascript guide for Bloomington Code School](https://github.com/sansumbrella/BCS/blob/gh-pages/2014/javascript-overview.md).

This provides an overview of the main concepts in javascript. You can build just about anything with functions and objects as described below.

In the wild, you will see many ways of working with javascript. It is important to eventually understand the different ways people use the language and different language features they like. However, I prefer to use only a few parts of the language: the ones I find intuitive and fun to work with.

Douglas Crockford has written and spoken a lot [about JavaScript](http://javascript.crockford.com), and I pull the main ideas for working with javascript from what they consider “[The Good Parts](http://www.amazon.com/exec/obidos/ASIN/0596517742/wrrrldwideweb).”

## What We’re Working With

### Objects and their properties

Objects are the essential building blocks in javascript. They are a collection of named properties.

Let’s look at how we create objects and give them properties.

```javascript
// Create an object with no properties.
var object = {};

// An Object’s properties can be of any type.
// Let’s add some to our empty object.

// Numbers
object.x = 10;
object.y = 20.5;

// Text (called Strings in programming)
object.name = "First Object";

// We can also create objects with some initial properties.
var otherObject = { x: 5, y: 5, name: "Friendly Object" };

// Properties can be other objects, too
object.friend = otherObject;
```

So, objects let us store information in javascript. Now, how can we tell javascript to do things?

### Functions

Functions are objects that store instructions for completing an action. They are the verbs that let us perform actions with javascript.

You can tell the function object to perform its instructions by placing parentheses '()' after its name.

```javascript
// A function that doesn’t do anything
function doNothing() {
  // Our list of instructions goes inside the function block (enclosed by curly braces '{}').
}

// Run the instructions inside of our doNothing function.
doNothing();

// A function that prints the name of the object given to it to the console.
function announceObject(obj) {
  console.log("Introducting the object: " + obj.name);
}

// Run the instructions inside of announceObject with our first object from above:
announceObject(object);
```

### Creating Many Similar Objects

If you want to create a lot of objects that have the same basic properties, you can do that with a function.

```javascript
// Function to create an object with default properties.
function createObject(name) {
  var obj = {},
      x = 20,
      y = 20,
      name = name || "Default Name";

  function announce() {
    console.log("Introducing myself: " + name);
  }

  obj.x = x;
  obj.y = y;
  obj.announce = announce;

  return obj;
}

// Function to create an object with passed-in properties
function createObject(options) {
  var obj = {},
      x = options.x || 20,
      y = options.y || 20,
      name = options.name || "Default Name";

  function announce() {
    console.log("Introducing myself: " + name);
  }

  obj.x = 10;
  obj.y = 20;
  obj.name = name;
  obj.doSomething = announce;

  return obj;
}

var object = createObject({ name: "Some Name" });

```

### Arrays: Keeping Track of Many (Similar) Things

Arrays are lists of things in javascript. They are a special type of Object that keeps a numbered list of things instead of having a lot of named properties.

```javascript
// Create an empty array.
var array = [];

// Put items in the array.
array.push(1);
array.push(2);

// Create an array with initial values.
var array = [1, 2, 3, 4, 5];

// Create an array of objects.
var objectArray = [ {name: "Zero"}, {name: "One"}, {name: "Ni"}]

// Get a single value out of an array.
// Array values can be accessed as offsets from the beginning of the array.
// We use square brackets to get elements out of an array by index.
array[0]; // returns 1;
array[1]; // returns 2;
```

Once you have an array of items, you can use functions to do things with every item in that array. Arrays define a number of special functions that help you apply your own functions to every item in the array.

```javascript
// Call function with each item in the array.
array.forEach(function (item) {
  console.log("Item: ", item);
});
```

Array.forEach is very powerful, and you can do quite a lot with it. For certain situations, other Array functions can better model what you want to do. Below are some examples.

```javascript
// Find the largest number in an array using reduce()
var largest = array.reduce(function (a, b) {
  return Math.max(a, b);
}, 0);

// Equivalent using forEach()
var largest = 0;
array.forEach(function (element) {
  largest = Math.max(largest, element);
});


// Create a new array from the first array using map().
var other = array.map(function (element) {
  return element * 2;
});

// Equivalent using forEach()
var other = [];
array.forEach(function (element) {
  other.push(element * 2);
});


// Create a new array that contains some elements from the first array using filter().
var smaller = array.filter(function (element) {
  return element < 5;
});

// Equivalent using forEach()
var smaller = [];
array.forEach(function (element) {
  if (element < 5) {
    smaller.push(element);
  }
});
```
### Logic Structures and Comparison

Sometimes, you want your program to do things only when certain conditions are met. Javascript provides a handful of useful logical structures for handling those situations.

Use `if` when you want to do something if some condition is true.
If you want to do something if a condition is not true, you can use `!` to indicate the opposite of what follows.
```javascript

// `if` does something once if a condition is true.
if (someNumber === 5) {
  doSomething();
}
else {
  // If the condition is false, do something else.
}

// `while` does something repeatedly until a condition is reached.
// Here, we fill up an array with 100 objects.
var array = [];
while(array.length < 100) {
  array.push({ value: (array.length + 1) });
}

```

Notice the similarity in structure between if() { ... }, while() { ... }, and function () { ... }. They all store instructions inside the curly braces. They differ in when you enter the curly braces to run those instructions. Also, of the three, only function is an object that you can store in a variable.