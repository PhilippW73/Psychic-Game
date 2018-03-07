var computerChoices = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var queries = [];
var userGuess;
var computerPick = computerChoices[Math.floor(Math.random()*computerChoices.length)];

document.onkeyup = function(event) {      
    
    userGuess = event.key;
    
    if (computerChoices.includes(userGuess)){

    queries.push(userGuess);

	if (userGuess !== computerPick) {

	guessesLeft--;

	   	} 

		   	else {
				
				wins++;
				reset();
			}
				if (guessesLeft === 0) {
					losses++;
					reset();
				}
				
				document.getElementById("wins").textContent = wins;
				document.getElementById("losses").textContent = losses;
				document.getElementById("guessesLeft").textContent = guessesLeft;
				document.getElementById("queries").textContent = queries;

    }
};

function reset(){
			guessesLeft = 10;
			queries = [];
			computerPick = computerChoices[Math.floor(Math.random()*computerChoices.length)];
};




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