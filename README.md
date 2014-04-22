# lschallenge

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

## Packaging and Running Application
After optionally building a client distribution, run the following from the project root:

```
cd server
lein uberjar
```
You can then execute the genearted JAR file by running the following:

```
java -jar target/lschallenge-0.1.0-SNAPSHOT-standalone.jar
```

This will start a Jetty server accessible at [http://localhost:4000/](http://localhost:4000/).

## Running in Development
During development, it is convenient to be able to edit HTML/CSS/JS/etc. files without having to manually run a build or refresh a browser window. The following instructions will describe how to run both the client and server to better faciliate rapid development.

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

## Running Tests
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
lein test
```