(function () {
    angular.module('eventApp')
        .controller('EditEventController', EditEventController);
       
        
    function EditEventController($scope, $routeParams, eventFactory) {
        var vm = $scope;
        
        var eventId = $routeParams.id;
        $scope.event = null;
        
         vm.CheckStuff = CheckStuff;
        vm.EditEvent = EditEvent;
        vm.AddGuest = AddGuest;
        vm.init = init;
        vm.print = print;
        
        function init() {
            eventFactory.getEvent(eventId)
                .success(function(response) {
                    $scope.event = response;
                })
                .error(function(response) {
                  console.log(response);  
                });
        }
        
        init();
        
        
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
            window.location.href = "editEvent.html";
        }

        function AddGuest(event) {
            var guestName = $('#events').find('.guestName').val();

            if(guestName) {
                event.eGuestList = event.eGuestList + ", " + guestName;
                db.child("events/" + event.eName ).update(event);
            }       
        };

        // on document ready fetch from the db - call back that uses function onCall
        /*
        function init() {
            return db.child('events').orderByChild('eName').on('value', function(snapshot) {
                vm.stuffs = snapshot.val();
                $scope.$apply();
            });
        }*/
        
        
        
        function print(eventInfo) {
            console.log('hi');
        }
    }  
    
}) ();