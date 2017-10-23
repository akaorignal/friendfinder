// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require('express');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

//  'get' route with the url /survey.
// default 'use' route  home.html
// dependencies
var path = require('path');

module.exports = function(app){ // app=express
// survey page
app.get('/survey', function(req, res){
res.sendFile(path.join(__dirname + '/../public/survey.html'));
});
// home page
app.use(function(req, res){
  res.sendFile(path.join(__dirname + '/../public/home.html'));
});

};
