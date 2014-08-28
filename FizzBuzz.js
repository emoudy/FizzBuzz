$(document).ready(function() {

	var endNumber;

	function fizzBuzz () {
		var startNumber = 1;
		var notDivisible = 0;
		var DivisibleByBoth = 0;
		var DivisibleByThree = 0;
		var DivisibleByFive = 0;

		for (startNumber; startNumber <= endNumber; startNumber++) {

			if (!(startNumber%3 == 0) && !(startNumber%5 == 0)) {
				$("ul").append("<li>"+startNumber+"</li>");
				notDivisible++;
			}
			else if (startNumber%3 == 0 && startNumber%5 == 0 ) {
				$("ul").append("<li><strong><em>FIZZBUZZ</em></strong></li>");
				DivisibleByBoth++;
			} 
			else if (startNumber%3 == 0) {
				$("ul").append("<li><strong><em>Fizz<em></strong></li>");
				DivisibleByThree++;
			} 
			else {
				$("ul").append("<li><strong><em>Buzz</em></strong></li>");
				DivisibleByFive++;
			}; 
		};
		$("aside").append("<h3>Results for numbers 1 to " + endNumber + "</h3>");
		$("aside").append("<p>" + notDivisible + " numbers are <strong>NOT</strong> evenly divisible by 3 or 5</p>");
		$("aside").append("<p>" + DivisibleByBoth + " numbers are evenly divisible by both 3 and 5</p>");
		$("aside").append("<p>" + DivisibleByThree + " numbers are evenly divisible by 3 only</p>");
		$("aside").append("<p>" + DivisibleByFive + " numbers are evenly divisible by 5 only</p>");
	};

  function resetGame () {
  	$("li").remove();
  	$("aside").empty();
  	$("#end_number").val("");
  };

	$("#end_number").keypress(function(event) {
		if (event.which == 13) {
			endNumber = Number($("#end_number").val());
			if ((endNumber%1 !=0)  || (endNumber == "") ||
					(endNumber < 1) || (endNumber > 100)) {
				alert("Please choose a whole number between 1 and 100");
  			resetGame();
			}
			else {
				fizzBuzz();
			};
		};
  });

  $("#doit_again").on("click", function(){
  		resetGame();
  });

});