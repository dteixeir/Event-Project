(function () {
    angular.module('eventApp')
        .controller('ViewEventsController', ViewEventsController);
       
        
    function ViewEventsController($scope, eventFactory) {
        var vm = $scope;
        //var db = new Firebase('https://glowing-fire-9589.firebaseio.com');
        
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

/*
                event = {
                    name: vm.eName,
                    type: vm.eType,
                    host: vm.eHost,
                    startDate: vm.eStartDate,
                    startTime: vm.eStartTime,
                    endDate: vm.eEndDate,
                    endTime: vm.eEndTime,
                    location: vm.eLocation,
                    discription: vm.eDiscription,
                    guestList: vm.eGuestList
                }*/
                
                
               // eventFactory.createEvent(event);
            }
        }

        function EditEvent(event) {
            window.location.href = "#/editEvent/"+ event._id;
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
        
        function print(eventInfo) {
            console.log(eventInfo);
        }
    }  
    
}) ();