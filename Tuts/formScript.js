
var nameField = document.getElementById("name");
var submitBtn = document.getElementById("submit");
var emailField = document.getElementById("email");


nameField.onblur = function(){
	if(nameField.value != ''){
		submitBtn.disabled = false;
	}
};

emailField.onfocus = function(){
	if(emailField.value == 'email address'){
		emailField.value = '';
	}
};