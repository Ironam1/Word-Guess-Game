


var wordList = ["wookie", "jedi", "lightsaber", "skywalker", "darth", "force", "tatooine", "blaster", "speeder", "clone",
"droid", "ewok", "jawa", "hutt", "gungan", "death star", "imperial", "mind trick", "trooper", "crystal"]

var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

var compWord;
var wordGuess = [];
var letterGuess = [];
var guessLeft = 0;
var wins = 0;
var gameStarted = false;

function resetGame () {
    guessLeft = 0;
    gameStarted = false;
    compWord = Math.floor(Math.random() * (wordList.length));
    letterGuess = [];
    wordGuess = [];
    for (var i = 0; i <wordList[compWord].length; i++) {
        wordGuess.push("_");
    }
    updateDisplay();
};

function updateDisplay () {
    document.getElementById("wins").innerText = "Wins: " + wins;
    document.getElementById("comp-word").innerText = "";
    for (var i = 0; i < compWord.length; i++) {
        document.getElementById("comp-word").innerText += wordGuess[i];
    }
}



console.log("this is the computer's choice: " + wordGuess);
//console.log("this is the player's choice: " + userGuess);