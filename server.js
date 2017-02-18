// dependencies
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var stripe = require('stripe')("sk_test_Rv4Q93GKys8tMQ0AdnsbqlcW");
var Sequelize = require('sequelize');
var sequelize = new Sequelize('wrapbox', 'root', 'glory123',
{
	host: 'localhost',
	port: 3306,
	dialect: 'mysql'
});
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.post('/signin', function (req, res) {
	var email = req.body.email;
	var password = req.body.password;
});

app.use(express.static(path.join(__dirname, '/../public')));
app.listen(PORT);
