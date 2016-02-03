/// </// <reference path="_reference.ts" />
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 3000;
//main route
app.get('/', function (req, res, next) {
    res.sendfile(path.join(__dirname, "Public", "Home.html"));
});
//route for about
app.get('/about', function (req, res) {
    res.sendfile(path.join(__dirname, "Public", "About.html"));
});
//route for contact
app.get('/contact', function (req, res) {
    res.sendfile(path.join(__dirname, "Public", "Contact.html"));
});
//route for social
app.get('/social', function (req, res) {
    res.sendfile(path.join(__dirname, "Public", "Social.html"));
});
//route for skills
app.get('/skills', function (req, res) {
    res.sendfile(path.join(__dirname, "Public", "Skills.html"));
});
//route for services
app.get('/services', function (req, res) {
    res.sendfile(path.join(__dirname, "Public", "Services.html"));
});
app.listen(port, function () {
    console.log("App Server started... on port: " + port);
});
//# sourceMappingURL=server.js.map