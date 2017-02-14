// dependencies
var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.use(express.static(path.join(__dirname, '/../public')));
app.listen(8080);
