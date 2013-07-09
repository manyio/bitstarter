#!/usr/bin/env node
var express = require('express'),
os = require('os'),
fs = require('fs'),
app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(new Buffer(fs.readFileSync('index2.html', 'utf-8')).toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
