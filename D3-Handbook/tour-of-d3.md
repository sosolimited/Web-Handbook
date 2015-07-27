---
title: Tour of D3.js
layout: default
---

<h1 class="title">A Soso Tour of D3.js</h1>

> **Table of Contents**<br/>
> [What is D3?](#what-is-d3)<br/>
> [The Basics](#the-basics)<br/>
> [A More Detailed Explanation](#a-more-detailed-explanation)<br/>
> [Graphs built into D3](#graphs-built-into-d3)<br/>
> [Performance Limits](#performance-limits)<br/>
> [Next Steps](#next-steps)<br/>

# What is D3?

- [D3.js](http://d3js.org/) is a Javascript library.
- it's for binding data to DOM elements.
- it can be used for basic charts ([1](http://bl.ocks.org/mbostock/3883245), [2](http://bl.ocks.org/mbostock/3885304), [3](http://bl.ocks.org/mbostock/3887118)).
- it can be used for animations ([1](http://bl.ocks.org/mbostock/1125997), [2](http://bl.ocks.org/mbostock/1256572)).
- it can be used for advanced charts too (like [maps](http://bl.ocks.org/r4vi/4185745), [force-layouts](http://bl.ocks.org/mbostock/929623), and many other [weird chart types](http://bost.ocks.org/mike/uberdata/)).

At Soso, we use it mainly for 2 things:

- to quickly **see the data**, get a sense of its shape, and understand what deeper meaning it may hold or what "stories" could emerge from it.
	- this often leads us to the creation of a _dashboard_ to see and browse the data, which is also a great tool for the client.
- to quickly **create a prototype** of a more complex app that want to eventually create.
	- the prototype could be a 1st phase in a large project for which the final product is a robust C++ app.

Once you're used to it, D3 really is great for taking a bunch of data and throwing it up on the page, to see what it looks like.

# The Basics

As I explain things, I will often refer to Scott Murray's fantastic (and free!) online book, [found here](http://chimera.labs.oreilly.com/books/1230000000345/index.html).

- [Attaching an element to the page](https://jsfiddle.net/jcnesci/fr3zudy2/)
- [The Data-Join: attaching elements based on data](https://jsfiddle.net/jcnesci/2vL9naby/)
	- [How it works](https://jsfiddle.net/jcnesci/6k7ovycs/)
	- [Proof that data is attached to the DOM elements](https://jsfiddle.net/jcnesci/7jndkbdh/1/)
	- [How to use said data stored in each DOM element](https://jsfiddle.net/jcnesci/g2j0fhgs/1/)
- [Attaching SVG elements](https://jsfiddle.net/jcnesci/c89zfymm/)
- The General Update Pattern
	- The general update pattern defines how **new items are attached** to the DOM, how **existing items are updated**, and how **old items are removed**.
	- [Enter](https://jsfiddle.net/jcnesci/sejcqw6f/)
	- [Enter, Update](https://jsfiddle.net/jcnesci/qnwttLux/1/)
	- [Enter, Update, Exit](https://jsfiddle.net/jcnesci/oxnskb4w/)

The data-join and general update pattern are the keys to working with D3 as they are the nuts & bolts of everything.

Beyond that, every type of graph you'll want to make (eg. a [linechart](http://bl.ocks.org/mbostock/3883245), a [barchart](http://bl.ocks.org/mbostock/3885304), a [scatterplot](http://bl.ocks.org/mbostock/3887118), a [map](http://bost.ocks.org/mike/map/), or a [force-directed graph](http://bl.ocks.org/mbostock/4062045)) will require different strategies, D3 methods, etc., although most use the same principles.

For example, here's a [basic intro tutorial](http://chimera.labs.oreilly.com/books/1234000002001/index.html) by Scott Murray that introduces axes and scales while creating a scatterplot.

For understanding the trickier parts, I will break it down, below.

# A More Detailed Explanation

### Attaching Elements to the Page

With D3, you can attach HTML or SVG elements to the page. Usually, people use SVG elements, as SVG provides primitive shapes already (lines, circles, rectangles, etc) and are vector-based (meaning, they are always crisp, no matter if you scale them, and never pixelated).

More resources for understanding how the data-join & general update pattern work:

- http://bost.ocks.org/mike/join/
- http://bl.ocks.org/mbostock/3808234
- http://bost.ocks.org/mike/selection/

### Transforming the Data

Transforming the data means things like sorting, grouping, rearranging, or making new calculations on your data for use in a graph. Rarely do you get data (from a file, or a stream) exactly how you need it for graphing. If your data is a collection of book records, it'll likely not be sorted by publication date already. Or what if you want to just graph how many books each author has written. These are _transformations_.

#### Libraries

D3 can be used for some sorts of transformations. But you'll often need other libraries to provide more transformation firepower. We typically use:

- [Underscore.js](http://underscorejs.org/) or [Lodash](https://lodash.com/) : for sorting, grouping, and all sort of object & array manipulations. I don't usually need Lodash but it has a few hardcore functions that Underscore lacks, like _.clone().
- [Moment.js](http://momentjs.com/) : for transforming data based on time (meaning dates).

#### Most Commonly Used Functions

- d3.max() and d3.min() : to get the min or max item in a collection.
- d3.extent() : to get bot the min & max items at once.
- d3.scale() and its many varieties : to map a value from one range to another.
- _.groupBy()
- _.sortBy()
- _.pluck()

_... TO BE CONTINUED_

#### Going Deeper

> <a href="transformations.html" target="_blank">More On Transformations</a><br/>
> ![REFERENCE](../images/links/tag_reference.png)<br/>
> I defer 99% of explanations on how to transform data to http://learnjsdata.com/ since they really do cover everything. However, I do sometimes recommend other tactics for certain transformations, which you can read here.

### Transitioning and Animating the Data

More examples for animating and transitioning:

- http://bl.ocks.org/mbostock/1125997
- http://bl.ocks.org/mbostock/1256572

_... TO BE CONTINUED_

# Graphs built into D3

D3 provides the following [layouts](https://github.com/mbostock/d3/wiki/Layouts) that generate pre-made graphs for you, if you feed them the data correctly (each layout wants its data in different ways).
- See the [examples gallery](https://github.com/mbostock/d3/wiki/Gallery) for ideas of what they can look like.

# Performance Limits

Using SVG in D3 becomes too heavy when you have more than 3000 data elements on the page.

Using Canvas with D3 can be more performant, depending on the scenario.

Using WebGL is the most performant, as it uses the graphics card, but that requires very different techniques that don't necessarily blend well with D3.

_... TO BE CONTINUED_

# Next Steps

_WIP_

### Increasing performance

_WIP: canvas, webgl, pixi.js_

### 3D possibilities

_WIP: webgl, pixi.js, three.js, openVizConf videos about that_

### Using D3 with other frameworks

_WIP: MVC (react.js, link openVizConfVideo, Swizec Teller book), multiple file loading and concurrency with Queue.js, etc._

### Potentially useful libraries

_WIP: MISO, NVD3, etc? see scott murray's book for more._
