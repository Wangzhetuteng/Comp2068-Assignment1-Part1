/// </// <reference path="_reference.ts" />
import express = require('express');
import path = require('path');

var app:express.Express = express();

var port:number = process.env.port || 3000;

//main route
app.get('/', function (req:express.Request, res:express.Response, next:any) {
    res.sendfile(path.join(__dirname, "Public", "Home.html"));
});

//route for about
app.get('/about', function(req:express.Request, res:express.Response){
    res.sendfile(path.join(__dirname, "Public", "About.html"));
});

//route for contact
app.get('/contact', function(req:express.Request, res:express.Response){
    res.sendfile(path.join(__dirname, "Public", "Contact.html"));
});

//route for social
app.get('/social', function(req:express.Request, res:express.Response){
    res.sendfile(path.join(__dirname, "Public", "Social.html"));
});

//route for skills
app.get('/skills', function(req:express.Request, res:express.Response){
    res.sendfile(path.join(__dirname, "Public", "Skills.html"));
});

//route for services
app.get('/services', function(req:express.Request, res:express.Response){
    res.sendfile(path.join(__dirname, "Public", "Services.html"));
});



app.listen(port, function(){
    console.log("App Server started... on port: " + port);
}); 