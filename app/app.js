(function () {
    angular.module('eventApp', ['ngRoute','ngMessages']);
    
    angular.module('eventApp')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    controller: 'CreateAccountController',
                    templateUrl: 'app/CreateAccount/CreateAccount.html'
                })
                .when('/newEvent', {
                    controller: 'NewEventController',
                    templateUrl: 'app/newEvent/newEvent.html'
                })
                .when('/viewEvents', {
                    controller: 'ViewEventsController',
                    templateUrl: 'app/viewEvents/viewEvents.html'
                })
                /*.otherwise({
                    redirectTo: '/'
                })*/;
        });
    
}) ();
