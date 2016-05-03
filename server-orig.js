var express = require('express'),
    app = express();
    
app.use(express.static(__dirname + '/'));


app.get('/events/:id', function(req, res) {
    var eventId = parseInt(req.params.id);
    var data = {};
    
    for (var i = 0, len = events.length; i < len; i++) {
        if (events[i].id === eventId) {
            data = events[i];
            break;
        }
    }
    res.json(data);
    
});

app.get('/events', function(req, res) {
    res.json(events);
});

app.listen(8080);

console.log('Express listening on port 8080');

// var of events goes here? 

var events = [
                {
                    id: 1, 
                    location: '120 U.S. 70, Mebane, NC, United States', 
                    eDiscription: "screw knockout!", 
                    eEndDate:"04/21/2016", 
                    eEndTime: "01:01",
                    eGuestList: "",
                    eGuestName: "",
                    eHost: "Jimmy",
                    eName: "Heck Yes",
                    eStartDate: "04/20/2016",
                    eStartTime: "00:12",
                    eType: "Dinner"
                }
            ];