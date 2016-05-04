var restful = require('node-restful');

module.exports = function(app, route) {
    // setup the controller for REST
    var rest = restful.model(
        'event',
        app.models.event
    ).methods(['get', 'put', 'post', 'delete']);
    
    // register this endpoint with app
    rest.register(app, route);
    
    // return middleware
    return function(req, res, next) {
        next();
    };
};