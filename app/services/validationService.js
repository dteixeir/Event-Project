(function () {
    //'use strict';
    angular.module('eventApp')
        .service('validationService', validationService);

    function validationService() {
        var service = {
            validatePassword: validatePassword,
            check: check,
            checkPass: checkPass
        };

        return service;


        function check(variable, name) {
            if (!variable)
                return;

            switch (name) {
                case 'lName':
                case 'fName':
                    if (variable.length >= 4) {
                        return 1;
                    } else {
                        return 2;
                    }

                case 'email':
                    var re = /\S+@\S+\.\S+/;
                    if (re.test(variable)) {
                        return 1;
                    } else {
                        return 2;
                    }
            }
        }

        function checkPass(pass1, pass2) {
            //function validatePassword() {
            if (pass1 === undefined || pass2 === undefined)
                return;

            else if (pass1.length <= 10) {
                //user.first.setCustomValidity("10 characters min");
                //vm.valid[name] = false;
                return 2;
            }

            else if (pass1.length >= 30) {
                //user.first.setCustomValidity("100 characters max");
                //vm.valid[name] = false;
                return 2;
            }

            else if (!/[a-z]/.test(pass1)) {
                //user.first.setCustomValidity("1 lowercase letter required");
                //vm.valid[name] = false;
                return 2;
            }

            else if (!/[A-Z]/.test(pass1)) {
                //user.first.setCustomValidity("1 upper case letter required");
                //vm.valid[name] = false;
                return 2;
            }

            else if (!/\d/.test(pass1)) {
                //user.first.setCustomValidity("number required");
                //vm.valid[name] = false;
                return 2;
            }

            else if (/[\(\)\[\]\{\}\<\>\.\,\`\~\?\"\;\:\\\|\+\=\-\_\/\s\t\r]{1,}/.test(pass1)) {
                //user.first.setCustomValidity("illegal password");
                //vm.valid[name] = false;
                return 2;
            }

            else if (/[\!\@\#\$\%\^\&\*]/.test(pass1) == false) {
                //user.first.setCustomValidity("symbol required");
                //vm.valid[name] = false;
                return 2;
            }

            else {
                if (pass1 != pass2) {
                    //vm.user.first.setCustomValidity("Passwords Do Not Match");
                    //vm.valid[name] = false;
                    return 2;
                }
                //vm.user.first.setCustomValidity("");
                //vm.user.second.setCustomValidity("");
                //vm.user.first.checkValidity("");
                //vm.user.second.checkValidity("");
                //vm.valid[name] = true;
                return 1;
            }
        }
    }
} ())