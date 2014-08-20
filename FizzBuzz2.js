$(document).ready(function(){

	var startNumber = 1;
	var endNumber;
	var div1 = 3;
	var div2 = 5;


	function fizzBuzz () {

	  if (endNumber%1 == 0) {
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
		}
		else {
			alert("Please type a positive whole number");
			startGame();
		}
	};

	var startGame = function () {
		endNumber = prompt("Type the number that you would like to check up to.");
		fizzBuzz();
	}
	
	startGame();

});