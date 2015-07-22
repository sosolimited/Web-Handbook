---
title: Introduction to Databases
layout: default
---

> **Contents**
> [Database Schemas](#database-schemas)
> [Concept of Relational Schemas](#concept-of-relational-schemas)
> [CRUD](#crud)
> [Introduction to Document-oriented Databases](#introduction-to-document-oriented-databases)
> [MongoDB Basics](#mongodb-basics)

Often when handling data streaming from a third party API source, your project concept may require the reordering and transformation of the source data into a format useful to your custom software. Your concept may call for batch analysis of this data, or providing your own custom API to allow other clients to access your backlog of this data. In these cases, it is useful to store the data long-term. Database software allows you to efficiently store custom data structures, providing an API for your software to query and retrieve it.

# Database Schemas

Databases store your data in an ordered structure you define. Generally, you want to divide different classes of data into different sets, or **tables**. Tables typically organize data around "nouns," like Tweets, People, Posts, Books. The structure of a table, or **schema**, defines the fields you are storing in the table. Using a Tweet as an example, fields defined in the schema may be

```
tweet_id (int, unique)
user_id (int)
tweet_text (string)
date_posted (date)
num_retweets (int)
```

Each tweet added to the table is known as a row. A Tweets table with 4000 rows has 4000 different tweet entries. Designing a schema for each table ensures data you attempt to insert conforms to the schema you established. Additionally, the database software can more efficiently store data it knows to be of certain types and maximum expected size. Different fields can have certain constraints beyond type checking and maximum size. For instance, you can set one **column** of data in the table to accept only unique values in the context of every other row's value from the same field.

# Concept of Relational Schemas

Imagine designing a schema for a table of Books and a table of Authors. You could define something like:

```
book_id (int, unique)
book_title (string)
book_publish_date (data)
author_id (int)

----

author_id (int, unique)
author_name (string)
author_location (string)
author_bio (string)
```

Relational databases allow you to establish relationships between multiple tables. Instead of giving every book multiple author field types, which could cause data to be unnecessarily duplicated across multiple books by the same author, you would add a single field to the Book schema called author_id (int), referencing a unique ID from the Authors table. This keeps the Books table as lean as possible while drawing useful connections to external structures of data. Database software allows you to write a single query that returns information from both tables.

> <a href="http://code.tutsplus.com/articles/sql-for-beginners-part-3-database-relationships--net-8561" target="_blank">Relational Patterns in Databases</a>
> ![ARTICLE](images/links/tag_article.png)

Two widely used relational database are MySQL and PostgreSQL.

## CRUD

CRUD, or create, read, update, and delete, refers to the types of operations you can make on stored data. With relational databases, creating (or **inserting**) data requires you package your data into a structure defined by the table's schema, passing it along to the database's API for insertion. Read (a.k.a. **select**), update, and delete operations require that you specify one or multiple table rows to apply an operation to. You can reference existing fields and their values when targeting rows for an operation. The syntax for querying and operating on data can depend on the type of database software you use, but if we were to illustrate examples in plain english:

```
select the book with the id of 384
select every tweet with more than 15 retweets
update the tweet with id 38457723 by incrementing its retweet count by 3
delete every author with a less than 3 published books
```

# Introduction to Document-oriented Databases

Standing in contrast to the relational databases, document-oriented databases (also called NoSQL databases) care less about schema and rigid structure. With relational databases, every instance of data in a given table has to strictly follow the same data structure. Changing this structure is difficult. With document databases, every instance of data in a given "table" (sometimes called **collections** with NoSQL databases) can have a completely different structure. After inserting data, or document, you can arbitrarily change the document's structure.

Querying data in a document database in quite similar to querying relational data, as a single document can have multiple key-value fields you can utilize when reading, updating, and deleting. Additionally, documents can be associated with a unique key in a similar fashion to relational databases.

Documents can take different formats, like XML or JSON, depending on the DB software. An example document may look like:

```json
{
    "tweet_id": 291391341,
    "tweet_text": "Blah blah blah",
    "created_at": "2009-06-15T13:45:30",
    "user_handle": "sosolimited"
}
```

**When would you use a document database?**

Document databases are not perfect for every situation. If your data requires tight relational structure across multiple tables, you are probably better off using a relational database. If you care a lot about ensuring consistent formatting of data in a single table/collection, you are probably better off using a relational database.

The looseness of document database structures allows you to quickly iterate on document schema while developing. Additionally, the modern and programmer-friendly APIs to NoSQL databases allow you to seamlessly move data between your software (e.g. Node.js) and the DB without having to restructure the data.

# MongoDB Basics

MongoDB is a document-oriented DB. It stores its documents in JSON format and provides both a command-line Javascript interface and a REST HTTP API for CRUD operations. There are a couple of different packages available for Node.js that provide client support. Below is a quick tutorial:

```
# install it with brew
brew install mongodb

# run the database software by specifying a location that Mongo will use to store data
mongod --dbpath /usr/local/var/mongodb

# in a separate console window, connect to the Mongo server process
mongo
```

Now that you've connected to the Javascript-powered MongoDB command line, you can practice some CRUD operations

```javascript
// "use" tells mongo which DB you'd like to work with. Doesn't have to exist yet.
use tutorial

// we can now insert a new document into a collection. We reference our tutorial db with 'db'
// and using the dot notation, specify the collection we'd like to insert into. Like "using" a DB,
// the collection does not have to exist for us to reference it
db.tweets.insert({
    text: "My Example Tweet.",
    user: "sosolimited",
    created: new Date( 2015, 6, 8 ),
    num_retweets: 25
})

db.tweets.insert({
    text: "My Example Tweet #2.",
    user: "fathom",
    created: new Date( 2015, 6, 9 ),
    num_retweets: 0,
})

// Cool, we just inserted a couple of javascript objects, even instantiating a JS Date object.
// Querying is just as simple. To return all of the data, we can give an empty query object:

db.tweets.find({})

// we can look at values of any field
db.tweets.find({ 'user': 'fathom' });

db.tweets.find({
    'num_retweets': {
        $gte: 10
    }
})

// updating documents takes a search parameter in the same format as used by find(),
// plus another object with key-values you wish to change on the set of matched documents.
// You must specify which update operation you want to perform. `$set` is a common one,
// which sets any key-value pairs you provide. Another is `$inc` which increments a property.
db.tweets.update({'user': 'fathom'}, {
    $set: {
        'num_retweets': 1000,
        'num_saves': 150
    }
});

// deleting documents is easy
db.tweets.remove({'user': 'fathom'})

// When can also 'drop' the entire collection which will delete it from the database:
db.tweets.drop()

// Dropping the entire database, and any collections inside of it:
db.dropDatabase()
```

That covers the basic command line CRUD operations with Mongo. Because the Mongo command line uses Javascript as an engine, you'll find that the syntax for working with Mongo inside of a Node.js script is quite similar.