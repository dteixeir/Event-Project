(function () {
    angular.module('eventApp')
        .controller('NewEventController', NewEventController);


    function NewEventController($scope, $routeParams, eventFactory, validationService) {
        var vm = $scope;

        var eventId = $routeParams.id;
        $scope.event = null;

        // variables
        vm.guest = '';

        //functions
        vm.addGuest = addGuest;
        vm.createEvent = createEvent;
        vm.validate = validate;
        //vm.answerChoice = null;

        vm.event = {
            name: '', host: '', type: '', startDate: '', startTime: '',
            endTime: '', location: '', discription: '', guests: []
        };

        vm.validEvent = {
            name: false, host: false, type: false, startDate: false,
            startTime: false, endTime: false, location: false, discription: false, guests: false
        }
        
        function addGuest() {
            vm.event.guests.push({ name: vm.guest });
            vm.guest = '';
        };

        function createEvent() {
            eventFactory.createEvent(vm.event)
                .success(function () {
                    window.location.href = "#/viewEvents/";
                });
        }

        function validate(variable, name) {
            if (!variable)
                return;
            var valid = validationService.check(variable, name)
            if (valid == 1) {
                vm.validEvent[name] = true;
            } else {
                vm.validEvent[name] = false;
            }
            return valid;
        }

        /*
        function answer(ans) {
            vm.answerChoice = ans;
        }
 
        vm.guests = [];
        
        vm.question = {
        questionText: "Is the event one day?",
        choices: [{
                id: 1,
                text: "yes",
                isUserAnswer: true
            }, {
                id: 2,
                text: "no",
                isUserAnswer: false
            }]
        }; */

    }

})();