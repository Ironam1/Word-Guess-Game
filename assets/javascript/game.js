


var wordList = ["wookie", "jedi", "lightsaber", "skywalker", "darth", "force", "tatooine", "blaster", "speeder", "clone",
"droid", "ewok", "jawa", "hutt", "gungan", "death star", "imperial", "mind trick", "trooper", "crystal"]

//var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
//var wordGuess = wordList[Math.floor(Math.random) * wordList.length]
var gotWord = false;
var letterGuess = [];
var selectWord;
var wordGuess = [];
var guessLeft = 0;
var wins = 0;
var compWord = document.getElementById("comp-word");
var userGuess = document.getElementById("user-guess");
var winTotal = document.getElementById("wins");
var guessTotal= document.getElementById("guesses-left");

//start the game. get word, set guess left, put word in array
function startGame () {
         document.onkeydown = function () {
         var selectWord = Math.floor(Math.random()* (wordList.length));
         // var wordArr = Array.from(wordGuess);
            for (i = 0; i < wordList[selectWord].length; i++);
               wordGuess.push("_");
         };
      }
   






