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
            return $http.get('http://localhost:8080/api/' + 'event');
        };
        
        function getEvent (eventId) {
            return $http.get('http://localhost:8080/api/event/' + eventId);
        };
        
        // Does this one have to be defined? Save?
        function createEvent () {
            return $http.post('http://localhost:8080/api/event/');
        };
        
        
        
        return factory; 
    }
    
} ()); 