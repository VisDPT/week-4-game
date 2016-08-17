/* PSEUDO CODING FOR CRYSTALS COLLECTOR - (similar to hangman)
	There will be four crystals displayed as buttons on the page.
	The player will be shown a random number at the start of the game.
	When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
	Your game will hide this amount until the player clicks a crystal.
	When they do click one, update the player's score counter.
	The player wins if their total score matches the random number from the beginning of the game.
	The player loses if their score goes above the random number.
	The game restarts whenever the player wins or loses.
	When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
	The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

	Game design notes:
	The random number shown at the start of the game should be between 19 - 120.
	Each crystal should have a random hidden value between 1 - 12.



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

<h1> Crystal Collector!</h1>
		<h2> HOW TO PLAY: </h2>
			<p> You will be given a random number at the start of the game.  There are 4 crystals below.  By clicking on a crystal, add a specific amount of points to your total score. </p>
			<p> You win the game by matching your total score to random number.
				You lose if your total score goes over random number </p>
			<p>The value of each crystal is hidden from you until you click on it.  Each time the game resets, the crystals will also be assigned new values.</p>
<div class ="randomNum">	
	</div>
	<div class ="scores">	
	</div>
	<div class ="buttons">	
	</div>
	<div class ="yourNum">	
	</div>


*/

$(document).ready(function(){

	var wins =0;
	var losses = 0;
	var userNumber =0;


	//Assignment of Random number between 19-120
	function randomNumberFromRange(minRandomNum,maxRandomNum){
	    return Math.floor(Math.random()*((maxRandomNum - minRandomNum)+1) + minRandomNum);
	}
		var randomNums = randomNumberFromRange(19,120);
		

	$("#randomNum").html("Random Number:" + randomNums);

	$("#scores").html("Wins: " + 
		wins + 
		"<p> Losses: " + 
		losses + 
		"</p>");

	$("#clear").on("click", function(){
		var crystal1 = randomNumberFromRange(1,12);
		console.log(crystal1);
		$("#yourNum").math('+', userNumber, crystal1);
		
	})

	$("#green").on("click", function(){
		var crystal2 = randomNumberFromRange(1,12);
		console.log(crystal2);
		//userNumber+= crystal2;
	})

	$("#purple").on("click", function(){
		var crystal3 = randomNumberFromRange(1,12);
		console.log(crystal3);
		//userNumber+= crystal3;
	})

	$("#yellow").on("click", function(){
		var crystal4 = randomNumberFromRange(1,12);
		console.log(crystal4);
		//userNumber+= crystal4;
	})

//	var userNumTotal

	$("#yourNum").html("Your Total Score is: "+ userNumber);
	







})