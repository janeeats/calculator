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
    $("#numbers a").not("#clear,#clearAll").click(function(){
		number += $(this).text();
		display.text(number);
		testNumLength(number);
    });
    $("#operators a").not("#equals").click(function(){
		operator = $(this).text();
		newNumber = number;
		number = "";
		display.text(operator);
    });
    $("#clear,#clearAll").click(function(){
		number = "";
		display.text("0");
		if ($(this).attr("id") === "clearAll") {
			newNumber = "";
		}
    });
    $("#equals").click(function(){
		var answer;
        if (operator === "+"){
			answer = parseInt(number) + parseInt(newNumber);
		} else if (operator === "-"){
			answer = parseInt(newNumber) - parseInt(number);
		} else if (operator === "/"){
			answer = parseInt(newNumber) / parseInt(number);
		} else if (operator === "*"){
			answer = parseInt(number) * parseInt(newNumber);
		}
		display.text(answer);
		testNumLength(answer);
		number = "";
		newNumber = "";
    });
});