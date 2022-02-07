// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
app.use(express.static("website"));

const port = 8000;
const listen = () => {
  console.log(`server is running at port ${port}`);
};
const server = app.listen(port, listen);

/*

Glossary
Below is the summary of all the keywords in this lesson:

Server-side: It refers to operations performed by the server in a network. In web development, we used the Server-side scripting technique to employ scripts on a web server that produces a response for each user's request.
Client-side: It refers to operations performed at the client or user's end.
Package: It is a file or directory defined by a package.json. The npm registry contains many packages which are node modules or include node modules.
Module: Any file or directory in the node_modules directory that can be loaded by the Node.js require() function is known as a module.
Arrow function: An arrow function is a compact alternative to a traditional function expression.

*/
