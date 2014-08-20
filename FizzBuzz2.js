$(document).ready(function(){

	var startNumber = 1;
	var div1 = 3;
	var div2 = 5;


	function fizzBuzz () {
	  var endNumber = prompt("Type the number that you would like to check up to.");
		var i;

		for (i = startNumber; i <= endNumber; i++) {

			if (!(i%div1 == 0) && !(i%div2 == 0)) {
				$("ul").append("<li>"+i+"</li>");
			}
			else if (i%div1 == 0 && i%div2 == 0 ) {
				$("ul").append("<li>FizzBuzz</li>");
			} 
			else if (i%div1 == 0) {
				$("ul").append("<li>Fizz</li>");
			} 
			else {
				$("ul").append("<li>Buzz</li>");
			}; 
		};
	};

	fizzBuzz();

});