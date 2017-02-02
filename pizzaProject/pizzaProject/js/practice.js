
//Turns speech into Elmer Fudd speak
function fuddify(speech) {
	//if it's not a string, return an error message
	if (typeof speech !== 'string') return "Nice twy, wascally wabbit!";
	
	//otherwise, make it sound like Elmer Fudd
	speech = speech.replace(/r/g, 'w');
	speech = speech.replace(/R/g, 'W');
	return speech;
}

//checks to see if a number is odd
function isOdd(num) {
	if (num % 2 ===0) {
		return false;
	}else {
		return true;
	}
}	

//adds numbers
function addingMachine () {
	//initialize the total we'll be returning
	var total=0;
	
	for (var i=0; i<arguments.length; i += 1) {
		//grab the next number
		var number = arguments[i];
		
		//check if the argument is a number.
		//if so, add it to the running total
		if (typeof number === 'number') {
			total += number;
		}
	}
	
	//done - return the total
	return total;
}