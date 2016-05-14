(function () {
    //'use strict';
    angular.module('eventApp')
        .service('validationService', validationService);

    function validationService() {
        var service = {
            validatePassword: validatePassword
        };

        return service;

        
    }
} ())