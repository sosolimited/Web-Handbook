---
title: Javascript Libraries and Frameworks
layout: default
---

# Introduction

Javascript is great all on its own, but there are lots of awesome libraries, frameworks, and more to make JS even more powerful. This guide is designed to help you pick the right JS add-ons for a project, without getting overwhelmed by buzzwords and weird library names.

![HTML9](http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2012/05/Screen-Shot-2012-05-09-at-12.24.21-PM-520x330.png)

_Image from [html9responsiveboilerstrapjs.com](http://html9responsiveboilerstrapjs.com/)_

> **Contents**
> [A Simple Webpage: HTML + CSS + pure JS](#simple-webpage)
> [Javascript Add-On Overview](#add-on-overview)
> [Javascript Libraries](#add-on-overview)
> [Web Application Frameworks](#add-on-overview)

### A Simple Webpage: HTML + CSS

We're all probably familiar with HTML and CSS...if not, check out the Web Fundamentals section first.

HTML (Hypertext markup language) is the language that is used to describe a basic webpage.  With HTML, we can create paragraphs, headers, images, and links. CSS (Cascading-Style Sheets) can be used to style a webpage.  This includes setting spacing,
adjusting background color, etc. With just HTML and CSS, we get a static webpage that is delivered from a server-as is. That's all well and good, but what if we want a webpage to change dynamically? That's where Javascript comes in.

### Pure Javascript

We can accomplish a lot with plain, ole Javascript.  [This](http://hereistoday.com/) data visualization was created using basic JS on top of HTML/CSS.

# Javascript Add-On Overview

## Frameworks, Libraries, and Content Management Systems

As we tackle more complicated programming tasks, it becomes more difficult to have clean, modular code. Frameworks can provide a programming architecture that encourages good programming practices, like separation of data from interface.  Javascript frameworks are often structured to optimize solutions to common problems in web programming.  For instance, updating a site based on data stored in a database.

Javascript libraries can also provide handy utilities for working with the DOM, managing and manipulating data, and performing other common programming tasks.  Since Javascript is so light-weight, it's convenient to add on libraries and frameworks on a project-by-project basis.

Content Management Systems (or CMS) provide a way to easily update content on a webpage.  CMSes are especially useful when multiple people are editing a site, or when non-programmers need to make changes without delving into code.

# Javascript Libraries

###[Jquery](http://jquery.com/)

JQuery is a lightweight Javascript library that provides a more simplified syntax for common operations.  JQuery also smooths over differences in browsers, eliminating the need for additional JS commands to handle various browser preferences.

#### Starting JQuery

When using JQuery, we need to ensure our page has loaded before calling any functions.  We do this by placing all of our code inside of a ready function.

    $( document ).ready(function() {

    // Add your code here!

    });

#### DOM Selections

With JQuery, we can use CSS selectors in our code by appending a '$'. For example:

    $( 'li' ); // Selects a list item
    $( '#menu'); // Selects a div with the 'menu' id

#### Function Chaining
After selecting a div, we can then call one of JQuery's other functions.  JQuery is chainable, meaning we can link together multiple actions.  For example:

    // Select p1 div, set color to red
    // then slide up, slide down, and fade out
    $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000)
      .fadeOut( 400 );

#### Interactivity and Animations

JQuery is handy for animating CSS properties and using pseudo-selectors.  See how easy it is to animate a CSS property after a mouse click:

    $(".button").click( function() {
     $(this).fadeOut(400);
    });

#### When to use JQuery

* Traverse the DOM (Document Object Model) and manipulate our HTML
* Handle mouse events
* Create simple animations
* Make AJAX requests
* To simplify handling multiple browsers

###[Underscore.js](http://underscorejs.org/)

Underscore.is is a collection of over 100 useful functions. In particular, underscore provides many utilitarian data structures and functional helpers.

Examples of underscore.js functionality:
* Functions that operate over a collection of objects,
including sorting, filtering, reducing, and search operations
* Array functions including first, zip, unzip, indexOf, and more!
* Functions for type testing and equality evauluation, including isDate(), isNaN(), and isEqual()
* Functions for dealing with JS objects, like iterating through an object's
properties, deep comparisons, etc.
*And much more!

Check this out to see what underscore can do for you:

> <a href="http://code.tutsplus.com/tutorials/getting-cozy-with-underscorejs--net-24581" target="_blank">Getting cozy with Underscore.js</a>
> ![ARTICLE](https://github.com/sosolimited/Design-Handbook/blob/master/images/tag_article.png)
> Nice intro to Underscore.

When to use underscore.js?
* If you're using anything besides the DOM
* If you are using ANY data, collection of data, or data structures
* If you are comparing objects or values beyond the basic types
* For most Soso sites

# Web Application Frameworks

![XZIBIT](http://i.imgur.com/IsMyTJP.jpg)

_Image originally from [memegenerator.net](http://memegenerator.net/)_

### Introduction

Web application frameworks go beyond what a library does.  They provide structure to our software and are designed to solve common problems in web development.  When used correctly, frameworks can eliminate a lot of the initial work of setting up a dynamic web page.

### Background reading

> <a href="http://www.jeffknupp.com/blog/2014/03/03/what-is-a-web-framework/" target="_blank">What is a web framework?</a>
> ![ARTICLE](https://github.com/sosolimited/Design-Handbook/blob/master/images/tag_article.png)
> Quora post.

> <a href="http://markonphp.com/dont-reinvent-wheel-use-a-framework/" target="_blank">Don't reinvent the wheel, use a framework!</a>
> ![ARTICLE](https://github.com/sosolimited/Design-Handbook/blob/master/images/tag_article.png)
> Blog post.

## [Model-View-Controllers] (https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

Model-view controllers are a particular kind of web framework that separate the data used to generate a web page from the actual user interface.  MVCs are a particular design pattern

![MVC Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/500px-MVC-Process.svg.png)

_Image from [wikipedia.org](http://wikipedia.org)_

> <a href="http://www.quora.com/When-does-it-make-sense-to-use-an-MVC-framework-for-JavaScript" target="_blank">When does it make sense to use an MVC?</a>
> ![ARTICLE](https://github.com/sosolimited/Design-Handbook/blob/master/images/tag_article.png)
> Quora post.

> <a href="http://blog.iandavis.com/2008/12/what-are-the-benefits-of-mvc/" target="_blank">What are the benefits of an MVC?</a>
> ![ARTICLE](https://github.com/sosolimited/Design-Handbook/blob/master/images/tag_article.png)
> Blog post.

In an MVC, the different components can be described as follows:

#### Model

The model contains the software architecture for the underlying data that is used to create our webpage.  The model could be composed of JS objects that represent data from a database. The model has no knowledge about the user interface.

#### View

The view is a collection of code that makes up our user interface.  The view might include a graph that displays data, or it could include elements that the user interacts with, like a button.  The view updates based on what data is in our model.

#### Controller

The controller changes the data in our model with input from the user.  The controller updates our model or view, with input from the user.  For instance, the controller might update a database of comments (our model) when the user interacts with a text box (part of the view).

### When to use an MVC?

* When you have a RESTful architecture
* Fetch some data from an API
* Present the data in some way
* Interaction with the user
* When the same data is being shown in different ways on the page (multiple graphs)
* When there are many re-usable visual elements on a page (tons of upvote buttons)
* When visual elements are changing a database (writing comments, etc.)

### Choosing an MVC Framework:

There are many popular MVC frameworks, and deciding which one to use can be intimidating.

The three most popular frameworks include Backbone, Angular, and Ember.  React.js is a partial MVC framework (Just the V), and will also be explored.

> <a href="http://www.smashingmagazine.com/2012/07/27/journey-through-the-javascript-mvc-jungle/" target="_blank">Journey through the Javascript MVC Jungle</a>
> ![ARTICLE](https://github.com/sosolimited/Design-Handbook/blob/master/images/tag_article.png)
> Lengthy article that includes some helpful background info and tips.

> <a href="https://www.airpair.com/js/javascript-framework-comparison" target="_blank">Javascript Framework Comparison</a>
> ![ARTICLE](https://github.com/sosolimited/Design-Handbook/blob/master/images/tag_article.png)
> Comparison between Backbone, Angular, and Ember.js.

### [Backbone.js](http://backbonejs.org/)

Backbone is lightweight.  Unlike Angular or Ember, Backbone doesn't enforce a specific
strucutre on your code.  Rather, it provides functions and classes that allow you to
create a MVC strucutre.  in that sense, backbone is more like a library than a web framework.

Backbone is also very, very small and fast.  Backbone has a lot of tutorials available.  It's basic and has a linear learning curve. Backbone is a great place to start with MVCs.

To summarize, use Backbone when:
* You are just starting to learn about MVCs
* You want to follow an online tutorial for setting up your MVC
* You prefer to define the architecture of your code
* You need a small and fast MVC

Sites that use Backbone;
* [Typing cat] (http://thetypingcat.com/)
* [Foursquare] (https://foursquare.com/)

### [Angular.js](https://angularjs.org/)

Angular.js is the most popular Javascript framework and it's backed by Google.  Angular has a more rigid framework, but this can make your code more easily testable and adaptable later-on.

Sites using Angular:
* [IndieGogo] (https://www.indiegogo.com/)
* [Weather.com] (http://www.weather.com/)

### [Ember.js](http://emberjs.com/)

Ember is the newest of the three frameworks.  It's also the most expansive.  It includes code for supporting an MVC framework, as well as lots of useful utilities.  Ember is great for multi-page, complicated navigational projects...not so much for small one-page apps! The consensus seems to be that Angular is simpler and smaller; Ember is a richer, more "opinionated" framework.

#### Sites that use Ember.js
* https://vine.co/

http://readwrite.com/2014/02/06/angular-backbone-ember-best-javascript-framework-for-you
http://blog.backand.com/angularjs-vs-emberjs/

### [React.js](http://facebook.github.io/react/)

React.js implements the "V" portion of the MVC design pattern.  React can be used alongside other MVCs.

Sites that use React
* Facebook
* Instagram

# Content Management Systems

A Content Management System (CMS) is a system that lets a user customize the content on a website.  This includes blogging platforms that allow a user to author new posts, as well as more flexible systems that allow you to dynamically assemble custom parts of a webpage.

You can think of a CMS as an interface to populate a database of content.

CMSes allow many different people to work on content.

### When to use?

* When you need to automatically populate templates with content
* When you need to dynamically assemble re-usable parts of a webpage
* To manage multiple users and permissions
* When many people contribute content to a webpage
* To provide a non-technical interface to web content
* When a client wants to change content (e.g. on a brand wall, light display, etc)

### Do you ACTUALLY need a CMS?

It's tempting to give the client more freedom by offering them a CMS to control content.  Oftentimes, a client may think they want CMS, but may not actually use it.

Some questions to consider before integrating a CMS

* Does the client or client's organization have a dedicated person that will use the CMS?
* Is the client willing to learn how to use the CMS?
* Will the client provide high-quality, well-designed content via the CMS?
* Will the CMS be used frequently to update content, or will the client rely on the initially-provided material?
* Does the client actually want full control of a system, or would they be satisfied with more simplified controls?
* Is there a simpler alternative, such as a simple web portal?

### Soso CMS Projects

* iHeartRadio
* Schneider Electric
* Jabil

#### Examples where a CMS was not used:

* Biomed
* Baccarat

## CMS Examples: Open-Source

> <a href="http://websitesetup.org/cms-comparison-wordpress-vs-joomla-drupal/" target="_blank">Wordpress vs. Joomla! vs. Drupal </a>
> ![ARTICLE](https://github.com/sosolimited/Design-Handbook/blob/master/images/tag_article.png)
> Comparison of popular Open-Source CMS systems.

### [Wordpress](https://wordpress.com/)

Wordpress is an Open-Source CMS that is primarily used for blogs and editorial content.  In that sense, it can be inflexible.

Projects using Wordpress:
* TechCrunch (blog)
* The New Yorker

### [Drupal](https://www.drupal.org/)

### [Joomla](http://www.joomla.org/)

### [ProcessWire](https://processwire.com/)

ProcessWire is an opensource, PHP-based CMS. We use ProcessWire for the Soso webpage.

# Server-side Javascript

#### Clientside vs Serverside
So far, we've covered many ways to use Javascript in a clientside (frontend) context.  The code executes on the browser, after the initial webpage has been fetched from the server.

Javascript can also be used serverside (in the backend), before the the HTML of a page is loaded.  Serverside code runs on a computer (or server) instead of in the browser.

### [Node.js] (https://nodejs.org/)

Node.js is a server-side Javascript environment.  It's non-blocking and I/O driven, making it great for real-time applications that are data-intensive and distributed across multiple devices.  Non-blocking I/O means that Node can handle multiple requests and tasks (like querying a database, etc.) without "hanging" on any one task.

Reasons to use Node.js
* More intensive data processing (language processing, etc.)
* Networking applications
* When multiple computers or sites need access to data
* Processing data and storing it in a database
* Running JS on embedded systems (like a Raspberry Pi or [Tessel](https://tessel.io/) )
* Collecting sensor data and storing it in a database
* Jumping on board the Internet of Things train

#### Node Package Manager

Another great thing about Node is the convenient Node Package Manager (or npm for short).  Npm makes it extremely easy install extra Node-compatible Javascript libraries.  Some of the available libraries available through npm include:

* Underscore.js
* mongodb
* socket.io
* johnny-five (JS Hardware + Robotics framework)

> <a href="http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js" target="_blank">Why the Hell Would I Use Node.js?</a>
> ![ARTICLE](https://github.com/sosolimited/Design-Handbook/blob/master/images/tag_article.png)
> Introduction to Node.js capabilities

> <a href="https://learn.adafruit.com/node-embedded-development/why-node-dot-js" target="_blank">Installing Node.js on a Raspberry Pi</a>
> ![ARTICLE](https://github.com/sosolimited/Design-Handbook/blob/master/images/tag_article.png)
> Intro to Node + Tutorial for Installing Node on a Pi