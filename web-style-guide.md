Soso Web Style Guide
==============

This style guide borrows some elements from our Soso C++ Style Guide, but many things are different to keep it as simple as possible.


## Sublime Text Setup

Open Sublime preferences and add the following options to the json:

```json
"indent_using_spaces": false,
"tab_size": 2,
"trim_trailing_white_space_on_save": true
```

## Comments

  - Use only double slashes `//` to comment code.
  - Use only single-line comments; if your comment spans multiple lines, comment out each line individually.
  - Place the comment on the line immediately preceding the thing being commented, EXCEPT when you declare new vars, then you can write a very short comment to the right of it.
  - When you create a new file, add a commented header with a description of what the file does.
  - You MUST absolutely add a comment above every function you write, even if it is very brief.
  - Keep comments short and specific. Re-read yourself and replace as many generic or abstract words as possible with specific words that relate to the current function, file, etc.

```javascript
// FileName.js
// Description:
// This file sets up some graphs.

// Really long comments should be broken across multiple lines.
// Each line should be individually commented-out.
// This helps set the comment apart as a unit in the code.
//
// You can even have "paragraphs" in your comments if you add empty lines.
// Don't use the block-comment style /**/, as it can play tricks on you.

var that = {},
	graphName,				// Every graph has a name which allows to fetch it.
	graphData,				// Every graph has data pre-formatted for graph drawing.
	svg;							// Outer-most SVG container for the current graph.

// Explain this function...
bonjour = function() {
  // Copy our data...
  ...
  // Set up some important stuff...
  ...
  // Draw to screen...
  ...
}
```


## Braces

  - Braces open on the same line.

```javascript
var bonjour = function() {
  // function body...
}
```

  - If/Else statements put the else on the same line as the previous bracket.

```javascript
if (turtlesAreAwesome === true) {

} else {

}
```


## Equal operators

  - Always use the `===` and `!==` operators, not the `==` and `!=` ones, because the latter do type coercion which can produce unexpected results.


## Quotes

  - Use single-quotes as much as possible.
  - Use double-quotes only inside single-quote values when necessary.

```javascript

// Use single-quotes normally.
yAxisContainer = svg.insert('g', ':first-child')
	.attr('id', 'y-axis-container');

// Simple string uses single-quotes.
var simpleStr = 'This is a simple string';

// Complex string using double-quotes inside single-quotes.
var contentThatNeedsDoubleQuotes = '<div style="top: 10px; left: 10px;">Hello</div>';
$('#my-div').append( contentThatNeedsDoubleQuotes );

```


## Variable Naming


### In a Javascript file

  - Use `camelCase` for variable and function names
  - Class names: start with an uppercase letter

```javascript
var Inventor = function() {
  // class body...
}
```

  - Function parameters: start with an `i`

```javascript
var myFunction = function(iParam1, iParam2){};
```

  - Globals: start with a `g`

```javascript
var gPatentObjects;
```


### DOM elements

Name vars that are used in the DOM (ie. for element ID's and classes that also appear in the CSS) using hyphens `-`.

```javascript
<div id='name-using-hyphens'></div>
```


## More

See sample code snippets for our preferred methods for creating classes, etc.


