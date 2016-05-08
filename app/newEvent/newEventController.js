(function () {
    angular.module('eventApp')
        .controller('NewEventController', NewEventController);
       
        
    function NewEventController($scope, $routeParams, eventFactory) {
        var vm = $scope;
        
        var eventId = $routeParams.id;
        $scope.event = null;
        
        // variables
        vm.guest = '';
        
        //functions
        vm.CheckStuff = CheckStuff;
        vm.addGuest = addGuest;
        vm.createEvent = createEvent;
        
        // screw firebase!
        // var db = new Firebase('https://glowing-fire-9589.firebaseio.com');
        
        vm.typeListOptions = [
            "Birthday Party",
            "Conference",
            "Convention",
            "Dinner",
            "Movie Night",
            "Reunion",
            "Wedding"
        ];
        
         vm.guests = [
            {name:"jimmy"},
            {name:"john"},
            {name:'hillary'},
            {name:'davey'}
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

                // this needs to reroute to the service to create the object
                /*
                db.child('events').child(eName).set({eName: eName, eType: eType, eHost: eHost, eStartDate: eStartDate,
                eEndDate: eEndDate, eStartTime: eStartTime, eEndTime: eEndTime, eLocation: eLocation, 
                eDiscription: eDiscription, eGuestList: eGuestList, eGuestName: eGuestName });*/
            }
        }

        function addGuest() {
            console.log(vm.guest);
            vm.guests.push({name: vm.guest});
            vm.guest = '';
        };   
        
        function createEvent() {
            var event = {
                name: vm.name,
                startDate: vm.startDate,
                hostedBy: vm.host,
                startTime: vm.startTime,
                endTime: vm.endTime,
                location: vm.location,
                type: vm.type,
                discription: vm.discription,
                guestList: vm.guests
            };
            
            eventFactory.createEvent(event)
            .success(function(stuffs) {
                    console.log(stuffs);
                })
        } 
        
    }  
    
}) ();