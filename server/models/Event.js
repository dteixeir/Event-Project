var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('event', EventSchema);