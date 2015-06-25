
Drawing in Javascript
=====================

Web Drawing Inspiration
-----------------------
- [Santa is Weak](http://santa.animade.tv/)
- [Weird Faces](http://www.mokafolio.de/works/Weird-Faces)
- [Shy Birds](http://codepen.io/Yakudoo/pen/LVyJXw)

Sample Files
------------
- [Basics in Underlying APIs](basics.html)
- [Basics in PaperJS](basics_paper.html)
- [Drawing Circles with the mouse](circle_looping.html)
- [Animating along an animated path](path_following.html)

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

#### Canvas
- [Paper.js](http://paperjs.org/)
- [Three.js](http://threejs.org/)
- [p5*js](http://p5js.org/)

#### SVG
- [d3](http://d3js.org/)
- [Raphael](http://raphaeljs.com/)

### Diving into Paper

#### Getting set up
  - Clone this repository
  - For future projects
    - Download [paper.js](http://paperjs.org/download/) and include it via a `<script>` tag

#### Drawing in Paper
  - Basic Shapes
    - A Path! A Path!
    - Circles and Squares
  - What Makes a Shape
    - Vertices
    - Curves
    - Control Handles

#### Basic I/O
  [File I/O with Paper](file_io.html)
  - Importing art assets
    - `paper.project.importSVG(function (svg) {});`
  - Exporting art assets
    - `text = paper.project.exportSVG({asText: true});` // somehow copy and paste this into `filename.svg`

#### Exercise
  - Draw a shape in Illustrator
  - Import it into Paper and change it in some way
    - Possibilities:
    - Transform (scale, rotate, translate)
    - Color (hue, saturation, brightness)
    - Move the vertices around
    - Create new shape(s) based on the source shape

#### More Fun with Motion
  - Interactivity
    - [Drawing Circles with the mouse](circle_looping.html)
  - Animation and Path Analysis
    - [Animating along an animated path](path_following.html)
  - Masking a shape

#### Exercise
  - Draw an interactive face
