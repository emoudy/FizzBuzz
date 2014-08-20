$(document).ready(function(){

	var startNumber = 1;
	var endNumber;
	var div1 = 3;
	var div2 = 5;
	// var countBlanks = 0;
	// var countall = 0;
	// var countdiv1 = 0;
	// var countdiv2 = 0;

  endNumber = prompt("Type the number that you would like to check up to.");

	function fizzBuzz () {
		var i;

		for (i = startNumber; i <= endNumber; i++) {

			if (!(i%div1 == 0) && !(i%div2 == 0)) {
				$("ul").append("<li>"+i+"</li>");
				countBlanks++;
			}
			else if (i%div1 == 0 && i%div2 == 0 ) {
				$("ul").append("<li>FizzBuzz</li>");
				countall++;
			} 
			else if (i%div1 == 0) {
				$("ul").append("<li>Fizz</li>");
				countdiv1++;
			} 
			else {
				$("ul").append("<li>Buzz</li>");
				countdiv2++;
			}; 
		};
	};

	fizzBuzz();

  // function getendNumber () {
  //   $('#end_number').keydown(function(event) {
  //     if (event.which == 13) {
  //     	event.preventDefault();
		// 		endNumber = +$("#end_number").val();
		// 		fizzBuzz();
		// 		console.log(countBlanks);
		// 		console.log(countall);
		// 		console.log(countdiv1);
		// 		console.log(countdiv2);
  //     };
  //   });
  // };

  // getendNumber();

});

	// function newGame () {
	// 	$('ul > li').remove();
	// };

	// $("end_number").on("keydown", function(event){
	// 	if ($("#end_number").which(event) == 13) {
	// 		endNumber = $("#end_number").val();
	// 		console.log("Is this working?");
	// 		fizzBuzz();
	// 	};
	// });