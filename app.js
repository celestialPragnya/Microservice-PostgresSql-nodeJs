var pool = require('./db');
//var dbpool = require('./dbpool');
var config = require("./config");
var express = require('express');
var app = express();
var route = require('./router/route');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json({
        status: true,
        message: "Welcome"
    })
})

app.use('/', route);

app.listen(config.PORT, function () {
    console.log("Server started at port " + config.PORT);
})