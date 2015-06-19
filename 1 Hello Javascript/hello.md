Hello, Javascript
=================

This directory contains some documents that will give you a quick introduction to javascript.

The focus is on working productively with javascript the language as it is today, though we do touch on a few things that are on the language’s horizon.

Below are my presentation notes for talking through everything in this directory.

## Language Basics

### [Javascript Overview](javascript-overview.md).

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

- Factory functions.
  - Our preferred method.
  - Simply a function that returns an object.
- Constructor functions.
  - Use the `new` keyword.
  - `this` keyword binding to function calls.
  - Functions named with InitialCapitals.
  - Built-in types are generally accessed this way.
- Classes.
  - Available in ES6 (not yet).
  - Usable through javascript compilers like [Babeljs](http://babeljs.io/)
  - Class definitions for Constructor functions.
  - Constructed with `new` keyword.
  - `this` keyword binding to function calls.
