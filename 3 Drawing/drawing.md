<head>
  <meta charset="UTF-8">
  <title>Drawing in Javascript</title>
  <link rel="stylesheet" href="markdown.css" type="text/css"></link>
</head>

Drawing in Javascript
=====================

Web Drawing Inspiration
-----------------------
- [Santa is Weak](http://santa.animade.tv/)
- [Weird Faces](http://www.mokafolio.de/works/Weird-Faces)
- [Patatap](http://www.patatap.com)
- [Shy Birds](http://codepen.io/Yakudoo/pen/LVyJXw)

Example Files
-------------
- [Basics in Underlying APIs](basics.html)
- [Basics in PaperJS](paper_basics.html)
- [File I/O in PaperJS](paper_file_io.html)
- [Structure of Shapes](paper_structure.html)
- [Drawing Circles with the mouse](paper_circle_looping.html)
- [Animating along an animated path](paper_path_following.html)

Underlying Technology
---------------------

There are two primary drawing technologies in the browser that underly current libraries: canvas and svg. Canvas is flexible in providing different drawing contexts (2d and webgl) and is controlled through JavaScript, while SVG is defined by a set of XML tags that can describe a wide range of drawings declaratively.

### Canvas (raster element)

The Canvas element exposes a raster drawing context controlled with javascript. The raster drawing surface provides both 2d and webgl rendering contexts. Content is drawn to the canvas when javascript commands are run by the user.

### SVG (vector elements)

The SVG element defines a vector drawing. The child elements within the SVG describe the shapes that should be drawn and the browser handles redrawing automatically.

#### [Example: Basics in Underlying APIs](basics.html)

In this example, we look at the basics of drawing with each of the underlying APIs.

### Further Reading on Canvas and SVG

- [WebGL Fundamentals](http://webglfundamentals.org/)
- [Mozilla Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Dive Into HTML5 Canvas Tutorial](http://diveintohtml5.info/canvas.html)
- [SVG on the Web](https://svgontheweb.com/)
- [W3 SVG Specification](http://www.w3.org/TR/SVG/)
- [W3C SVG Tutorial](http://www.w3.org/2002/Talks/www2002-svgtut-ih/hwtut.pdf)
- [Mozilla SVG Reference](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [Interactive Data Visualization for the Web (SVG/d3)](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html#SVG_3)

Getting a more flexible API: Working with a library
---------------------------------------------------

While the underlying drawing technologies in the browser are pretty great, you will almost certainly want to use a javascript library to control them if you are making anything dynamic or interactive. Below are some popular ones that are worth a look.

### Canvas Libraries

- [Paper.js](http://paperjs.org/)
- [Three.js](http://threejs.org/)
- [p5*js](http://p5js.org/)

### SVG Libraries

- [d3](http://d3js.org/)
- [Raphael](http://raphaeljs.com/)

### WebGL Canvas Libraries

- [stack.gl](http://stack.gl/)
- [Three.js](http://threejs.org/)

Diving into Paper.js
--------------------

PaperJS is a delightful 2d drawing library worth exploring further. It provides a drawing API that combines aspects of vector manipulation similar to SVG and raster output in Canvas. In addition, Paper provides geometric operations on the created paths that make it interesting for going beyond straight-ahead drawing.

### Getting set up

To get started with Paper.js in your own projects, download the latest release from [paperjs.org](http://paperjs.org/download/). Include the library via a `<script>` tag and you are ready to write code with paper.

For this workshop, I recommend cloning this repository and working inside the `exercises` directory. There, you can make a copy of `exercise_template.html` and start writing your own code right away.

In this repository, you will find a number of examples using paper from plain javascript. This gives us more control over how paper interacts with the rest of our code, though we lose its operator overloading.

Paper.js has excellent [documentation](http://paperjs.org/reference/global/), which I suggest you reference as you are working with it.

### Drawing in Paper

We can draw in paper much like we can with SVG and Canvas 2d. Paper provides a javascript API that lets us manipulate shapes as vector-based objects and manages the rendering of those objects to an underlying 2d canvas.

#### [Example: Basics in Paper](paper_basics.html)

In this example, we replicate the shapes that we drew with canvas and svg in the first basic example. Notice, however, that there is generally more consistency in the names of functions in paper, and more flexibility in how colors and positions are defined.

Additionally, we hint at Paper’s animation support through the `paper.view.onFrame` callback.

### Shape Anatomy

Paths in Paper are defined by a series of [control points](http://paperjs.org/reference/segment/) and the [curves](http://paperjs.org/reference/curve/) between them. In Paper, control points are stored in the segments array of your path. The curves array for the path provides access to the curve between each pair of control points in the segments array.

#### [Example: What Makes a Path](paper_structure.html)

In this example, we look at the building blocks of a path and what happens when we manipulate them. Those elements are:

- Points
- Handles
- Color
  - Hue
  - Saturation
  - Lightness

### File I/O

Paper supports loading SVGs and can output SVG elements for use in the dom or SVG text for saving to file.

#### [Example: Paper Tiger](paper_file_io.html)

In this example, we load an svg from disk and assign rainbow colors to each path within it.

Additionally, the `writeSvg…` functions demonstrate how to convert from Paper to SVG. To actually create an svg document, you will need to save the svg text into a file named `something.svg`. Saving files isn’t something browsers currently support from client-side javascript, so you will need to find a workaround, such as copy-pasting the text into a file.

### Exercise: Transformation

- Draw something in Illustrator or your vector graphics tool of choice.
- Save the drawing as an SVG.
  - SVG version 1.1
  - Be sure “preserve illustrator editing capabilities” is turned off.
- Import the drawing into PaperJS.
  - You can work in the exercises directory on a copy of `exercise_template.html`.
- Transform the drawing in some way.
  - Your SVG will be different from the tiger drawing. Open your SVG in a text editor to see where your shapes are in the hierarchy.

Transformation ideas:
  - Physical transformation: scale, rotate, translate, skew
  - Color transformation: hue, saturation, brightness
  - Vertex transformation
  - Build new shape(s) based on the source shape’s geometry.

### More Fun: Interactivity and Motion

Paper exposes mouse and keyboard events for interactivity through the paper.Tool object. After creating a Tool, you can add callbacks for different user events (e.g. mouse drag, key down).

#### [Example: Drawing Circles with the mouse](paper_circle_looping.html)

In this example, users can draw circles with the mouse and control animation playback with the keyboard.

#### [Example: Animating along a path](paper_path_following.html)

In this example, we position shapes along a path. Clicking adds new shapes.

### Exercise: Interactivity and Motion

Make the transformation you built in the first exercise interactive. You can use either the mouse or the keyboard (if you want to involve other APIs, you could use sound and video, but that will probably take you outside the workshop time). Alternatively, animate the transformation from the first exercise.

Interaction Ideas:
  - Follow
  - Avoid
  - Watch
  - Drive the drawing
  - Play the drawing

### Farewell

Thanks for participating in the workshop. I hope you had fun. Remember, you can always reference the examples here in the future. Also, check out the material linked from this document for more ideas about what you can do.

Have fun, and keep drawing.
