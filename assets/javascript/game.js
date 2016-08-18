/* PSEUDO CODING FOR CRYSTALS COLLECTOR - (similar to hangman)


	HOW TO PLAY
	Randomly generated # at start of game (#19-120)
	4 crystals with each one representing a hidden # which is points fo rthat crystal
	GOAL: click on random crystals to have your total score = random number
	after each wins, crystal also resets bw #1-12
	if you go over, you get a loss
	
	PSEUDO CODING OF WHAT IS NEEDED
	- assign random number to start of game
	- When you get a win, crystals and random # reset
	- if your number > random number, --> loss
	- total score adding


*/

$(document).ready(function(){
	//Variables
	var wins =0;
	var losses = 0;
	var userScore =0;

	var audioWin = new Audio();
	audioWin.src = "assets/audio/AllIDoisWin.mov"; //DJ khaled "All I do is Win" clip plays
	function playWinSound(num){
		audioWin.play();
	}

	var audioLose = new Audio();
	audioLose.src = "assets/audio/YouLose.mov";
	function playLoseSound(num){
		audioLose.play();
	}
	

	//Setting random number function
	function randomNumberFromRange(minRandomNum,maxRandomNum){
	    return Math.floor(Math.random()*((maxRandomNum - minRandomNum)+1) + minRandomNum);
	}
	

	//Assignment of Random number between 19-120
	var randomNum = randomNumberFromRange(19,120);

	//Assignment of random number to Crystals
	var crystal1 = randomNumberFromRange(1,12); 
	var crystal2 = randomNumberFromRange(1,12);
	var crystal3 = randomNumberFromRange(1,12);	
	var crystal4 = randomNumberFromRange(1,12);


	$("#randomNumber").html("<p>Random</p>" +
		"<p> Number: </p>" + 
		"<p>" + 
		randomNum + 
		"</p>");

	$("#scores").html("<p> Wins: " + 
		wins + 
		"</p>" +
		"<p> Losses: " + 
		losses + 
		"</p>");

	$("#yourNum").html("<p>Your Number</p>" +
		"<p>is: </p>"+ 
		"<p>" + 
		userScore + 
		"</p>");

	$(".crystals").on("click", function(){
		if (randomNum === userScore){
			audioWin.play();
			userScore = 0;
			$("#yourNum").html("<p>Your Number</p>" +
				"<p>is: </p>"+ 
				"<p>" + 
				userScore + 
				"</p>");
			wins++;
			console.log(wins + "you win");
			$("#scores").html("<p> Wins: " + 
				wins + 
				"</p>" +
				"<p> Losses: " + 
				losses + 
				"</p>");

			randomNum = randomNumberFromRange(19,120);
			$("#randomNumber").html("<p>Random</p>" +
				"<p> Number: </p>" +
				 "<p>" +
				 randomNum +
				 "</p>");



			crystal1 = randomNumberFromRange(1,12); 
			crystal2 = randomNumberFromRange(1,12);
			crystal3 = randomNumberFromRange(1,12);	
			crystal4 = randomNumberFromRange(1,12);		
		}
		else if(randomNum < userScore){
			userScore = 0;
			$("#yourNum").html("<p>Your Number</p>" +
			 	"<p>" +
			 	userScore +
			 	"</p>");
			losses++;
			audioLose.play();
			console.log(losses + "you lose");
			$("#scores").html("<p> Wins: " + 
				wins + 
				"</p>" +
				"<p> Losses: " + 
				losses + 
				"</p>");

			randomNum = randomNumberFromRange(19,120);
			$("#randomNumber").html("<p>Random</p>" +
				"<p> Number: </p>" +
			 	"<p>" +
			 	randomNum +
			 	"</p>");


			crystal1 = randomNumberFromRange(1,12); 
			crystal2 = randomNumberFromRange(1,12);
			crystal3 = randomNumberFromRange(1,12);	
			crystal4 = randomNumberFromRange(1,12);
		}

	});

	//if (randomNum > userScore){
			$("#clear").on("click", function(){
				console.log(crystal1); //logging it to developer tools
				userScore = userScore + crystal1;
				$("#yourNum").html("<p>Your Number</p>" +
					"<p>" + 
					userScore + 
					"</p>");
			});

			$("#green").on("click", function(){
				console.log(crystal2);
				userScore = userScore + crystal2;
				$("#yourNum").html("<p>Your Number</p>" +
					"<p>" + 
					userScore + 
					"</p>");
			});

			$("#purple").on("click", function(){
				console.log(crystal3);
				userScore = userScore + crystal3;
				$("#yourNum").html("<p>Your Number</p>" +
					"<p>" + 
					userScore + 
					"</p>");
			});			
			
			$("#yellow").on("click", function(){
				console.log(crystal4);
				userScore = userScore + crystal4;
				$("#yourNum").html("<p>Your Number</p>" +
					"<p>" + 
					userScore + 
					"</p>");
			});

	$("#scores").html("<p> Wins: " + 
		wins + 
		"</p>" +
		"<p> Losses: " + 
		losses + 
		"</p>");

	$("#yourNum").html("<p>Your Number</p>" +
		"<p>" + 
		userScore + 
		"</p>");


});