// A variable to hold our word set once loaded
let englishWords;
var CurrentEquation = '';
var EquationTimer = 0;
var GameBoard = [];
var EquicktionsScore = 0;

async function loadWordList() {
  try {
    const response = await fetch('words_alpha.txt');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    const wordsArray = text.split('\n').map(word => word.trim().toLowerCase());
    englishWords = new Set(wordsArray);
    console.log(`Loaded ${englishWords.size} words into the dictionary.`);
  } catch (error) {
    console.error("Failed to load the word list:", error);
  }
}

// Call the function to load the list when your application starts
loadWordList();

/**
 * Checks if a string is a valid English word.
 *
 * @param {string} word - The word to validate.
 * @returns {boolean} True if the word is in the dictionary, false otherwise.
 */
function isEnglishWord(word) {
  // Return false immediately if the word list isn't loaded
  if (!englishWords) {
    console.error("Word list is not loaded yet.");
    return false;
  }
  
  // Normalize the input for accurate checking
  const normalizedWord = word.trim().toLowerCase();
  
  // Check if the normalized word exists in the Set
  return englishWords.has(normalizedWord);
}
/**
 * Generates and returns a single random word from the loaded list.
 *
 * @returns {string|null} A random English word, or null if the list isn't loaded yet.
 */
function getRandomWord() {
  // Ensure the word list has been loaded
  if (!englishWords || englishWords.length === 0) {
    console.error("Word list is not available.");
    return null;
  }

  // Generate a random index number within the bounds of the array
  const randomIndex = Math.floor(Math.random() * englishWords.length);

  // Return the word at the random index
  return englishWords[randomIndex];
}
function RI(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Get a random integer between 1 and 10 (inclusive)
let randomNumberInclusive = getRandomIntInclusive(1, 10);
console.log(randomNumberInclusive);

let UsedWords = [];
let Timer = 10;
let Score = 0;

function SubmitWord() {
  const userInput = document.getElementById("UserInput").value;
  if (isEnglishWord(userInput)) {
    if (UsedWords.includes(userInput)) {
      return;
    }
    let length = userInput.length; // Score based on word length
    Score+= Math.round(length*length/4);
    document.getElementById("Score").innerText = `Score: ${Score}`;
    document.getElementById("UserInput").value = '';
    Timer += 2; // Add 2 seconds for a correct word
    document.getElementById("Timer").innerText = `Time: ${Timer}`;
    UsedWords.push(userInput);
  }
}

function GameStart(GameType) {
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("startbutton").id = "oldstartbutton";
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("startbutton").id = "oldstartbutton";
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("startbutton").id = "oldstartbutton";
  console.log("Game Started");
  if (GameType === "Speed Vocab") {
    document.getElementById("GameArea").innerHTML = `
      <div class='Timer' id="Timer">Time: ${Timer}</div>
      <div class='Score' id="Score">Score: ${Score}</div>
      <input class='Input' type="text" id="UserInput" placeholder="Type the word here" />
    `;

    const userInputElement = document.getElementById("UserInput");
    userInputElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        SubmitWord();
      }
    });

    function TimerTick() {
      if (Timer > 0) {
        Timer--;
        document.getElementById("Timer").innerText = `Time: ${Timer}`;
      } else {
        clearInterval(timerInterval);
        document.getElementById("GameArea").innerHTML = `<h2>Game Over! Your score: ${Score}</h2><br><button style='text-align:center;' class="button" onclick="window.location.reload('WordPuzzles/Games.html');">Play Again</button>`;
      }
    }
    const timerInterval = setInterval(TimerTick, 1000);
  }
  else if (GameType === "Hangman"){
    Hangman();
  }
  else if (GameType === "Equicktions"){
    window.eQUICKtions();
    console.log("Equicktions started");
  }
}
// Hangman Game Logic
function Hangman() {
    // Hangman game-specific variables are now encapsulated here.
    let word = '';
    let guessedLetters = [];
    let attemptsLeft = 10;

    // The DisplayMan function can be defined here or outside, but must be accessible.
    function DisplayMan() {
        let manParts = 10 - attemptsLeft;
        let hangmanStages = [
            "HangmanAssets/0.jpg", "HangmanAssets/1.jpg", "HangmanAssets/2.jpg",
            "HangmanAssets/3.jpg", "HangmanAssets/4.jpg", "HangmanAssets/5.jpg",
            "HangmanAssets/6.jpg", "HangmanAssets/7.jpg", "HangmanAssets/8.jpg",
            "HangmanAssets/9.jpg", "HangmanAssets/10.jpg"
        ];
        return `<img src='${hangmanStages[manParts]}' alt='Hangman Stage ${manParts}' />`;
    }

    // Function to update the game display.
    function updateDisplay() {
        const displayWord = word
            .split('')
            .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
            .join(' ');
        
        const gameArea = document.getElementById("GameArea");
        gameArea.innerHTML = `
            <div class='WordBlock'>${displayWord}</div>
            <div class='hangmanDisplay' id='hangmanDisplay'>${DisplayMan()}</div>
            <div class='WordBlock'>Attempts Left: ${attemptsLeft}</div>
            <input class='Input' type="text" id="LetterInput" maxlength="1" placeholder="Guess a letter" />
            <button class="button" id="submitLetterBtn">Submit</button>
        `;

        // Attach event listener using addEventListener, which is more reliable
        // than inline onclick calls, especially with dynamically generated HTML.
        document.getElementById("submitLetterBtn").addEventListener('click', guessLetter);
        document.getElementById("LetterInput").addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                guessLetter();
            }
        });
    }

    // Function to handle a letter guess.
    function guessLetter() {
        const letterInput = document.getElementById("LetterInput");
        const letter = letterInput.value.toLowerCase();
        letterInput.value = '';

        if (!letter || guessedLetters.includes(letter)) {
            return;
        }

        guessedLetters.push(letter);

        if (!word.includes(letter)) {
            attemptsLeft--;
        }
        
        updateDisplay();

        if (attemptsLeft <= 0) {
            document.getElementById("GameArea").innerHTML = `<h2>Game Over! The word was: ${word}</h2><br><button class="button" onclick="window.location.reload();">Play Again</button>`;
        } else if (!word.split('').some(l => !guessedLetters.includes(l))) {
            document.getElementById("GameArea").innerHTML = `<h2>Congratulations! You guessed the word: ${word}</h2><br><button class="button" onclick="window.location.reload();">Play Again</button>`;
        }
    }

    // Initialization logic for the Hangman game
    function init() {
        // Correctly get a random word from the Set.
        const wordsArray = Array.from(englishWords);
        word = wordsArray[Math.floor(Math.random() * wordsArray.length)];

        if (!word) {
            document.getElementById("GameArea").innerHTML = "<h2>Failed to load a word. Please try again.</h2>";
            return;
        }
        console.log("Starting Hangman with word:", word);
        updateDisplay();
    }

    // Start the game by calling the initialization function.
    init();
}

