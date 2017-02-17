var wins = 0;
var losses = 0;
var guess = 9;
var tries = [];
// get random letter for computer
var compGuess = letters[Math.floor(Math.random() * letters.length)];

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// function to pop out all values in tries array
function out(array){

	var i = array.length - 1;

	while (array[i]){
		array.pop();
		i--;
	}
}

document.onkeyup = function(event){

	// get user input
	var userGuess = event.key;

	

	// check if user input a letter 
	if (userGuess === 'a' || userGuess === 'b' || userGuess === 'c' || userGuess === 'd' || userGuess === 'e' || userGuess === 'f' || userGuess === 'g' || userGuess === 'h' || userGuess === 'i' || userGuess === 'j' || userGuess === 'k' || userGuess === 'l' || userGuess === 'm' || userGuess === 'n' || userGuess === 'o' || userGuess === 'p' || userGuess === 'q' || userGuess === 'r' || userGuess === 's' || userGuess === 't' || userGuess === 'u' || userGuess === 'v' || userGuess === 'w' || userGuess === 'x' || userGuess === 'z' || userGuess === 'z'){
		if (userGuess === compGuess){
			wins++;
			guess = 9;
			out(tries);
			compGuess = letters[Math.floor(Math.random() * letters.length)];
		}
		else if (guess > 0){
			tries.push(userGuess);
			guess--;
		}
		else if (guess === 0) {
			losses++;
			guess = 9;
			out(tries);
			compGuess = letters[Math.floor(Math.random() * letters.length)];
		}
	}
	// create html to be displayed on page for score
	var html = "<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guess + "</p>" + 
	"<p>Your Guesses so far: " + tries + "</p>";

	// inject above HTML into webpage
	document.getElementById("game").innerHTML = html;

};