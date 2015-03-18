var express = require("express");
var livereload = require("connect-livereload");
var app = express();
var path = require("path");
var request = require("request");

app.use(livereload());
app.use(express.static(path.join(__dirname, "../client")));

app.get("/columnists", function (req, res) {

});

var port = process.env.PORT || 3000;
console.log("Server started on port " + port + ".");
app.listen(port);
