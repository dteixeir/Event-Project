// BASE SET UP
//=================================================================
// call packages needed
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var Event       = require('./app/models/event')

var mongoose = require('mongoose');
mongoose.connect('mongodb://dan:dan@ds011732.mlab.com:11732/eventapi');


// configure app to use bodyParser()
// this lets you get data from a POST!!!!!
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;    //sets the port to be used


// ROUTES FOR API
//================================================================
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging? 
    console.log('Behold... there is magic!');
    next();
});







// ================ RUN IT AND TEST! ================================

// test route to check if working! (accessed from - http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({message: 'Huzzah! Welocome to the the API!'});  
});



// this go here? 
router.route('/events')

    .post(function(req, res) {
        var event = new Event();
        event.name = req.body.name;
        
        event.save(function(err) {
            if (err) {
                res.send(err);
            }
            
            res.json({message: 'Event Created!' });
        });
    })
    
    .get(function(req, res) {
        Event.find(function(err, events) {
            if (err)
                res.send(err);
                
            res.json(events)
        });
    });
    
router.route('/events/:event_id')
    
    .get(function(req, res) {
        Event.findById(req.params.event_id, function (err, event) {
            if (err)
                res.send(err);
                
            res.json(event);
        });
    })
    
    .put(function(req, res) {
        Event.findById(req.params.event_id, function(err, event) {
            if (err)
                res.send(err);
                
            event.name = req.body.name;
            
            event.save(function(err) {
                if (err)
                    res.send(err);
                    
                res.json({message: 'Event updated!'});
            });
        });
    })
    
    .delete(function(req, res) {
        Event.remove({
            _id: req.params.event_id
        }, function (err, event) {
            if (err)
                res.send(err);
                
            res.json({ message: 'successfully deleted'});
        });
    });


// Register routes! ------
// all routes will be prefixed with----->  /api
app.use('/api', router);

// START SERVER
app.listen(port);
console.log('Magic happening on port ' + port);