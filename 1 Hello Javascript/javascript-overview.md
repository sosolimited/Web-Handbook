---
title: "Javascript: The Essential Parts"
layout: default
---

# Javascript: The Essential Parts

Taken from [David’s javascript guide for Bloomington Code School](https://github.com/sansumbrella/BCS/blob/gh-pages/2014/javascript-overview.md).

This provides an overview of the main concepts in javascript. You can build just about anything with functions and objects as described below.

In the wild, you will see many ways of working with javascript. It is important to eventually understand the different ways people use the language and different language features they like. However, I prefer to use only a few parts of the language: the ones I find intuitive and fun to work with.

## Additional references and sources for this material

Douglas Crockford has written and spoken a lot [about JavaScript](http://javascript.crockford.com), and I pull the main ideas for working with javascript from what Crockford considers “[The Good Parts](http://www.amazon.com/exec/obidos/ASIN/0596517742/wrrrldwideweb).”

For a comparison of prototypal and factory-based object creation, see a post by [Eric Elliot](http://ericleads.com/2013/01/javascript-constructor-functions-vs-factory-functions/). That post makes the argument for factory functions (which we describe below) over constructors.

### Further reading:
[Javascript: The Good Parts](http://www.amazon.com/exec/obidos/ASIN/0596517742/wrrrldwideweb)
[Speaking Javascript](http://speakingjs.com/es5/index.html)

## What We’re Working With

### Objects and their properties

Objects are the essential building blocks in javascript. They are a collection of named properties.

Let’s look at how we create objects and give them properties.

```javascript
// Create an object with no properties and keep a reference to it in the variable named `object`.
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

You tell a function object to perform its instructions by placing parentheses`()`—also known as the call operator—after its name.

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

If you want to create a lot of objects that have the same basic properties, you can do that with a function. We call these functions factory functions because they create objects.

```javascript
// Function to create an object with default properties.
function createObject(name) {
  var obj = {},
      x = 20,
      y = 20,
      name = name || "Default Name";

  function announce() {
    console.log("Introducing myself: " + name);
    console.log("My position is: ", x, y);
  }

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
    console.log("My position is: ", x, y);
  }

  obj.doSomething = announce;

  return obj;
}

var object = createObject({ name: "Some Name" });

```

The variables created inside the factory are accessible to the functions created inside the factory. The outside world has access to the pieces we make accessible as properties of the returned object.

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

// Call function with each item and their index.
// You might want the index to compare previous/next items or to position items.
array.forEach(function (item, index) {
  item.x = index * 100;
})
```

Array.forEach is very powerful, and you can do quite a lot with it. For certain situations, other Array functions can better model what you want to do. Below are some examples.

```javascript
// Turn an array into a single value using reduce()
var largest = array.reduce(function (a, b) {
  return Math.max(a, b);
}, 0);

// Equivalent to reduce using forEach()
var largest = 0;
array.forEach(function (element) {
  largest = Math.max(largest, element);
});


// Create values in a new array from the existing array using map().
var other = array.map(function (element) {
  return element * 2;
});

// Equivalent to map using forEach()
var other = [];
array.forEach(function (element) {
  other.push(element * 2);
});


// Create a new array that contains some elements from the first array using filter().
var smaller = array.filter(function (element) {
  return element < 5;
});

// Equivalent to filter using forEach()
var smaller = [];
array.forEach(function (element) {
  if (element < 5) {
    smaller.push(element);
  }
});
```

Occasionally, you need to access elements in an array by their index. This may be the case if you want the first (array[0]) or last (array[array.length-1]) element of the array. Other times, you may need to iterate through two or more arrays simultaneously.

While you could add a library that gives you the `zip` function to tie two (or more) arrays together and `forEach` through that, we will stick with the core language features. Also, using the index-based for-loop in as below saves us the creation of a large object and three extra array traversals compared to a zip (unless there is some cleverness underlying the zip object).

```javascript
var i,
    end = Math.min(arrayOne.length, arrayTwo.length, arrayThree.length);
for (i = 0; i < end; i += 1) {
  var one = arrayOne[i],
      two = arrayTwo[i],
      three = arrayThree[i];
  // do something with all three.
}
```

### Associative Containers: Call them by Name

Javascript objects behave similarly to dictionaries/maps. Unfortunately, they also come loaded with a bunch of baggage from the Object prototype. This can cause unexpected errors when using them to count the frequency of different words, for example. Fortunately, ES5 (the common version of javascript) provides a way to create an object without a prototype. These objects then behave just like an associative container.

Note that you are not limited to using strings as keys. You can also use an object as a key to information that you may not want to store in the object itself.

```javascript
// Create a dictionary (an object with no prototype)
var dict = Object.create(null);

dict["key"] = value;
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

### A Note on Scope

Variables in javascript are scoped to the lifetime of the function body in which they are created (a closure). This can mean some surprising things; variables declared anywhere within a function body are interpreted by javascript as if they were declared at the top of that scope. To avoid surprises, we declare all our variables for a given scope in a single statement at the beginning of that scope. In addition to preventing surprises, this enables better minification.

```javascript
var thing = 1,
    another = 2,
    more = "Something",
    i, // used later
    obj = createObject();
// Now use those variables
…
```

The `var` keyword is critical when creating your variables; without it, variables will live in the global scope. Accidentally storing something in global scope can lead to lots of confusion when different functions are modifying the same data.

To group related functions and variables, create a namespace with a function to avoid having many global variables. You can also make pseudo-constants within a namespace by only exposing an accessor to a scoped variable.

Notice how the namespace is just like a factory function. Only in this case we immediately evaluate it and return since we don’t need to create the namespace more than once.

```javascript
var namespace = (function (){
  var obj = {},
      kG = 6.674e-11;

  obj.doSomething = function () { … };
  obj.universalConstant = function() { return kG; };

  return obj;
}());

namespace.doSomething();
namespace.universalConstant(); // => 6.674e-11
```

### The Future

ES6 introduces classes to Javascript. While browser support for ES6 is a ways out, you can use javascript compilers to use many of the new language features now.

When building big libraries, using one of these compilers might be a real boon. When you don’t want to set up a big build environment, the lambda capture approach to building objects is the way to go.

[Babel](https://babeljs.io/)
[Traceur](https://github.com/google/traceur-compiler)
