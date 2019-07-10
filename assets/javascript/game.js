$(document).ready(function() {
  var wordList = [
    "wookie",
    "jedi",
    "lightsaber",
    "skywalker",
    "darth",
    "force",
    "tatooine",
    "blaster",
    "speeder",
    "clone",
    "droid",
    "ewok",
    "jawa",
    "hutt",
    "gungan",
    "death star",
    "imperial",
    "mind trick",
    "trooper",
    "crystal"
  ];

  //var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
  //var wordGuess = wordList[Math.floor(Math.random) * wordList.length]
  var isPlaying = false;
  var gotWord = false;
  var letterGuess = [];
  let selectWord;
  var wordGuess = [];
  var wordArr = [];
  var guessLeft = 5;
  var wins = 0;

  //start the game.
  function gameReset() {
    letterGuess = [];

    guessLeft = 5;
    // $("#comp-word").html("");
    $("#guesses-left").html("Wrong Guesses Left: " + guessLeft);
    $("#wins").html("WINS: " + wins);
    $("#user-guess").html("Press Enter to Start");
    getWord();
  }

  //get word, set guess left, put word in array
  function getWord() {
    $(document).on("keypress", function(e) {
      e.preventDefault();
      wordArr = [];
      if (e.keyCode === 13 && gotWord === false) {
        selectWord = wordList[Math.floor(Math.random() * wordList.length)];
        wordGuess = selectWord.split("");
        // console.log(split);
        // console.log(selectWord);
        for (i = 0; i < selectWord.length; i++) {
          wordArr.push("_");
          gotWord = true;
        }
        // console.log(wordArr);
        $("#comp-word").text(wordArr.join(" "));
        $("#user-guess").html("Pick a letter");
        playGame();
      }
    });
  }
  function playGame() {
    var inWord = false;
    console.log(selectWord);
    console.log(wordGuess);
    console.log(wordArr);
    $(document).on("keypress", function(e) {
      if (e.keyCode >= 97 && e.keyCode <= 122 && guessLeft >= 1) {
        if (e.key === letterGuess[i]) {
          console.log("wrong");
        };
        for (var i = 0; i < letterGuess.length; i++) {
            guessLeft --;
            $("#guesses-left").html("Wrong Guesses Left: " + guessLeft);
          }
        console.log(e.key);
        for (var i = 0; i < selectWord.length; i++) {
          if (e.key !== wordGuess[i]) {
            letterGuess.push(e.key);
            $("#user-guess").html(letterGuess);
          }
        };
      }
    });
  }

  //User selects a letter, run findLetter, check to see if this was the last letter

  //checks if there are guesses left to be made, pushes letter into an array and runs evaluate letter function
  //check to see if word is completed

  //checks to see if letter is in word, pushes letter into word array
  //if not in word, takes away a guess

  //checks to see if there are letters left to be guessed, if not adds a win
  gameReset();
});
