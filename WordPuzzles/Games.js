// A variable to hold our word set once loaded
let englishWords;

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
}

