var express = require("express");
var livereload = require("connect-livereload");
var app = express();
var path = require("path");

app.use(livereload());
app.use(express.static(path.join(__dirname, "../client")));

var port = process.env.PORT || 3000;
console.log("Server started on port " + port + ".");
app.listen(port);
