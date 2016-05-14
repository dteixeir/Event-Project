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
        //vm.creatUserObj = creatUserObj;
        vm.fieldValidate = fieldValidate;
        vm.check = check;
        vm.checkPass = checkPass;
        vm.hadFocus = hadFocus;
        
        vm.focus = {
            fName: false,
            lName: false,
            eMail: false,
            pass1: false,
            pass2: false
        };
        
        vm.valid = {
            fName: false,
            lName: false,
            email: false,
            pass1: false,
            pass2: false
        };

        function fieldValidate(fieldData) {
            if (fieldData)
                return true;
        }

        function check(variable, name) {
            if (!variable)
                return;
                
            switch (name) {
                case 'lName':
                case 'fName':
                    if (variable.length >= 4) {
                        vm.valid[name] = true;
                        return 1;
                    } else {
                        vm.valid[name] = false;
                        return 2;
                    }
                    
                case 'email':
                    var re = /\S+@\S+\.\S+/;
                    if(re.test(variable)) {
                        vm.valid[name] = true;
                        return 1;
                    } else {
                        vm.valid[name] = false;
                        return 2;
                    }            
            }    
        }
        
        function hadFocus(name) {
            vm.focus[name] = true;
        }

        function checkPass(name) {
            if (!vm.focus.pass1 && !vm.focus.pass2 && !vm.user.first && !vm.user.second)
                return;

            //function validatePassword() {
                if(vm.user.first === undefined || vm.user.second === undefined)
                    return;

                else if (vm.user.first.length <= 10) {
                    //user.first.setCustomValidity("10 characters min");
                    vm.valid[name] = false;
                    return 2;
                }

                else if (vm.user.first.length >= 101) {
                    //user.first.setCustomValidity("100 characters max");
                    vm.valid[name] = false;
                    return 2;
                }

                else if (!/[a-z]/.test(vm.user.first)) {
                    //user.first.setCustomValidity("1 lowercase letter required");
                    vm.valid[name] = false;
                    return 2;
                }

                else if (!/[A-Z]/.test(vm.user.first)) {
                    //user.first.setCustomValidity("1 upper case letter required");
                    vm.valid[name] = false;
                    return 2;
                }

                else if (!/\d/.test(vm.user.first)) {
                    //user.first.setCustomValidity("number required");
                    vm.valid[name] = false;
                    return 2;
                }

                else if (/[\(\)\[\]\{\}\<\>\.\,\`\~\?\"\;\:\\\|\+\=\-\_\/\s\t\r]{1,}/.test(vm.first)) {
                    //user.first.setCustomValidity("illegal password");
                    vm.valid[name] = false;
                    return 2;
                }

                else if (/[\!\@\#\$\%\^\&\*]/.test(vm.user.first) == false) {
                    //user.first.setCustomValidity("symbol required");
                    vm.valid[name] = false;
                    return 2;
                }

                else {
                    if (vm.user.first != vm.user.second) {
                    //vm.user.first.setCustomValidity("Passwords Do Not Match");
                        vm.valid[name] = false;
                        return 2;
                    }
                    //vm.user.first.setCustomValidity("");
                    //vm.user.second.setCustomValidity("");
                    //vm.user.first.checkValidity("");
                    //vm.user.second.checkValidity("");
                    vm.valid[name] = true;
                    return 1;
                }
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