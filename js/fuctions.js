function trim(str) 
{
	return str.replace(/^\s+|\s+$/g,"");
}

function formFieldHasInput(fieldElement) {
	if (fieldElement.value == null || trim(fieldElement.value) == "") {		
		return false;
	}
	return true;
}