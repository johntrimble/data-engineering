# lschallenge

This is to fulfill the following: [https://github.com/lschallenges/data-engineering](https://github.com/lschallenges/data-engineering).

The solution uses ClojureScript with Om and Bootstrap for the front-end and Clojure with Compojure for the backend. It uses an in memory [HSQLDB](http://hsqldb.org/) relational database to store imported data. The choice of database was made to better facilitate running and evaluating the application and application code.

* [Requirements](#requirements)
* [Build Client Distribution](#build-client-distribution-optional)
* [Package and Run Application](#package-and-run-application)
* [Build and Run Application for Development](#build-and-run-application-for-development)
* [Run Tests](#run-tests)
* [Notes on CSV Upload](#notes-on-csv-upload)
* [Browser Support](#browser-support)

## Requirements
* [Leiningen](http://leiningen.org/#install) (>=2.3.2)

### The following only required if building client
* [Node.js](http://nodejs.org/download/) (>=0.10.26)
* [npm](https://www.npmjs.org/doc/README.html) (>=1.4.3)
* [Grunt](http://gruntjs.com/getting-started) (>=4.2)
* [Bower](http://bower.io/) (>=1.2.4)
* [Compass](http://compass-style.org/install/) (>=0.12.2) 

## Build Client Distribution (optional)
If you would like to build a distribution of the client code, instead of using the prebuilt files, run the following from the project root:

```
cd client
npm install
bower install
grunt
```

## Package and Run Application
After optionally building a client distribution, run the following from the project root:

```
cd server
lein uberjar
```
You can then execute the generated JAR file by running the following:

```
java -jar target/lschallenge-0.1.0-SNAPSHOT-standalone.jar
```

This will start a Jetty server accessible at [http://localhost:4000/](http://localhost:4000/).

## Build and Run Application for Development
During development, it is convenient to be able to edit HTML/CSS/JS/etc. files without having to manually run a build or refresh a browser window. The following instructions will describe how to run both the client and server to better facilitate rapid development.

You'll need at least two terminals. From one, execute the following from the project root to start up the server for development:

```
cd server
lein ring server-headless
```
This will start a Jetty server accessible at [http://localhost:4000/](http://localhost:4000/); however, you typically will not access Jetty directly during development.

From another terminal, execute the following from the project root:

```
cd client
npm install
bower install
grunt serve
```

This will:

* Compile ClojureScript source
* Compile Sass source
* Start a static content server at [http://localhost:9000](http://localhost:9000)
	* Proxies `http://localhost:9000/api/` to `http://localhost:4000/api/`
	* Live reloads the browser on content changes (updating ClojureScript code, HTML, CSS, etc.)

Assuming there are no errors, this task should automagically open up a browser window to [http://localhost:9000](http://localhost:9000).

If you'd like to have your client tests run continuously in the background as well, use the `--with-tests` option:

```
grunt serve --with-tests
```

## Run Tests
### Client
From the project root, execute the following:

```
cd client
npm install
bower install
grunt test
```

### Server
From the project root, execute the following:

```
cd server
lein spec
```

## Notes on CSV Upload

- Tested with uploads of up to 10,000 records
- The backend stores the price of an item as an integer representing the price of the item in pennies. This means fractional pennies are not supported. 
- The format of the price must conform the following regular expression:

```
(([1-9][0-9]*)|0)([.][0-9]?[0-9]?)?
```

- The count must be whole number containing no fractional component (e.g. 10 is allowed, 10.1 or 10.0 are not).
- Purchasers and merchants are de-duped via their name.
- Addresses are de-duped via the address string.
- Items are de-duped by their description and price.
- Purchases are not de-duped.
- No attempt is made to parse a person or a merchants name (e.g. names will not be split into first/last names).
- No attempt is made to parse addresses.
- If errors are present in the CSV, a "best effort" will be made to import as much of the data as possible.

## Browser Support
Tested on the following browsers:

- Chrome 34
- Internet Explorer 11
- Firefox 28
