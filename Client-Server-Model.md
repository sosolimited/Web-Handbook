---
title: Client-Server Model
layout: default
---

<h1 class="title">Client-Server Model</h1>

> **Contents**<br/>
> [Dividing Work Between Client and Server](#dividing-work-between-client-and-server)<br/>
> [The Concept of the API](#the-concept-of-the-api)<br/>
> [Streaming Data Between Clients and Servers](#streaming-data-between-clients-and-servers)<br/>
> [Summary](#summary)<br/>

Many of Soso’s interactive pieces focus on transforming data onto physical form, either with video, lighting, or other media. Understanding and managing the flow of data is important when building the projects. Center to the use of this data is the client/server model. The model separates the processing, storing, and transmission of data (server's role) with the requesting and display/use of this data (client's role).

If using the example of an installation that displays a live feed of Twitter data, the computer driving the physical installation would take on the role of the client, and a remote computer that connects to Twitter and processes the live feed before passing it along to the client would take on the role of the server. The client and server will communicate with an agreed-upon protocol, which allows the client to request data in a way the server can understand, and the server will send back data in a way the client understands.

# Dividing Work Between Client and Server
There are advantages to dividing the roles between client and server. First, dedicating the processing and storage of data to a single computer acting as a server allows you to centralize the interface to this data. In other words, multiple clients can connect to a single source and request bits of the same data set. An iOS browser, a C++ application, and a desktop browser can all connect to the same source of data. Dividing roles also makes development easier because you reduce the complexity of any single part of a larger system. Because the clients and server speak a common protocol, you can divide the work between multiple developers, as they can independently work on systems with the knowledge that the parts are designed to connect through a common language.

Additionally, dividing the work between client and server reduces the amount of work the client has to perform before making use of the data. If processing data required a relatively intensive amount of computing power, allowing the server to churn through data before passing it along to a client keeps the client light and efficient. This efficiency is often important in physical installation because ultimately the client is driving both hardware and graphics software, which benefit from high frame rates. The less work the client has to perform transforming data into a usable format, the better.

# The Concept of the API
As mentioned in the previous section, a client and server communicate through an agreed upon protocol. To support the connection of multiple clients to a single unified source of data, a server often exposes what is known as an API, or application programming interface, to the clients. In the case of an HTTP server, and API would take the form of a set of URLs clients can direct specially crafted HTTP requests to in order to receive data encoded in a universally parsable format (typically JSON). Servers can expose APIs designed to be read-only, or their APIs can be designed to accept the input of data from clients.

A common architectural paradigm used with server APIs is known as REST, or representational state transfer. Building a REST API (typically with an HTTP server) means creating a URL scheme structured around the idea of access to collections of resources. Those resource collections can typically be described with nouns, e.g. `/api/users`, `/api/tweets`, `/api/posts`. Drilling down into a resource collection with a unique identifier provides access to a single resource, e.g. `/api/users/timmy`, `/api/tweets/10765432100123456789`, or `/api/posts/4`. HTTP "verbs" are used to request data from and modify single resources, e.g. `DELETE /api/users/timmy`. Often the more destructive operations are guarded by a form of authentication (typically OAuth). Popular APIs like Twitter's require authentication for any operation, even access to read-only public data.

# Streaming Data Between Clients and Servers
The remainder of the guide will examine more specific ways in which clients and servers communicate to request, serve, and process streams of data over a network. Special emphasis will be placed on using HTTP as a transport, as there a number of cross-platform contemporary tools designed for it.

## The Scenario
You have a Node process connected to a Twitter streaming API, saving tweets to a database around the clock. You want the ability for a user/client to connect to a web page and see tweets stream into their browser in real time. What are a couple of ways to achieve this functionality?

### Web client periodically checks a server REST API endpoint ("polling")
A simple way to achieve (what appears to be) a realtime stream of data is to set up short polling. Polling refers to making background requests from a client to a server on a short interval. When polling with a web client, AJAX calls are used (asynchronous Javascript HTTP requests). The request interval can change depending on your goals, but typically it is on the order of seconds or minutes, not milliseconds, to reduce load on the server.

Polling can be a very effective model when you expect a large number of clients to poll the same server API. When expecting a large amount of traffic, you can design servers to provide cached responses to API requests. On some interval, servers will internally refresh their cache to match up-to-date data. Serving cached responses to polling clients greatly reduces the time a server spends responding to requests, as the process of interfacing with a database and forming the data into a response is skipped over.

**Where would you use it?**

Use when your project concept of "real-time" communication doesn't necessitate a consistent connection to a server, or if you'd like to structure your API around cached results. You would also use this method with third-party APIs that may not support continuously streamed resources.

The client-side Javascript could look like:

```javascript
// set a timer to hit an endpoint every 5s
function pollData(){
		// use jQuery to make an AJAX HTTP GET request
		$.get({url: "/api/tweets?since=" + lastId, success: function(data){
			// process data + update UI
		});
}

var reqInt = setTimeout( pollData, 5000 );
```

The data returned by the API could be in JSON format for easy processing. Further code should be written on the client side to handle for errors, scaling back the request interval if the server becomes errant or unreachable. A quick look at what the server-side of things could look like in this example:

```javascript		
// using the Express package to simplify building the api endpoint		
var express = require('express');		
var app = express();		
		
app.get('/api/tweets', function (req, res) {		
    // interface to database query greatly abstracted here...		
    getTweetsSince( req.query.since, function( results ){		
        // return response in JSON format		
        res.json( results );		
    });		
});		
		
var server = app.listen(8080, function () {		
    console.log("Server now listening for connections.");		
});		
```

### Web client and server communicate over WebSockets
Although HTTP API polling is a simple approach to keeping a client up-to-date with continuously changing data, there are better ways of connecting clients to servers with the goal of receiving real time data. If, for instance, you'd prefer a model where servers inform clients of new data (as opposed to clients requesting new data from servers), using WebSockets on both the client and server side is preferable.

Where a WebSockets model differs from HTTP API polling is a continuous connection is maintained between client and server. This allows a server to pass messages to the client at the moment the data is ready to be consumed. The client is always listening for these new messages and can process them immediately. Additionally, the connection allows asynchronous communication, so both the client and server can send messages/data to each other.

**Where would you use it?**

When you need a simple mechanism for client-server real time communication, where the timely receiving of data is desired.

Example server-side Javascript:

```javascript
// instruct Node.js to create a websocket server
var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port: 8080});

// we need to store a list of connected clients (sockets)
var sockets = [];

// twitter API functionality greatly abstracted here...
var tw = Twitter.connect();
tw.track("#olympics");

tw.on("tweet", function(tweet){
        // when we receive a new tweet from the Twitter stream, send
        // a message to all connected clients
	for( var i=0; i<sockets.length; i++ ){
		// we're building a custom data structure here with
		// a message type and attached data. WebSockets does not
		// care how you structure your messages
		var data = { type: "tweet", meta: {user: tweet.handle, text: tweet.text } };

                // convert data to string before sending it over the socket
		sockets[i].send( JSON.stringify(data) );
	}
});

// setup required events for the WebSocket server
// the "connection" event is called whenever a new client connects
wss.on("connection", function( socket ){
	socket.on("open", function(){
		console.log( "a client just connected" );

		// add connected socket to our running list
		sockets.push( socket );
	});

	socket.on("close", function(){
		// remove a socket from our list if it disconnects
		console.log( "a client just disconnected" );
		sockets.splice( sockets.indexOf(socket), 1 );
	});
});
```

And the JS client-side code for connecting and listening for new Tweets would look like:

```javascript
// open the WebSocket connection to the Node.js WebSocket server
var socket = new WebSocket( "ws://localhost:8080" );

// set up an opened connection event, which will call our
// provided code when the client successfully connects
socket.onopen = function( event ) {
        // set up a message received event
	socket.onmessage = function( event ){
                // because we set up the WebSocket server to send JSON data we can
                // simply parse the message string and then access the data structure
		var data = JSON.parse( event.data );

		// switch on the data.type to handle different message types.
                // we're only using 1 type, but you can imagine how more could be handled
		switch( data.type ){
			case "tweet":
				console.log( "got a tweet message: " + data.meta.text );
			break;
		}
	};
};
```

If your client is a C++ app, using a C++ WebSocket library (e.g. ofxlibwebsockets) will allow you to connect to the same Node.js WebSocket server as web browser clients:

```c++
ofxLibwebsockets::Client client;

void ofApp::setup(){
	// [...]

	ofxLibwebsockets::ClientOptions options = ofxLibwebsockets::defaultClientOptions();
	options.host = "localhost";
	options.port = 8080;

	client.connect(options);

        // passing `this` to the WebSocket client will require us to implement some
        // callback methods the WebSocket library expects `this` to have
	client.addListener(this);

	// [...]
}

// implement the onConnect callback (connection starts)
void ofApp::onConnect( ofxLibwebsockets::Event& args ){
	cout << "WebSocket connected" << endl;
}

// implement the onOpen callback (connection opened)
void ofApp::onOpen( ofxLibwebsockets::Event& args ){
	cout << "WebSocket open" << endl;
}

// implement the onClose callback (connection closes)
void ofApp::onClose( ofxLibwebsockets::Event& args ){
	cout << "WebSocket closed" << endl;
}

// implement the onMessage callback (server sends us a message)
void ofApp::onMessage( ofxLibwebsockets::Event& args ){
	cout << "Got a tweet! " << args.message << endl;

        // args.message will contain the JSON string we send with the server.
	// use ofxJSON to parse the args.message and access individual properties
}
```

Between the client and server, there really isn't much code required to create a very simple real time communication model.

### Web client and server communicate over Socket.io protocol
Although WebSockets allows you to implement simple real-time client-server functionality relatively quickly, sometimes more functionality is desired. What if you want different types of clients to subscribe to different data channels? What if you want clients to automatically recover from server disconnections? Maybe you want the ability to easily scale to multiple servers. You could of course implement all of this functionality yourself with Node and Websockets, but there is software out there that does all of this out of the box.

Socket.io is a real-time event-based bi-directional communication protocol. Clients and servers communicate by sending messages across a consistent communication channel. The method by which that communication happens is transparently handled by Socket.io. For example, it will use HTTP long polling or HTTP WebSockets depending on which technology a client supports. Socket.io can route messages to different channels (collections of clients), and handles reconnection logic.

**Where would you use it?**

Most real-time web applications, e.g. streaming twitter data, chat applications for two way communication, live sports statistics, just to name a few.

In our Twitter data scenario, the Node server would be set up to use Socket.io and listen for client connections. When a client connects, an event callback on the server fires and the connection can be managed. The server can push a `tweet` event to each of the connected clients when a new tweets comes in. Example server-side code to set up the Socket.io server:

```javascript
// set socket.io listen on port 80
var io = require("socket.io")(80);

// listen for new client connection
io.on("connection", function( socket ){
        // using `emit` on this socket sends the message to only this client
	socket.emit("welcome", { message: "Thanks for connecting." });
});

// twitter API functionality greatly abstracted hereâ€¦
var tw = Twitter.connect();
tw.track("#olympics");

tw.on("tweet", function(tweet){
	// send an event out to **all** connected clients when we get a Tweet from Twitter's API
	io.emit("tweet", { user: tweet.handle, text: tweet.text });
});

tw.on("delete", function(id){
	// if Twitter asks us to delete a tweet, notify connected clients
	io.emit("delete", { tweet_id: id });
});
```

And on the web client side of things, we connect with Socket.io and set up event callbacks for each event we created on the server. First, include the Socket.io JS file in your HTML:

```html
<!-- this file is dynamically generated and served by Socket.io through Node -->
<script src="/socket.io/socket.io.js"></script>
```

And the client-side JS:

```javascript
var socket = io( "http://localhost" );

io.on("welcome", function(data){
	console.log( "Server just welcomed us: " + data.message );
});

io.on("tweet", function(data){
	console.log("@" + data.user + ": " + data.text);
});

io.on("delete", function(data){
	console.log( "delete request for tweet ID " + data.tweet_id );
});
```

In this example, the relationship is set up to be one way, where the server in the only thing dispatching events across the socket connection. But we could also send back messages to the server from the client with `socket.emit()` if the scenario called for it. The server would then define its own set of message events to listen for (using the exact same syntax as client-side JS).

## Summary
There are a couple of methods to stream data from a server to multiple clients. The best all-around method is using a Socket.io server with Node, which provides a nice client side JS library to respond to and send events.

In the event you cannot support Socket.io with your software, WebSockets could be a good alternative.

HTTP polling is a rather primitive method to "stream" data into the browser, but is definitely an option if you are unable to use real time server technology like Node.js.
