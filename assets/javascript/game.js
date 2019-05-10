


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
         document.onkeydown = function (event) {
            var selectWord = wordList[Math.floor(Math.random()* wordList.length)];
               for (i = 0; i < wordList[selectWord].length; i++);
            var wordGuess = Array.from(selectWord);
               for (j = 0; j < wordGuess.length; j++)
               document.write(compword)(wordGuess[i] + "_");
            var guessLeft = (wordGuess[i] + 5);
               document.write(guessTotal)(guessLeft);
         }
         findLetter();
      };
      document.onkeydown = function(event) {
         if (gotWord) {
            gotWord = false;
         } else {
            if(event.keycode >= 65 && event.keyCode <= 90) {
               findLetter(event.key.toLocaleLowerCase());
            }
         }
      };
      function findLetter () {
         document.onkeydown = function (letter) {
            var letterGuess = letter.key;
               if (letterGuess.indexOf(letter) === -1) {
                  letterGuess.push(letter);
                  evaluateGuess(letter);

               }
         }
         checkWin();
      };
      function evaluateGuess (letter) {
         var positions = [];
         for (var i = 0; i < wordList[selectWord].length; i++) {
            if(wordList[selectWord][i] === letter) {
               positions.push(i);
            }
         }
         if (positions.length <= 0) {
            guessLeft--;
         } else {
            for (var i = 0; i < positions.length; i++) {
               wordGuess[positions[i]] = letter;
            }
         }
      };
      
      function checkWin() {
         if(wordGuess.indexOf("_") === -1) {
            wins++;
            gotWord = true;
         }
      };
   





