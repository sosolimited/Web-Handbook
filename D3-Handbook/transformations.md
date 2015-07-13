---
title: Data transformations for D3.js
layout: default
---

# More On Transformations

The guys at Bocoup wrote a great guide for parsing data in JS. Our parsing tactics are very very similar, so I recommend we use it as a guide for various ways to parse various things.

http://learnjsdata.com/

There are exceptions, however -- I prefer other tactics to theirs on occasion -- and they will be posted here. Feel free to do the same if you notice a better way to do things.


## Exceptions:
- [Deep Cloning](http://learnjsdata.com/iterate_data.html):
	- for collection of objects with only basic property types (ints, strings, etc -- but not Date objs, and other complex types), that can also be nested (ie. "deep"), use:

	```javascript
	var deepPrimitiveCopy = JSON.parse(JSON.stringify( dataObject ));
	```

	- for collection with complex property types, that is not nested (ie. not "deep") use lodash:

	```javascript
	var shallowCopy = _.clone(dataObject);
	```

	- for collection with complex property types, that is nested (ie. "deep") use lodash:

	```javascript
	var deepCopy = _.clone(dataObject, true);
	// or
	var deepCopy = _.cloneDeep(dataObject);
	```

	- NB:
		- [Performance comparison](https://jsperf.com/lodash-copy-vs-json-stringify-parse)
		- [All-time quickest cloning method](http://stackoverflow.com/a/5344074/2543345) is to write your own custom cloner, if you know in advance what the structure of the data will be like.

- [Sorting](http://learnjsdata.com/iterate_data.html):
	- if you have an array of complex objects that you want to reverse the sorting on (ex: it’s in ascending but you want descending) as they say d3.ascending/d3.descending won't work, but you can use the native JS Array.reverse() function:

	```javascript
	filteredPatentObjects.reverse();
	```


## Benchmarking performance

If you need to evaluate the performance of your code, you can use the web developer console in Chrome.

If you need to pit two snippets of code against each other, to see which performs best, you can use https://jsperf.com/
