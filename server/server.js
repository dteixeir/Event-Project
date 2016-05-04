// BASE SET UP
//=================================================================
// call packages needed
var express         = require('express');
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var _               = require('lodash');

// create app
var app             = express();

var port = process.env.PORT || 8080;    //sets the port to be used

// configure app to use bodyParser()
// this lets you get data from a POST!!!!!
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override')); // - still not sure what this does!!!

//CORS Support (CORS - Cross-Origin Resource Sharing)
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // allows access from everywhere - BEWARE!
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

mongoose.connect('mongodb://dan:dan@ds011732.mlab.com:11732/eventapi');
mongoose.connection.once('open', function() {

    // Load all the models
    app.models = require('./models/index');
    
    // Load Routes
    var routes = require('./routes');
    _.each(routes, function(controller, route) {
        app.use(route, controller(app, route));
    });
    
    // START SERVER
    console.log('Magic happening on port ' + port);
    app.listen(port);
    
});