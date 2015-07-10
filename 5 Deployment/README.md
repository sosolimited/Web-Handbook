Deployment
=================

In this section we will go over the deployment of a javascript application.

Focusing on the different server implementations, best practices, and a simple walk through example.

Now what...

## General Deployment

#### LAMP STACK

LAMP is an acronym for a commonly used server setup.  Linux, Apache, MySQL, and PHP. All components are basically software that works together to serve up websites. 

1. Linux - This is the actual operating system for the server. There are tons of options as far as the actual flavor of linux, but some of the common choices are Ubuntu, Red Hat, SUSE, Debian, and CentOS.

2. Apache - This is the software that handles HTTP requests. You can think of it like a router. A request comes in and will serve up the proper files.

3. MySQL - Is a relational database. You could use this to store everything from user information to website structure. Typically you would use a framework software like Wordpress or ProcessWire to handle the reading and writing to the database.

4. PHP - Is a programming language that is heavily used for coding websites. It is useful for generating dynamic web pages where you would inject something into the page like a user's name or maybe blog content.

#### SOSO STACK

At Soso we are usually focused on a bit more connectivity and a bit lighter than something like a wordpress site. So we like using a stack that uses Node.js, MongoDB, Linux, and Express.

1. Linux - Same as the LAMP stack. This is a servers operating system.

2. Node.js - Node is a server programming language that allows us to write server code with javascript. This makes it easy to transition from front end to back end programming. You can think of Node.js as the equivalent to Apache.

3. MongoDB - Mongo is a non-relational database. It will store what ever you throw at it regardless of it matching any pre-existing structure. Using Node.js modules like mongoose make it really easy to communicate with the database. Like passing JSON objects back and forth.

4. Express.js - Express is really a module that runs on Node.js. Express is probably the most widely used module for delivering websites. It handles the routing and can serve up templates much like PHP.

or

5. NGINX - This can replace Apache from the LAMP stack above.  NGINX is a modern static/routing web server software. It can also be used in combination with the setup above. NGINX could control your domain access and route to an underlying node app.

#### Provisioning Vagrant

With vagrant it is easy to have it setup systems that are identical to your server setup. This makes it great for local development and when you are ready to launch your app on a production server, you can just push and launch your repo.

Here is an example [provision script for vagrant](https://github.com/sosolimited/Webapp-Template/blob/vagrantUpdates/bootstrap.sh)...

#### NGINX

NGINX is web and proxy server that handles process Asynchronously and is Non-Blocking. Modern Apache 2.4 has some event driven updates that target these same issues. But overall depending on your application needs you may decide to choose one over the other.

 - NGINX is well suited for apps that need to handle large amounts of simultaneous requests. It can natively run php without extra modules. NGINX is also a viable option for overall server routing, where you may have users connected through nginx and then passed onto an Apache application.

 - Apached is well suited for Python and Ruby apps. Apache packs a lot of power but isn't as light weight as NGINX.

Here is an example NGINX nginx.conf ...
```nginx
server {
    listen          80 default_server;
 
    index           index.html;
    root            /var/www/default;
}
```

[NGINX, Node.js, Vagrant Provisioning](https://gist.github.com/DamonOehlman/5754302)

#### ZSH

Typically we would ssh into a deployment to issues commands through the zsh shell.

```bash
sudo apt-get update && sudo apt-get install zsh
wget –no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O – | sh
chsh -s /bin/zsh

# then restart the system
```


#### Git

`apt-get install -y git`

#### Server Tech
- Node
- NPM
- Express
- Nginx
- Mongo (or some DB)
- Ubuntu build essentials

#### SSH keys

The idea behind a ssh keys is that your local system has a key and the server has a copy of that key. Then when you ssh into a server the systems generate an RSA fingerprint to authenticate that its you. SSHing into servers is the standard secure way of controlling and maintaining a server. 

Guide to come.

### [Deployment Options](deployment-options.md).

- Linode
- Heroku
- AWS (Amazon Web Services)

#### Database replication

With a MySQL server we can run a simple data dump command and then import the resulting sql file into a new database.

```bash
# Dump
mysqldump -u root -p[root_password] [database_name] > dumpfilename.sql
# Restore
mysql -u root -p[root_password] [database_name] < dumpfilename.sql
```

With mongoDB we can also run a simple dump and restore command.

```bash
# Dump
mongodump --host mongodb1.example.net --port 3017 --username user --password pass --out /opt/backup/mongodump-2013-10-24
# Restore
mongorestore --host mongodb1.example.net --port 3017 --username user --password pass /opt/backup/mongodump-2013-10-24
```

If database begin to grow exceedingly large or are already distributed across multiple machines, you may have to look into advanced solutions like writing custom software to copy info to a local server and dumping it.

### Monitoring

#### Monit

Monit is a software for managing unix operations. You can use monit to monitor tasks like your application and have it trigger operations when certain conditions are met. So if the app crashes it could send an email notification and start a relaunch script.

Monit also has many more additional services like a web portal for viewing the current status of monitored operations.

- Monit - [Nice Tutorial](http://howtonode.org/deploying-node-upstart-monit)

#### Cron Jobs

Cron Jobs are operations that are cued from a Unix systems crontab. The crontab will have a list of operations and there scheduled time of when to be fired. This would allow you to run a script every night that restarts the system, or empties the trash ever month.

An example crontab from [UnixGeeks](http://www.unixgeeks.org/security/newbie/unix/cron-1.html)

```shell
root@pingu # cat /etc/crontab
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root
HOME=/

# run-parts
01 * * * * root run-parts /etc/cron.hourly
02 4 * * * root run-parts /etc/cron.daily
22 4 * * 0 root run-parts /etc/cron.weekly
42 4 1 * * root run-parts /etc/cron.monthly
```

### Example Deployment

- Coming Soon...(heroku)