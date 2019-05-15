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
    // var arr = Array.from(selectWord);
    console.log("word arr: " + selectWord.split(""));
    
    for (i = 0; i < (selectWord).length; i++) {
        wordGuess.push("_");
    }
    isPlaying = true;
    console.log("wordguess1 " + wordGuess);
    document.getElementById("comp-word").innerHTML = wordGuess.join("_ ");
    changeDisplay();
    // makeGuess();
};

function changeDisplay () {
        document.getElementById("wins").innerText = "Total Wins:" + wins;
        // document.getElementById("comp-word").innerText = "Press Any Key To Start!";
        // for (i = 0; i < wordGuess.length; i++) {
        //     document.getElementById("comp-word").innerText + wordGuess[i];
        // }
        document.getElementById("guesses-left").innerText = "Guesses Left:" + guessLeft;
        // document.getElementById("user-guess").innerText = letterGuess;
        if(guessLeft <= 0) {
            isPlaying = true;
        }
};




// function getWord () {
//         document.onkeydown = function (selectWord) {
//             if(gotWord) {
//                 var selectWord = wordList[Math.floor(Math.random()* wordList.length)];
//             console.log("selectWord " + selectWord);
//         // for (i = 0; i < selectWord.length; i++) {
//             wordArray = Array.from(selectWord);
//             wordGuess.push(wordArray);
//             console.log("word array " + wordArray.join(''));
//             console.log("wordGuess" + wordGuess);
//            document.getElementById("comp-word").innerHTML = wordGuess;
        
//         }  
//         makeGuess(); 
//     }
// };

// document.onkeydown = function (event) {
//     if(isPlaying = false) {
//         setGame();
//         isPlaying = true;
//     } else {
//         if(event.keyCode >= 65 && event.keyCode <= 90) {
//             makeGuess(event.key.toLocaleLowerCase());
//         }
//     }
// };
document.onkeyup = function (event) {
    var keypressed = event.key;
    console.log("keypress " + keypressed);    
    evaluateWord(keypressed);
}
    // for (j = 0; j < wordGuess.length; j++);
    // if (keypressed === wordGuess[j]) {
    //     blanks[j] = wordGuess[j];
    // } else {
    //     letterGuess.push(keypressed);
    // }

    
    // letterGuess.push(keypressed);
    // console.log("letterGuess " + letterGuess);
    // document.getElementById("user-guess").innerHTML = letterGuess.join(" ");
   


// function makeGuess (letter) {
//        if (guessLeft > 0) {
//             if (!isPlaying) {
//                 isPlaying = true;
//             }
//             for (i = 0; i < letterGuess.length; i++) {
//             if (letterGuess.includes(letter)) {
//                 guessLeft--;
//                 console.log("guess left " + guessLeft);
//             } else {
//                 evaluateWord(); 
//             }
//         document.getElementById("guesses-left").innerHTML = guessLeft;
//     }

// }
//     // changeDisplay();
//     checkWin();
// };
// !!!! for the selectWord variable, 
function evaluateWord(letter) {
    correct = false;
    var letter = [];
    if (guessLeft = 0) {
        isPlaying = false;
    }
    
    for (i = 0; i < (selectWord).length; i++) {
        if (letter[i] === selectWord[i]) {
        correct = true;
        selectWord[i] === wordGuess[i];
        
    } else {
        correct = false;
        guessLeft--;
    }
}
    console.log(guessLeft + " new");
    console.log(correct);
    console.log(wordGuess + " cl");       
            
        
    
    console.log("wordguess2 " + wordGuess);
};

// function checkWin () {
//     if(wordGuess.indexOf("_") === -1) {
//         wins++;
//         gotWord = true;
//     }
// };
