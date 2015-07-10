Deployment Option
=================

There are LOTS of options out there for deploying an application. Choosing the right one comes down to a few decisions you have to make.

1. Cost
2. Simplicity / How much control do you want?
3. Type of application.

#### Linode vs. Heroku vs. AWS

1. Heroku
	- "*Heroku’s Cedar stack has no native language or framework support; Ruby, Python, Java, Clojure, Node.js, Scala, Go and PHP are all implemented as buildpacks.*"
	- Dynos - which are just ubuntu 14.04 boxes with alloted connectivity and power.
	- Bottom Line : Heroku is great for simple apps listed above. They also make it easy to pair with hosted services like MongoDb in there market place.
2. Linode
	- Linode allows you to more control over the flavor of linux and the boxes performance.
	- Simplicity - what you can do on linux, you can do on a linode.
	- Bottom Line : More bang for your buck. Linodes are supposedly faster than AWS.
3. AWS
	- Amazon Web Services is virtual machine provider that gives you ALL the bells and whistles.
	- Launch a machine with the EC2 service and connect that to the storage service S3, and log it all to a never ending database like DynamoDB.
	- Bottom Line : AWS is better for controlling and deploying your full scale enterprise cloud applications.

Linode overview - Differences from Vagrant (root directory)???

[Deploy Node.js on Linode](http://blog.nodeknockout.com/post/9300619913/countdown-to-ko-14-deploying-your-node-js-app-to)

AWS overview 
[Heroku overview](heroku.md) (simple overview)

#### Load Balancing

Load Balancing is the practice of distributing clients/connections to multiple servers running the same application. This is to alleviate overloading a server and causing poor performance.

First there are Hardware and Software Load Balancers. Hardware typically means there is a dedicated machine that is optimized for handling this process. Where software based you might program into your application.

- Round Robin - A client connects, and the load balancer directs them to the next server sequentially. Client 1 = Server 1, Client 2 = Server 2, Client 3 = Server 1.
- Least Connection - In this case the load balancer is talking to the servers and monitoring the connections. When a client connects the load balancer directs them to the server with the least amount of connections.
- Latency Based - Typically done at the DNS/Routing level, when a client hits a domain/URL and the client receives the server with the quickest connection/ping/lowest latency. So a client in India would typically have more latency connecting to US servers than connecting to Singapore servers because of there distance from India.

The idea of a true cloud application or service would be to have multiple servers around the world and as a client connects to the application, they are given the fastest connection. And when serving files or storing them you connect through the closest end points. Lastly for data storage security, a files would be redundantly stored on multiple systems in different locations... THE CLOUD!