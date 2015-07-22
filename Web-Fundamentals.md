---
title: Web Fundamentals
layout: default
---

> **Contents**
> [Why create for the web?](#why-create-for-the-web)
> [The Box Model](#the-box-model)
> [Shaping the Boxes: Structure and Style](#shaping-the-boxes-structure-and-style)
> [Web Infrastructure](#web-infrastructure)
> [HTML Basics](#html-basics)
> [CSS Basics](#css-basics)
> [CSS Layout and Positioning](#css-layout-and-positioning)
> [CSS Interactivity and Transitions](#css-interactivity-and-transitions)
> [Resources](#resources)

# Why create for the web?

At Soso, we find ourselves utilizing web technologies on a regular basis. Much of our development hours are spent building for the web. Interactive visualizations, content management systems driving C++ apps, and backend configuration pages are a handful of recent projects we made to run in web browsers.

Often we pick the web as a platform for any number of reasons: ease of development and prototyping, large amount of pre-existing software we can utilize in our own work, the level of universal access the web provides, compatibility across a large number of devices, and the general richness of the web toolset.

When making things for the web, you will utilize three languages that are more or less commonly understood across all modern web browsers: HTML, CSS, and Javascript. This introductory lesson will focus on the first two, HTML and CSS, with the goal of explaining the building blocks of web development. We want to walk away with some idea of what is going on under the hood in our browser window and how things are made to look the way they do.

# The Box Model

Before diving into the specifics of HTML and CSS, it is important to get an idea of how webpages are compartmentalized. You can think of every element on a webpage as contained inside of a box. Even elements that do not visibly have a box bounding them (e.g. an list item in a bulleted list), are contained within a box. Paragraphs, images, horizontal lines, links, and italicized text to name a few, are contained within a box.

The box containing each individual element on the page has special properties that change both its appearance and its relationship with other boxes in its vicinity. When factoring in all of the properties, you can figure out how much space the box (element) takes up on the page.

![box model](http://i.imgur.com/6k8HKib.gif)

(image credit: http://www.w3schools.com/css/css_boxmodel.asp)

This concept is known as the "box model." The width and height set the size of the box. The margin maintains space around the box so other adjacent boxes do not touch it (not always this simple but we will ignore the complexities for now). The padding maintains space between the content inside of the box (e.g. text, images, or other boxes) and the edge defined by the box's width and height, the edge of which is sometimes delineated with a border. The border is an optional customizable line that can appear between the padding and the margin.

Boxes have content like text or images inside of them, or they can contain other boxes. You can build a hierarchical structure of containing elements to form complex web page layouts. As a quick demonstration of the hierarchical complexity the organization of these "boxes" can take in webpages, see below screen shot for a representation of the element structure in Google search results:

![google boxes](http://i.imgur.com/aPHZvKA.jpg)

# Shaping the Boxes: Structure and Style

Now that we know web pages have a bunch of boxes (called elements) inside of them, how do we define and customize these elements ourselves? What forms the "code" of a webpage?

In order to shape the look of a webpage, you can think of your work divided between two major areas: structure (HTML) and style (CSS). When you build structure on a webpage you say, "Create paragraph with such and such text inside of it", or, "create a 3 by 3 grid of boxes", or, "create a menu with 10 items, each with a link to a specific page". Style is concerned with the background color of the menu containing box, the height of the menu containing box, the font size and font family of the menu items, and the color the links change to when you hover over them.

HTML is a language for building the structure of the web page, both for content you can read like paragraphs of text, and for creating hierarchical relationships which allow you to achieve your designs (e.g. put the menu in this box, which is in another box on the top side of the page which sits in another box that contains the body content).

CSS is a language for specifically "targeting" and then styling HTML elements. Width, height, background color, typography, margin, padding, hover effects, transitions, etc.

The general idea is to separate the definition of the document's structure, or content, from the definition of its style. or presentation. Internally, the content and style is stored in a tree structure called the DOM (document object model), the structure of which is partially determined by the hierarchical relationships you set up in your HTML.

# Web Infrastructure

As a final step before looking at real HTML and CSS code, it is worth clarifying how web pages are delivered to your web browser. HTML and CSS are text languages that you will write in files. Your web browser must gain access to these files so you can see how your code is shaping up.

Typically, websites divide the HTML and CSS into multiple files, but it is also possible to write everything in a single file. You can either access the file(s) locally (e.g. going to File -> Open in your web browser and directly choose an HTML file on your HD), or you can access files remotely. Remote access requires the files live on a web server somewhere, accessible with a URL. While developing for the web on your local computer, you can run a small web server to host them for you, and then access the pages with a local URL like http://127.0.0.1.

For this lesson, we'll open files locally, keeping both the HTML and CSS in a single file.

# HTML Basics

The HTML document of a web page will contain your element structure, as well as reference any CSS you have made to style those elements. When building the structure of the HTML document you will utilize tags, which look like `<p> </p>` or `<body> </body>`. Most of the time, when you open a tag you must close it. Sometimes you'll use attributes within the tag, which look like `<a class="menu-link"></a>`. There are a number of standard attributes browsers will recognize, but you can also create your own.

Most pages start with a kind of scaffolding that is commonly used across many sites. It is more or less minimum boiler plate structure you need before writing in other elements.

```html
<!doctype html>
<html>
    <head>
        <title>Your Page Title</title>
    </head>
    <body>
        <!-- most of your work will go inside the body element. -->
        <!-- These are comments - ignored by the browser -->
    </body>
</html>
```

As mentioned in previous sections, the page structure is hierarchical, which means elements can have a nested structure where they contain other elements in addition to text content. There are a number of standard HTML elements you can use to build the page. Some have very specific uses which browsers will render with pre-set styles. For brevity, the below code snippets are without any outer boiler plate structure, so just know that they are intended to be placed inside of the `<body>` element as described in the snippet above.

```html
<p>This is a paragraph tag which wants to hold text content.</p>
```

```html
<h1>This is a Heading Tag</h1>
<h2>This is a Sub-heading</h2>
```

```html
<a href="http://sosolimited.com">Visit soso.com with this link element</a>
```

```html
<!-- you can make ordered lists -->
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
</ol>
```

Other HTML elements have a more generalized purpose, so you can use them to contain either text or other elements:

```html
<div>
    <p>This paragraph is inside a div block element.</p>
    <p>And this one is inside of the same containing div element.</p>
</div>
```

```html
<div>
    <span>great</span><span>for</span><span>inline</span><span>elements</span>
</div>
```

As mentioned before, elements can have attributes. A common attribute you'll find yourself using is the `class` attribute, which identifies a family of elements you would like to share CSS settings. Another common attribute is `id`, which is similar to `class` but intended to be used on a single element once.

```html
    <div id="container">
        <p class="body-text">These paragraphs belong to the same class</p>
        <p class="body-text">They can share style settings</p>
        <p class="body-text">Their containing element has an id which can also be targeted when styling</p>
    </div>
```

`id` and `class` have other uses beyond CSS, but we'll focus their use with styling.

> <a href="http://htmldog.com/guides/html/beginner/" target="_blank">HTML Tutorial</a>
> ![TUTORIAL](images/links/tag_tutorial.png)
> <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction" target="_blank">Introduction to HTML</a>
> ![TUTORIAL](images/links/tag_tutorial.png)
> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference" target="_blank">Extensive Reference to HTML Elements and Their Attributes</a>
> ![REFERENCE](images/links/tag_reference.png)

# CSS Basics

CSS is the language used to style HTML elements on the page. There are three different ways you can define CSS:

First, you can reference an external CSS file inside of the `<head>` element, which will look something like `<link rel="stylesheet" href="mysite.css">`. The browser will automatically download the `mysite.css` file and match any CSS settings to elements in the page.

Second, you can declare all of the CSS settings inside of the HTML document, in the `<head>` element. Your structure would look something like:

```html
<!doctype html>
<html>
    <head>
        <title>Your Page Title</title>
        <!-- one method is to include CSS in an external file -->
        <link rel="stylesheet" href="mysite.css">

        <!-- another method embeds the CSS directly in the HTML file -->
        <style>
            /* your CSS goes here */
        </style>
    </head>
    <body>
    </body>
</html>
```

Finally, you can write CSS inside of the elements themselves using the `style` attribute:

`<p style="">My Styled Paragraph</style>`

We'll focus on the 2nd method of including style because when can easily see everything in one file for the purposes of instruction, but using external CSS files is recommended as projects grow is size and complexity.

Now that we know where to put the style code, what does it look like? CSS is composed of **declarations**, and each declaration uses a **selector** and a list of **properties**. An example declaration:

```css
p {
    font-size: 16px;
    color: #AAAAAA;
}
```

`p` is the selector, and everything inside of the brackets are properties. Properties have the syntax `property-name: value;`. The idea behind creating CSS declarations is you want to target specific HTML elements on the page using the selector, and change those element's visual and spatial characteristics by adding properties.

Selectors can be very general (e.g. target every paragraph on the page with a selector like `p`) or very specific (e.g. target only the div with id `container` with a selector like `#container`). Three basic ways of creating a selector:

```css
/* you can target element tag names */
p {
    color: blue;
}

div {
    background-color: red;
}

li {
    font-family: sans-serif;
}

/* or you can target elements marked with the html class attribute */
.my-class {
    font-size: 32px;
}

/* or you can target elements marked with the html id attribute */

#container {
    width: 100%;
}
```

CSS selectors can get even more specific. A couple of examples:

```css
/* select every <p> tag with class "body-text" */
p.body-text {
    color: white;
}

/* select any element(s) with class "body-text" that is a direct child
   of the element with id "container" */
#container > .body-text {
    color: white;
}

/* select any element(s) with the class "body-text" that exists somewhere
   below the element with id "container", not necessarily a direct child */
#container .body-text {
    color: white;
}

/* select the <li> element with class "menu-item" which is the first child
   of its type within its parent element */
li.menu-item:first-child {
    margin-left: 0;
}

/* select any elements that have both "menu-item" and "big" classes set */
.menu-item.big {
    font-size: 21px;
}
```

Once you write the CSS selector in your declaration, you can set individual properties you'd like to change for the selected group of elements. A few common properties are shown in the examples above, which represent a very small percentage of the total number of CSS properties available for you to change. The properties change visual things like typography settings, background color, borders, and shadows, but they can also control the size of elements and how elements flow together on the page.

One final introductory note regarding CSS: CSS stands for `cascading style sheets`. The cascading refers to the fact that, because HTML elements can have the same properties set multiple times from different files or locations, there are rules for assigning priority to these multiple declarations.

> <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors" target="_blank">Guide to CSS Selectors</a>
> ![TUTORIAL](images/links/tag_tutorial.png)

> <a href="http://www.htmldog.com/guides/css/beginner/" target="_blank">Beginner's Guide to CSS</a>
> ![TUTORIAL](images/links/tag_tutorial.png)

> <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started" target="_blank">Getting Started With CSS</a>
> ![TUTORIAL](images/links/tag_tutorial.png)

# CSS Layout and Positioning

Although HTML allows you to define element hierarchy in your page, hierarchy alone is not enough to determine the position of elements on the page. There is a default flow to how the elements fit together, but most of the element's positional behavior is left up to you to define in your CSS.

## Floating Elements
By default, block level elements want to stack vertically. Take the following code:

```html
<div id="container">
    <div class="block">One</div>
    <div class="block">Two</div>
    <div class="block">Three</div>
    <div class="block">Four</div>
</div>
```

Without any CSS applied to the classes, the elements will stack vertically. The initial width of elements is set to 100% of their containing element. In very basic pages, this means most elements stretch the width of the page. CSS uses the concept of "floating" to cause elements to line up horizontally as long as the spatial constraints of their containing elements supports more than one element per line.  If you were to set the elements to have a smaller width, and set them to "float" next to each other, you could contain the elements on a single line:

```css
.block {
    width: 25%;
    float: left;
}
```

The `float` property when set to `left` causes an element to stick as far as left as possible, and more importantly, causes the following element to float towards that direction unless its float property is cleared.

> <a href="http://www.smashingmagazine.com/2009/10/19/the-mystery-of-css-float-property/" target="_blank">The Mystery of the CSS Float Property</a>
> ![TUTORIAL](images/links/tag_tutorial.png)

## The Position Property

On occasion you will need more control over the position of an element than floating allows. The idea behind positioning is to provide some offset that causes the element's box to move somewhere else on the page away from its natural position. Values for the CSS position property are outlined below:

```css
.block {
    /* static is the default, which doesn't allow for offset changes */
    position: static;
}

.block {
    /* relative allows for offsets relative to the element's current
       position, and does not remove the element from the flow of the page
    */
    position: relative;
    /* offset properties are top, left, bottom, right. Setting these means
       offsetting away from the referenced edge
    */
    top: 3px;
    left: 3px;
}

.block {
    /* absolute allows for offsets relative to the element's containing
       parent box (the first parent with a position other than static is
       used). Setting this removes the element from the flow of the page,
       causing surrounding elements to move into its original position
    */
    position: absolute;
    bottom: 0;
    left: 30px;
}

.block {
    /* fixed removes the element from the flow of the page, and positions
       it relative to the browser viewport, and does not scroll with the
       page
    */
    position: fixed;
    bottom: 0;
    right: 0;
}
```

CSS positioning and floating is tricky in practice and involves knowing a lot of quirks with how a browser's CSS layout engine works. This section just touched on the basics of the subject matter.

> <a href="http://learnlayout.com/position.html" target="_blank">Guide to CSS Positioning</a>
> ![TUTORIAL](images/links/tag_tutorial.png)

# CSS Interactivity and Transitions

CSS allows for changing properties of elements which take immediate effect after loading the page. However, there are other CSS methods in place to style elements based on interactive events, like hovering your mouse over an element. You can also specify transitions with elements, which are essentially animations that automatically interpolate between one value of a CSS property to another value of the same property.

To illustrate a basic example, imagine we have a big square button we want to turn red on mouse hover. The HTML will look like:

```html
<div class="button">
    Hover Over Me
</div>
```

First, we'll set up some basic style for the button:

```css
.button {
    width: 100px;
    height: 100px;
    background-color: #CCC;
}
```

We can use what is called a CSS pseudo-selector to define a style we want applied to the element on a mouse hover. Pseudo-selectors are tacked on to the end of your normal selectors with a `:`:

```css
.button {
    width: 100px;
    height: 100px;
    background-color: #CCC;
}
.button:hover {
    background-color: red;
    cursor: pointer;
}
```

We're telling the browser to change the background color to red as well as change the mouse cursor to a pointer icon on hover.

What if we wanted to animate the background-color from gray to red on hover? CSS transitions allow you to define interpolated animations for particular properties. The addition of a transition property would look like:

```css
.button {
    width: 100px;
    height: 100px;
    background-color: #CCC;
    transition: background-color 500ms;
}
.button:hover {
    background-color: red;
    cursor: pointer;
}
```

What the definition means is: "when background-color is changed on elements targeted with this selector, animate between the existing value and new value for a duration of 500ms." There are additional arguments you can tack on to the transition property value, like the animation curve type and delay. Not every CSS property is animatable, but in general CSS properties that take color and dimension are.

> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" target="_blank">Comprehensive Reference to CSS Properties, Selectors, and Pseudo-selectors</a>
> ![REFERENCE](images/links/tag_reference.png)

# Resources

## HTML

[HTML validator](https://validator.w3.org/)

## CSS

["Can I Use" guide to browser compatibility](http://caniuse.com/)

[CSS validator](https://jigsaw.w3.org/css-validator/)
