


var wordList = ["wookie", "jedi", "lightsaber", "skywalker", "darth", "force", "tatooine", "blaster", "speeder", "clone",
"droid", "ewok", "jawa", "hutt", "gungan", "death star", "imperial", "mind trick", "trooper", "crystal"]

//var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

var wordGuess = wordList[Math.floor(Math.random()*wordList.length)];
var letterGuess = [];
var guessLeft = 0;
var wins = 0;

//put the wordGuess in a box with underscore for letters
console.log(Array.from(wordGuess));



//start game and a random word is selected
// document.onKeyPress = function() {
//     var letter = letter.toLowerCase();
//     for (i = 0; i < wordGuess.length; i++) {
//         if (wordGuess.indexOf(letter) != -1);
//         alert("letter found");
//     }
//}

console.log("this is how many guesses left: " + guessLeft);
console.log("this is the computer's choice: " + wordGuess);
//console.log("this is the player's choice: " + userGuess);