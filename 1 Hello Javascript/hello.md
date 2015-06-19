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

### Ways of making objects

Many ways to structure things, will need to be aware of when some are used.

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

### About that global namespace thing

- Variables are scoped to the lifetime of the function body in which they are created (a closure).
- Create all your variables for a given scope in a single statement. This prevents surprises and enables minification.

```javascript
var thing = 1,
    another = 2,
    more = "Something",
    i, // used later
    obj = createObject();
```

- Don’t forget the `var` declaration when creating your variables; otherwise they will live in global scope.
- For related functions/variables, create a namespace with a function to avoid having many global variables.

```javascript
var namespace = (function (){
  var obj = {},
      kG = 6.674e-11;

  obj.doSomething = function () {};
  obj.universalConstant = function() { return kG; };

  return obj;
}());

namespace.doSomething();
namespace.universalConstant();
```
