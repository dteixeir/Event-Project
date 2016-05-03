(function () {
    angular.module('eventApp')
        .controller('NewEventController', NewEventController);
       
        
    function NewEventController($scope, eventFactory) {
        var vm = $scope;
        var db = new Firebase('https://glowing-fire-9589.firebaseio.com');
        
        vm.typeListOptions = [
            "Birthday Party",
            "Conference",
            "Convention",
            "Dinner",
            "Movie Night",
            "Reunion",
            "Wedding"
        ];
            
        vm.CheckStuff = CheckStuff;
        vm.EditEvent = EditEvent;
        vm.AddGuest = AddGuest;
        vm.init = init;
        vm.print = print;
        
        init();

        function CheckStuff() {
            if(CheckValid()) {
                var eName =  eName;
                var eType = eType;
                var eHost = eHost;
                var eStartDate = eStartDate;
                var eEndDate = eEndDate;
                var eStartTime = eStartTime;
                var eEndTime = eEndTime;
                var autocomplete = eLocation;
                var eDiscription = eDiscription;
                var eGuestList = "";
                var eGuestName = "";

                db.child('events').child(eName).set({eName: eName, eType: eType, eHost: eHost, eStartDate: eStartDate,
                eEndDate: eEndDate, eStartTime: eStartTime, eEndTime: eEndTime, eLocation: eLocation, 
                eDiscription: eDiscription, eGuestList: eGuestList, eGuestName: eGuestName });
            }
        }

        function EditEvent(event) {
            window.location.href = "#/newEvent/"+ event.id;
        }

        function AddGuest(event) {
            var guestName = $('#events').find('.guestName').val();

            if(guestName) {
                event.eGuestList = event.eGuestList + ", " + guestName;
                db.child("events/" + event.eName ).update(event);
            }
        }

        // on document ready fetch from the db - call back that uses function onCall
        function init() {
            eventFactory.getEvents()
                .success(function(events) {
                    vm.stuffs = events;
                })
                .error(function(response) {
                    console.log(response);
                });
        }
        
        /* 
        This was omitted due to being able to create and use the mini REST API
        function init() {
            return db.child('events').orderByChild('eName').on('value', function(snapshot) {
                vm.stuffs = snapshot.val();
                $scope.$apply();
            });
        }*/
        
        function print(eventInfo) {
            console.log(eventInfo);
        }
    }  
    
}) ();