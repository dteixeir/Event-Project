(function () {
    angular.module('eventApp', ['ngRoute']);
    
    angular.module('eventApp')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    controller: 'LoginController',
                    templateUrl: 'app/views/login.html'
                })
                .when('/newEvent', {
                    controller: 'NewEventController',
                    templateUrl: 'app/views/newEvent.html'
                })
                .when('/editEvent/:id', {
                    controller: 'EditEventController',
                    templateUrl: 'app/views/editEvent.html'
                })
                /*.otherwise({
                    redirectTo: '/'
                })*/;
        });
    
}) ();
