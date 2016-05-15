(function () {
    angular.module('eventApp')
        .controller('NewEventController', NewEventController);


    function NewEventController($scope, $routeParams, eventFactory, validationService) {
        var vm = $scope;
        var submitTried = false;
        $scope.event = null;

        // variables
        vm.guest = '';

        //functions
        vm.addGuest = addGuest;
        vm.createEvent = createEvent;
        vm.validate = validate;
        vm.validateFields = validateFields;
        vm.print = print;
        //vm.answerChoice = null;
        
        function printMe(){
            console.log('hi!');
        }

        vm.event = {
            name: '', host: '', type: '', startDateTime: '',
            endDateTime: '', location: '', discription: '', guests: []
        };

        vm.validEvent = {
            name: false, host: false, type: false, startDateTime: false, endDateTime: false,
            location: false, discription: false, guests: false
        }

        function addGuest() {
            vm.event.guests.push({ name: vm.guest });
            vm.guest = '';
        };

        function createEvent() {
            var check = validateFields()
            if (check) {
                eventFactory.createEvent(vm.event)
                    .success(function () {
                        window.location.href = "#/viewEvents/";
                    });
            } else {
                submitTried = true;
            }
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

        function validateFields() {
            for (i in vm.validEvent) {
                if (!vm.validEvent[i]) {
                    return;
                }
            }
            console.log('hah!');
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