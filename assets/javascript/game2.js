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
    guessLeft = 10;
    selectWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log("select word: " + selectWord);
    wordGuess = [];
    console.log("word arr: " + selectWord.split(""));
    for (i = 0; i < (selectWord).length; i++) {
        wordGuess.push("_");
    }
    isPlaying = true;
    console.log("wordguess1 " + wordGuess);
    changeDisplay();
};

function changeDisplay () {
        document.getElementById("wins").innerText = "Total Wins:" + wins;
        document.getElementById("guesses-left").innerText = "Guesses Left:" + guessLeft;
        // document.getElementById("comp-word").innerHTML = wordGuess.join("_ ");
        // document.getElementById("user-guess").innerHTML = letterGuess;ry
};

function checkWin () {
    if(wordGuess.indexOf("_") === -1) {
        wins++;
        setGame();
        changeDisplay();
    }
    console.log("WINS " + wins);
};


   

    
     function evaluateGuess() {
         document.onkeydown = function (event) {
             letter = event.key.toLowerCase();
          
         var correct = false;
         for(i = 0; i < selectWord.length; i++) {
             if (letter === selectWord[i]) {
                 correct = true;
             } else {
                letterGuess.push(letter);
                 document.getElementById("user-guess").innerHTML = letterGuess.join(" ");
                 guessLeft--;
                 console.log("left " + guessLeft);
                 if (guessLeft === 0) {
                     alert("SORRY THE FORCE IS NOT WITH YOU!");
                    setGame();
             }
            }
             if (correct) {
                wordGuess[i] = letter;
                document.getElementById("comp-word").innerHTML = wordGuess.join(" ");
                }
                console.log("correct " + correct);
                console.log("LAST " + wordGuess);
             } 
            }
        }
         
     

// function isAlpha (ch) {
//     return /^[A-Z]$/i.test(ch);
// }
// document.onkeyup = function (event) {
//     if (isPlaying) {
//     var keypressed = event.key;
//     console.log("keypress " + keypressed);    
//     evaluateWord(keypressed);
//     }
// }
// function evaluateWord(letter) {

//     correct = false;
//     console.log("last " + letter);
    
//     if (guessLeft = 0) {
//         isPlaying = false;
//     }
    
//     for (i = 0; i < selectWord.length; i++) {
//         if (selectWord[i] === letter) {
//         correct = true;
//         wordGuess[i] = selectWord[i];
//         // document.getElementById("comp-word").innerHTML = wordGuess.push(letter);
        
//     } else {
//         correct = false;
//         guessLeft--;
//         letterGuess.push(letter);
//     }
//     console.log("USED LETTERS " + letterGuess);
    // if (correct) {
    //     for (i = 0; i < wordGuess.length; i++) { 
    //         if (selectWord[i] === letter) {
    //         wordGuess[i] = letter;
    //     }
    //     }
    // }
    // else {
    //     letterGuess.push(letter);
    //     guessLeft--;
    //     if (guessLeft = 0) {
    //         isPlaying = false;
    //     }
    //     console.log("USED LETTERS " + letterGuess);
    // }
//     console.log("last " + wordGuess);
// } 

//     console.log(guessLeft + " new");
//     console.log("word " + correct);
//     console.log(wordGuess + " cl");       
            
        
    
//     console.log("wordguess2 " + wordGuess);
// };

