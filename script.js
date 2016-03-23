$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            display.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                display.text("Err");
            }
        } 
    };
	var number = "";
    var newNumber = "";
    var operator = "";
    var display = $("#display");
    display.text("0");

	// write 4 click functions below:
	
	
	
});