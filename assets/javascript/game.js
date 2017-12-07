var computerChoices = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var queries = [];

var userGuess;
var computerPick;

document.onkeyup = function(event) {
    console.log("computerPick")  
    console.log(computerPick)  
      
      userGuess = event.key;
      computerPick = computerPickLetter();

    if (computerChoices.includes(userGuess)){

    	queries.push(userGuess);

	    if (userGuess !== computerPick) {
	       //alert("Wrong guess");
	       guessesLeft--;
	   	} 

		   	else {
				//alert("You won");
				wins++;
				reset();
			}
		
				if (guessesLeft === 0) {
					losses++;
					reset();
				}

			function reset(){
			guessesLeft = 10;
			queries = [];
			}

				document.getElementById("wins").textContent = wins;
				document.getElementById("losses").textContent = losses;
				document.getElementById("guessesLeft").textContent = guessesLeft;
				document.getElementById("queries").textContent = queries;

    }
}

function computerPickLetter(){
	var letter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
	console.log("computer pick " + letter)
	return letter;
}




// Sequence and update scores
// 1. computer chooses random letter from an array (A to Z)
// 2. User chooses letter (from keyboard)
// 3. User either wins when pick same letter as computer or loose when input different letter. User also looses when input another key than a letter
// 

// Scores
// win --> score +1 
// User Guesses --> score -1
// loss --> score +1 if user guesses are = 0
// Guesses Left count backwards from 10. This number will be updated (-1) after each pick
// Your guesses state all the letters that were guessed 
// If your guesses score is 0 --> game will be reset
// if i have no win after 10 --> game will be reset
// When you win, wins will be updated and --> game will be reset