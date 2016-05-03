(function () {
    //'use strict';
    angular.module('eventApp')
        .factory('eventFactory', eventFactory);
    
    function eventFactory ($http) {
        var factory = {
            getEvents:getEvents,
            getEvent: getEvent
        };
        
        function getEvents() {
            return $http.get('/events');
        };
        
        function getEvent (eventId) {
            return $http.get('/events/' + eventId);
        };
        
        return factory; 
    }
    
} ()); 