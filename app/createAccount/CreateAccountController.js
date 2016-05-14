(function () {
    angular.module('eventApp')
        .controller('CreateAccountController', CreateAccountController);


    function CreateAccountController($scope, validationService) {
        var vm = $scope;
        

        // variables 
        vm.first = "BlueSubie213!";
        vm.second = "BlueSubie213!";
        vm.user = [];

        //functions
        vm.login = login;
        vm.fieldValidate = fieldValidate;
        vm.check = check;
        vm.checkPass = checkPass;
        vm.hadFocus = hadFocus;
        
        vm.focus = {
            fName: false,
            lName: false,
            eMail: false,
            first: false,
            second: false
        };
        
        vm.valid = {
            fName: false,
            lName: false,
            email: false,
            first: false,
            second: false
        };

        function fieldValidate(fieldData) {
            if (fieldData)
                return true;
        }

        function check(variable, name) {
            if (!variable)
                return;
            var valid = validationService.check(variable, name)
            if (valid == 1){
                vm.valid[name] = true;
            } else {
                vm.valid[name] = false;
            }
            return valid;
        }
        
        function hadFocus(name) {
            vm.focus[name] = true;
        }

        function checkPass(name) {
            if (!vm.focus.pass1 && !vm.focus.pass2 && !vm.user.first && !vm.user.second)
                return;
            
            var valid = validationService.checkPass(vm.user.first, vm.user.second);
            if (valid == 1){
                vm.valid[name] = true;
            } else {
                vm.valid[name] = false;
            }
            return valid; 
        }

        function login() {
            for(i in vm.valid){
                if(!vm.valid[i]) {
                   return; 
                }
                
            }
            window.location.href = "#/viewEvents";
        }  
    }
})();