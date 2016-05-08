(function () {
    angular.module('eventApp')
        .controller('CreateAccountController', CreateAccountController);
       
        
        function CreateAccountController($scope) {
            var vm = $scope;  
            
            // variables 
            vm.first = "BlueSubie213!";
            vm.second = "BlueSubie213!";
            
            //functions
            vm.submit = submit;
            vm.validatePassword = validatePassword;
            vm.login = login;
            vm.creatUserObj = creatUserObj;
            vm.escapeEmailAddress = escapeEmailAddress;
            
        function accountCreate() {
            if(validatePassword(true)){
                var user = creatUserObj();
                
            }
        };
           
        function creatUserObj() {
            var user = {
                'firstName': vm.fName,
                'lastName': vm.lName,
                'eMail' : vm.eMail,
                'escapeEmail' : escapeEmailAddress(vm.eMail),
                'password' : vm.first
            };
            
            return user;
        }
        
        function login(){
            if(validatePassword(true))
            {
                //check the db for a user email
                db.child('users').child(escapeEmailAddress(vm.eMail)).once('value', function(snapshot) 
                {
                    if(!snapshot.val())
                        return;
                    var eMail2 = snapshot.val().eMail;
                    var dbPass = snapshot.val().password;

                    var stuff =  eMail2.localeCompare(vm.eMail)
                    if(eMail2.localeCompare(vm.eMail) == 0)
                    {
                        var stuff =  eMail2.localeCompare(vm.eMail)
                        console.log('logging in');

                        if (dbPass.localeCompare(vm.first) == 0 )
                        {
                            console.log('logged in!')
                            if(validatePassword(true))
                            {
                                window.location.href="#/newEvent";
                                
                            }
                        }
                        else
                        {
                            console.log('access denied');
                            alert("the account exists and you have used an improper password");
                            return validatePassword(false); 
                        }
                    }

                });
                
                 accountCreate();
            }
        };
        
        function validatePassword () {

            if(vm.first != vm.second)
            {
                first.setCustomValidity("Passwords Do Not Match");
            }

            else if(vm.first.length <= 10)
            {
                first.setCustomValidity("10 characters min");
            }

            else if(vm.first.length >= 101)
            {
                first.setCustomValidity("100 characters max");
            }
            
            else if(!/[a-z]/.test(vm.first))
            {
                first.setCustomValidity("1 lowercase letter required");
            }

            else if(!/[A-Z]/.test(vm.first))
            {
                first.setCustomValidity("1 upper case letter required");
            }

            else if(!/\d/.test(vm.first))
            {
                first.setCustomValidity("number required");
            }

            else if(/[\(\)\[\]\{\}\<\>\.\,\`\~\?\"\;\:\\\|\+\=\-\_\/\s\t\r]{1,}/.test(vm.first))
            {
                first.setCustomValidity("illegal password");
            }

            else if(/[\!\@\#\$\%\^\&\*]/.test(vm.first) == false)
            {
                first.setCustomValidity("symbol required");
            }

            else if (!/^[a-zA-Z\s]*$/g.test(vm.fName))
            {
                fName.setCustomValidity("Please enter a valid first name");
            }

            else
            {
                first.setCustomValidity("");
                second.setCustomValidity("");
                first.checkValidity("");
                second.checkValidity("");
                return true;
            }

            return false;
        }
      
    }  
}) ();