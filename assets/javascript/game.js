


var wordList = ["wookie", "jedi", "lightsaber", "skywalker", "darth", "force", "tatooine", "blaster", "speeder", "clone",
"droid", "ewok", "jawa", "hutt", "gungan", "death star", "imperial", "mind trick", "trooper", "crystal"]

//var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
//var wordGuess = wordList[Math.floor(Math.random) * wordList.length]
var isPlaying = false;
var gotWord = false;
var letterGuess = [];
var selectWord;
var wordGuess = [];
var guessLeft = 0;
var wins = 0;
// var compWord = document.getElementById("comp-word");
// var userGuess = document.getElementById("user-guess");
// var winTotal = document.getElementById("wins");
// var guessTotal= document.getElementById("guesses-left");

//start the game. 
 function gameStart (){
      isPlaying = true;
      letterGuess = [];
      wordGuess = [];
      guessLeft = 10;
 }



//get word, set guess left, put word in array
      
         document.onkeyup = function (event) {
            var keypressed = event.key;
            console.log(keypressed);
            letterGuess.push(keypressed);
            console.log(letterGuess);
            var selectWord = wordList[Math.floor(Math.random()* wordList.length)];
               console.log("selectWord " + selectWord);
            wordGuess.push(selectWord);
               console.log("wordGuess " + wordGuess);
            document.getElementById("comp-word").innerHTML = wordGuess;
            
               
         // console.log(guessTotal);
         // console.log(wordGuess);
         findLetter();
      };
   
      //User selects a letter, run findLetter, check to see if this was the last letter
      document.onkeydown = function(event) {
            if(event.keycode >= 65 && event.keyCode <= 90) {
               findLetter(event.key.toLocaleLowerCase());
               checkWin();
            }
      };
      //checks if there are guesses left to be made, pushes letter into an array and runs evaluate letter function
      //check to see if word is completed
      function findLetter (letter) {
            if (guessLeft > 0) {   
            if (letterGuess.indexOf(letter) === -1) {
                  letterGuess.push(letter);
                  evaluateGuess(letter);

               }
         }
         checkWin();
      };
      //checks to see if letter is in word, pushes letter into word array
      //if not in word, takes away a guess
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
      //checks to see if there are letters left to be guessed, if not adds a win
      function checkWin() {
         if(wordGuess.indexOf("_") === -1) {
            wins++;
            gotWord = true;
         }
      };
   