// --- eQUICKtions Game Logic ---

// Function RI and global variables are fine as is, but we'll put the 
// function declaration above the call site for clarity.


function eQUICKtions() {
    if (window.GameBoard.length === 0) { 
        window.GameBoard = [
            RI(0,100), RI(0,100), RI(0,100),
            RI(0,100), RI(0,100), RI(0,100),
            RI(0,100), RI(0,100), RI(0,100)
        ];
    }
    
    function Update(){
      console.log('Updating eQUICKtions display');
    document.getElementById("GameArea").innerHTML = `
    <div class='EquationDisplay'>${CurrentEquation}</div>
    <div class='EquationDisplay'>${EquationTimer}</div>
    <div class='EquationDisplay'>${EquicktionsScore}</div>
    <div class='eQUICKtionsGrid'>
        <div class='eQUICKtionsCellTop' onclick='window.CurrentEquation += window.GameBoard[0];window.UpdateEquation();'>${GameBoard[0]}</div>
        <div class='eQUICKtionsCellTop' onclick='window.CurrentEquation += window.GameBoard[1];window.UpdateEquation();'>${GameBoard[1]}</div>
        <div class='eQUICKtionsCellTop' onclick='window.CurrentEquation += window.GameBoard[2];window.UpdateEquation();'>${GameBoard[2]}</div>
        <br>
        <br>
        <div class='eQUICKtionsCellMid' onclick='window.CurrentEquation += window.GameBoard[3];window.UpdateEquation();'>${GameBoard[3]}</div>
        <div class='eQUICKtionsCellMid' onclick='window.CurrentEquation += window.GameBoard[4];window.UpdateEquation();'>${GameBoard[4]}</div>
        <div class='eQUICKtionsCellMid' onclick='window.CurrentEquation += window.GameBoard[5];window.UpdateEquation();'>${GameBoard[5]}</div>
        <br>
        <br>
        <div class='eQUICKtionsCellBot' onclick='window.CurrentEquation += window.GameBoard[6];window.UpdateEquation();'>${GameBoard[6]}</div>
        <div class='eQUICKtionsCellBot' onclick='window.CurrentEquation += window.GameBoard[7];window.UpdateEquation();'>${GameBoard[7]}</div>
        <div class='eQUICKtionsCellBot' onclick='window.CurrentEquation += window.GameBoard[8];window.UpdateEquation();'>${GameBoard[8]}</div>
    </div>
    <div class='OperationInput> 
    <button class='button'></button>
    <br>
    <button class='button' onclick="window.CurrentEquation += '+';window.UpdateEquation();">+</button>
    <br>
    <button class='button' onclick="window.CurrentEquation += '-';window.UpdateEquation();">-</button>
    <br>
    <button class='button' onclick="window.CurrentEquation += '*';window.UpdateEquation();">*</button>
    <br>
    <button class='button' onclick="window.CurrentEquation += '/';window.UpdateEquation();">/</button>
    <br>
    <button class='button' onclick="window.CurrentEquation += '=';window.UpdateEquation();">=</button>
    <br>
    <button class='button' onclick="window.CurrentEquation = '';window.UpdateEquation();">Clear</button>
    </div>
    <button class="button" onclick="window.SubmitEquation()">Submit</button>
    `;
  };
  window.UpdateEquation = Update;
  EquationTimer = 60;
    function EquationTimerTick(){
      EquationTimer -= 1;
      Update();
      if (EquationTimer <= 0){
        document.getElementById("GameArea").innerHTML = `<h2>Game Over! Your score: ${EquicktionsScore}</h2><br><button style='text-align:center;' class="button" onclick="window.location.reload('WordPuzzles/Games.html');">Play Again</button>`;
        clearInterval(EquationInterval);
      };
    };
    const EquationInterval = setInterval(EquationTimerTick, 1000);
  Update();
  function SubmitEquation() {
      if (CurrentEquation.length <= 3) {
        alert("Equation too short!");
        return;
      };
        Newcard(1);
        Newcard(2);
        Newcard(3);
        Newcard(4);
        Newcard(5);
        Newcard(6);
        Newcard(7);
        Newcard(8);
        Newcard(0);
        // Evaluate the equation here
        try {
            const parts = window.CurrentEquation.split('=');
            if (parts.length !== 2) {
                alert("Invalid equation format. Please use '=' to separate the expression and the result.");
                return;
            }
            const expression = parts[0];
            const result = parseFloat(parts[1]);
            const evaluatedResult = eval(expression);
            if (evaluatedResult === result) {
                alert("Correct!");
                EquicktionsScore += 1;
                EquationTimer += 30;
            } else {
                alert(`Incorrect. The correct result is ${evaluatedResult}`);
            }
            window.CurrentEquation = '';
            Update();
  }
        catch (error) {
            alert("Error evaluating equation: " + error.message);
        }
  };
  window.SubmitEquation = SubmitEquation;
  function Newcard(index) {
        window.GameBoard[index] = RI(0,100);
        Update();
  };
  window.Newcard = Newcard;
} // end of eQUICKtions function