$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text(operator);
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    $("#equals").click(function(){
		var answer;
        if (operator === "+"){
			answer = parseInt(number) + parseInt(newnumber);
		} else if (operator === "-"){
			answer = parseInt(newnumber) - parseInt(number);
		} else if (operator === "/"){
			answer = parseInt(newnumber) / parseInt(number);
		} else if (operator === "*"){
			answer = parseInt(number) * parseInt(newnumber);
		}
		totaldiv.text(answer);
		testNumLength(answer);
		number = "";
		newnumber = "";
    });
});