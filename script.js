// programe to change the text on top of input and the convert button text
var varForConvertionButton = document.getElementById("convertButton").innerHTML;
var docCapture = document.getElementById("textBeforeInput").style.background-color;

function nairaToDollar () {
	document.getElementById("first").innerHTML = "Enter Amount in Naira";
	 varForConvertionButton= "Contvert to Dollar";
	docCapture = "#123451";
}

function nairaToEuros () {
	document.getElementById("second").innerHTML = "Enter Amount in Naira";
	varForConvertionButton = "Contvert to Euros";
	docCapture= "123452";
}

function nairaToSek () {
	document.getElementById("third").innerHTML = "Enter Amount in Naira";
	varForConvertionButton = "Contvert to SEK";
	docCapture= "#123453";
}

function dollarToNaira () {
	document.getElementById("fourth").innerHTML = "Enter Amount in Dollar";
	varForConvertionButton = "Contvert to Naira";
	docCapture = "#123454";
}
function EurosToNaira () {
	document.getElementById("fifth").innerHTML = "Enter Amount in Dollar";
	varForConvertionButton = "Contvert to Naira";
	docCapture = "#123455";
}

function sekToNaira () {
	document.getElementById("sixth").innerHTML = "Enter Amount in Dollar";
	varForConvertionButton= "Contvert to Naira";
	docCapture = "#123456";
}

//script to determine conversion based color of a certain text

function convert (amount) {
	//designate the <p> to return the result to
	if (docCapture === #123456){
		return amount * 0.025 ;
	} else if (docCapture === "#123452"){
		return amount * 480 ;
	} else if (docCapture === "#123453"){
		return amount * 40 ;
	} else if (docCapture === "#123454"){
		return amount * 0.0025 ;
	} else if (docCapture === "#123455"){
		return amount * 0.0020833 ;
	} else {
		return amount * 400 ;
	}
}

//function to display current date and time
function displayDate () {
	document.getElementById('date').innerHTML = Date ();
}
// find out how to clear input after a value has been entered from watch and code
// Also find how to clear output
// Find out how to add a placeholdre attribute on an html element using javascript