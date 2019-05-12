var wordList = ["wookie", "jedi", "lightsaber", "skywalker", "darth", "force", "tatooine", "blaster", "speeder", "clone",
"droid", "ewok", "jawa", "hutt", "gungan", "death star", "imperial", "mind trick", "trooper", "crystal"]
var isPlaying = false;
var gotWord = false;
var letterGuess = [];
var selectWord;
var wordGuess = [];
var guessLeft = 10;
var wins = 0;

function setGame () {
    letterGuess = [];
    wordGuess = [];
    guessLeft = 10
    isPlaying = true;
    gotWord = true;
    for (i = 0; i < [selectWord].length; i++) {
        wordGuess.push("_");
    }
    console.log("wordguess1 " + wordGuess);
    changeDisplay();
};

function changeDisplay () {
        document.getElementById("wins").innerText = "Total Wins:" + wins;
        document.getElementById("comp-word").innerText = "Press Any Key To Start!";
        for (i = 0; i < wordGuess.length; i++) {
            document.getElementById("comp-word").innerText + wordGuess[i];
        }
        document.getElementById("guesses-left").innerText = "Guesses Left:" + guessLeft;
        document.getElementById("user-guess").innerText = letterGuess;
        if(guessLeft <= 0) {
            isPlaying = true;
        }
};




function getWord () {
        document.onkeydown = function (selectWord) {
            if(gotWord) {
                var selectWord = wordList[Math.floor(Math.random()* wordList.length)];
            console.log("selectWord " + selectWord);
        // for (i = 0; i < selectWord.length; i++) {
            wordArray = Array.from(selectWord);
            wordGuess.push(wordArray);
            console.log("word array " + wordArray.join(''));
            console.log("wordGuess" + wordGuess);
           document.getElementById("comp-word").innerHTML = wordGuess;
        
        }  
        makeGuess(); 
    }
};

document.onkeydown = function (event) {
    if(gotWord) {
        setGame();
        gotWord = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLocaleLowerCase());
        }
    }
};

function makeGuess (letter) {
    if (guessLeft > 0) {
        if (!isPlaying) {
            isPlayin = true;
        }
        if (letterGuess.indexOf(letter) === -1) {
            letterGuess.push(letter);
            evaluateWord(letter);
        }
    }
    changeDisplay();
    checkWin();
};

function evaluateWord(letter) {
    var positions = [];
    for (i = 0; i [wordGuess].length; i++) {
        if([wordGuess][i] === letter) {
            positions.push(i);
        }
    }
    if(positions.length <= 0) {
        guessLeft--;
    } else {
        for (i = 0; i < positions.length; i++) {
            wordGuess[positions[i]] = letter;
        }
    }
};

function checkWin () {
    if(wordGuess.indexOf("_") === -1) {
        wins++;
        gotWord = true;
    }
};
