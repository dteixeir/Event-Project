var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    startDate: {
        type: String,
        required: true
    }, 
    
    // cant use word host!
    hostedBy: {
        type: String,
        required: true
    }, 
    
    startTime: {
        type: String,
        required: true
    }, 
    
    location: {
        type: String,
        required: true
    },
    
    type: String, 
    endTime: String,
    discription: String,
    guestList: String

});

module.exports = mongoose.model('event', EventSchema);