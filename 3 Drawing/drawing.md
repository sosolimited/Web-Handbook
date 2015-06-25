
Drawing in Javascript
=====================

Web Drawing Inspiration
-----------------------
- [Santa is Weak](http://santa.animade.tv/)
- [Weird Faces](http://www.mokafolio.de/works/Weird-Faces)
- [Patatap](http://www.patatap.com)
- [Shy Birds](http://codepen.io/Yakudoo/pen/LVyJXw)

Sample Files
------------
- [Basics in Underlying APIs](basics.html)
- [Basics in PaperJS](paper_01_basics.html)
- [Drawing Circles with the mouse](paper_03_circle_looping.html)
- [Animating along an animated path](paper_04_path_following.html)

Workshop Schedule
-----------------

### Underlying Technology

[Basics in Underlying APIs](basics.html)

There are two primary drawing technologies in the browser that underly current libraries: canvas and svg. Canvas is flexible in providing different drawing contexts (2d and webgl) and is controlled through JavaScript, while SVG is defined by a set of XML tags that can describe a wide range of drawings declaratively.

#### Canvas (raster element)

The Canvas element exposes a raster drawing context controlled with javascript. The raster drawing surface provides both 2d and webgl rendering contexts. Content is drawn to the canvas when javascript commands are run by the user.

#### SVG (vector elements)

The SVG element defines a vector drawing. The child elements within the SVG describe the shapes that should be drawn and the browser handles redrawing automatically.

#### Further Reading on Canvas and SVG

- [WebGL Fundamentals](http://webglfundamentals.org/)
- [Mozilla Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Dive Into HTML5 Canvas Tutorial](http://diveintohtml5.info/canvas.html)
- [SVG on the Web](https://svgontheweb.com/)
- [W3 SVG Specification](http://www.w3.org/TR/SVG/)
- [W3C SVG Tutorial](http://www.w3.org/2002/Talks/www2002-svgtut-ih/hwtut.pdf)
- [Mozilla SVG Reference](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [Interactive Data Visualization for the Web (SVG/d3)](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html#SVG_3)

### Getting a more flexible API: Working with a library

#### Canvas Libraries

- [Paper.js](http://paperjs.org/)
- [Three.js](http://threejs.org/)
- [p5*js](http://p5js.org/)

#### SVG Libraries

- [d3](http://d3js.org/)
- [Raphael](http://raphaeljs.com/)

### Diving into Paper

We will focus on PaperJS as a 2d drawing library worth exploring in depth. It provides us with a drawing API that combines aspects of vector manipulation similar to SVG and raster output in Canvas. In addition, Paper provides geometric operations on the created paths that make it interesting for going beyond straight-ahead drawing.

#### Getting set up

To get started with Paper.js, download the latest release from [paperjs.org](http://paperjs.org/download/). Include the library via a `<script>` tag and you are ready to write code with paper.

In this repository, you will find a number of examples using paper from plain javascript. Look at them for

#### Drawing in Paper

We can draw in paper much like we can with SVG and Canvas 2d. Notice, however, that there is generally more consistency in the names of functions in paper, and more flexibility in how colors and positions are defined.

[Basics in Paper](paper_01_basics.html)

#### Shape Anatomy

Paths in Paper are defined by a series of [control points](http://paperjs.org/reference/segment/) and the [curves](http://paperjs.org/reference/curve/) between them.

#### File I/O

Paper supports loading SVGs and can output SVG elements for use in the dom or SVG text for saving to file. Note that browsers don’t provide a method to save files from javascript (yet?), so you will need to copy-paste or find another workaround to get the SVG text into a file.

[Paper Tiger](file_io.html)

#### Exercise: Transformation

Draw a shape or shapes in Illustrator or your vector graphics tool of choice.
Save the drawing as an SVG.
Import the drawing into Paper.
Transform the drawing in some way.

Possibilities:
  - Physical transformation: scale, rotate, translate, skew
  - Color transformation: hue, saturation, brightness
  - Vertex transformation
  - Build new shape(s) based on the source shape’s geometry.

#### More Fun with Motion
  - Interactivity
    - [Drawing Circles with the mouse](paper_03_circle_looping.html)
  - Animation and Path Analysis
    - [Animating along an animated path](paper_04_path_following.html)
  - Masking a shape

#### Exercise: Interactivity

Make the transformation you built in the first exercise interactive. You can use either the mouse or the keyboard (if you want to involve other APIs, you could use sound and video, but that will probably take you outside the workshop time).

Possibilities:
  - Follow
  - Avoid
  - Watch
  - Drive the drawing
  - Play the drawing
