function validate(e) {
	hideErrors();
console.log(formHasErrors());
	if (formHasErrors()) {	
		e.preventDefault();
		return false;
	}
	return true;
}

function resetForm(e) {
	if (confirm('Clear form?')) {	
		hideErrors();
		document.getElementById("fullname").focus();
		return true;
	}
	e.preventDefault();
	return false;
}

function formHasErrors() {
    let errorFlag = false;

    let = contactRequiredFields = ["fullname", "phonenumber", "email"];

    for(let i = 0; i < contactRequiredFields.length; i++){
        let textField = document.getElementById(contactRequiredFields[i]);
        if(!formFieldHasInput(textField)){
            document.getElementById(contactRequiredFields[i]+"_error").style.display = "block";
            if(!errorFlag){
                textField.focus();
                textField.select();
            }
            errorFlag = true;
        }
    }

    let regexPhoneNumber = new RegExp(/^\d{10}$/);
	let phoneNumberValue = document.getElementById("phonenumber").value;
	if(phoneNumberValue.length > 0){
        if(!regexPhoneNumber.test(phoneNumberValue)){
            document.getElementById("phonenumberformat_error").style.display = "block";
            if(!errorFlag){
                document.getElementById("phonenumber").focus();
                document.getElementById("phonenumber").select();
            }
            errorFlag = true;
        }
	}

    let regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

	let emailValue = document.getElementById("email").value;

	if(emailValue.length > 0){
        if(!regexEmail.test(emailValue)){
            document.getElementById("emailformat_error").style.display = "block";
            if(!errorFlag){
                document.getElementById("email").focus();
                document.getElementById("email").select();
            }
            errorFlag = true;
        }
	}
    return errorFlag; 
}

function hideErrors() {
	let error = document.getElementsByClassName("error");
    console.log(error);

	for (let i = 0; i < error.length; i++) {

		error[i].style.display = "none";
	}
}

function load() {
	 hideErrors();

    document.getElementById("contactform").addEventListener("submit", validate);

	document.getElementById("contactform").addEventListener("reset", resetForm);	
}

document.addEventListener("DOMContentLoaded", load);
