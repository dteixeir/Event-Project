/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var fName = document.querySelector('#fName');
var submit = document.querySelector('#submitstuff');

/*
You'll probably find this function useful...
 */  
function validatePassword (correctPassword) {

	if(firstPasswordInput.value != secondPasswordInput.value)
	{
		firstPasswordInput.setCustomValidity("Passwords Do Not Match");
	}

	else if(firstPasswordInput.value.length <= 10)
	{
		firstPasswordInput.setCustomValidity("10 characters min");
	}

	else if(firstPasswordInput.value.length >= 101)
	{
		firstPasswordInput.setCustomValidity("100 characters max");
	}
	
	else if(!/[a-z]/.test(firstPasswordInput.value))
	{
		firstPasswordInput.setCustomValidity("1 lowercase letter required");
	}

	else if(!/[A-Z]/.test(firstPasswordInput.value))
	{
		firstPasswordInput.setCustomValidity("1 upper case letter required");
	}

	else if(!/\d/.test(firstPasswordInput.value))
	{
		firstPasswordInput.setCustomValidity("number required");
	}

	else if(/[\(\)\[\]\{\}\<\>\.\,\`\~\?\"\;\:\\\|\+\=\-\_\/\s\t\r]{1,}/.test(firstPasswordInput.value))
	{
		firstPasswordInput.setCustomValidity("illegal password");
	}

	else if(/[\!\@\#\$\%\^\&\*]/.test(firstPasswordInput.value) == false)
	{
		firstPasswordInput.setCustomValidity("symbol required");
	}

	else if(correctPassword == false)
	{
		firstPasswordInput.setCustomValidity("incorrect password");
	}

	else if (!/^[a-zA-Z\s]*$/g.test(fName.value))
	{
		fName.setCustomValidity("Please enter a valid first name");
	}

	else
	{
		firstPasswordInput.setCustomValidity("");
		secondPasswordInput.setCustomValidity("");
		firstPasswordInput.checkValidity("");
		secondPasswordInput.checkValidity("");
		return true;
	}

	return false;
};

