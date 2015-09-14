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
  - Use only single-line comments -- if your comment spans multiple lines, comment out each line individually.
  - Place the comment on the line immediately preceding the thing being commented, NOT to the right of it.
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

Braces open on the same line.

```javascript
bonjour = function() {
  // function body...
}
```

## Quotes

Use single-quotes as much as possible. Use double-quotes only if it is nevessary to make a variable's value function properly or to make it more usable.

For example, when you create a string var that will contain single-quotes, it is better to use double-quotes to wrap the entire var's value, to avoid escaping single-quotes.

```javascript

var simpleVar = 'This is a simple string';

var contentThatNeedsDoubleQuotes = "<div style='top: 10px; left: 10px;'>Hello</div>";
$('#my-div').append( contentThatNeedsDoubleQuotes );

```

## Variable Naming

### In a Javascript file

?

  - Function parameters
  - Local vars
  - Globals

function ( _param ) {

}

### DOM elements

?

<div id='name-using-hyphens'></div>

## More

See sample code snippets for our preferred methods for creating classes, etc.


NOTES

is it useful to denote function params with a special char like '_'?
is it useful to denote member vars?
camelCase of underscore_naming for normal JS code?
