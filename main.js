var userString = "";
var reversed = "";


// identify  the submit button and run a function when a user clicks 
// to reverse the given string
var uStrBtn = document.getElementById("uStrBtn");
uStrBtn.addEventListener("click", function() {

	// get the value from the text input
	userString = document.getElementById("userString").value;

	// run a loop to reverse the string
	for (var i = userString.length - 1; i >= 0; i--) {
		reversed += userString[i];
	}

	// print the forward and backward strings
	document.getElementById("forWord").innerHTML = userString;
	document.getElementById("backWord").innerHTML = reversed;

	// reset the variables and input
	userString = "";
	reversed = "";
	document.getElementById("userString").value = "";
})