Hello, Javascript
=================

This directory contains some documents that will give you a quick introduction to javascript.

The focus is on working productively with javascript the language as it is today, though we do touch on a few things that are on the language’s horizon.

Below are my presentation notes for talking through everything in this directory.

## Language Basics

### Running Javascript

Javascript, originally designed as the scripting language for Netscape Navigator, is now embedded in all major browsers. Additionally, the javascript engines within browsers are increasingly used outside the browser, enabling javascript use at the command-line and as a scripting language within custom applications.

- In the browser (Chrome, Firefox, Safari, IE, Opera, etc.)
- Embedded within a non-browser application (e.g. [V8](https://developers.google.com/v8/), [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), or ChromiumEmbedded embedding).
- In the terminal with [Node](https://nodejs.org/), which exposes networking and filesystem features to javascript through V8. Or [Phantom](http://phantomjs.org/), which is a headless browser.
- In a web-application wrapping environment with [Electron (née Atom-Shell)](https://github.com/atom/electron) or [nw.js (née Node-Webkit)](https://github.com/nwjs/nw.js/), which provide a native application host for web applications.

### [Javascript Overview](javascript-overview.md)

- Objects/values/variables
- Functions
- Factory functions
- Arrays
- Iteration (functional approaches)
- Associative Containers (Objects!)
- Control flow
- Scope

### Ways of making objects

There are many ways to construct objects in javascript. Let’s review them for clarity.

#### Factory Functions

Factory functions are our preferred method for building objects. They are simply functions that create and return an object:

```javascript
function createPoint() {
  var point = {x: 0, y: 0};

  return point;
}

var point = createPoint();
console.log(point.x, point.y) // => 0, 0
```

Factory functions in javascript are great for a number of reasons: they are explicit about what is returned to the function caller, they take advantage of the function closure to store variables, and they don’t introduce any new concepts beyond functions and objects.

#### Constructor Functions

Constructor functions are a way to introduce explicit types to javascript. Types can be great and provide compilers/parsers opportunities for optimization, but javascript generally ignores types so they don’t provide a big benefit in this language. In general, don’t write your own constructor functions.

You will use constructors when creating objects of built-in types, which are backed by  typed objects managed by the browser in C or C++. Examples of these built-in objects include Dates and TypedArrays. Many libraries also use constructor functions for the types they define.

```javascript
function Point() {
  this.x = 0;
  this.y = 0;
}

var point = new Point();       // must call constructor function with new!
console.log(point.x, point.y); // => 0, 0
```

#### Class Definitions

When you really want types, the ES6 version of javascript (on the horizon) introduces classes. You can use classes and other ES6 features today by using a javascript compiler like [Babeljs](http://babeljs.io/) or [Traceur](https://github.com/google/traceur-compiler).

```javascript
class Point {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

var point = new Point();       // must call constructor function with new!
console.log(point.x, point.y); // => 0, 0
```
