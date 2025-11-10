// A variable to hold our word set once loaded
let englishWords;
var CurrentEquation = '';
var EquationTimer = 0;
var GameBoard = [];
var EquicktionsScore = 0;
window.ISINQUESTION = true;

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
    if (!englishWords) {
        console.error("Word list is not loaded yet.");
        return false;
    }
    const normalizedWord = word.trim().toLowerCase();
    return englishWords.has(normalizedWord);
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

let UsedWords = [];
let Timer = 10;
let Score = 0;

function SubmitWord() {
    const userInput = document.getElementById("UserInput").value;
    if (isEnglishWord(userInput) && !UsedWords.includes(userInput)) {
        let length = userInput.length;
        Score += Math.round(length * length / 4);
        document.getElementById("Score").innerText = `Score: ${Score}`;
        document.getElementById("UserInput").value = '';
        Timer += 2;
        document.getElementById("Timer").innerText = `Time: ${Timer}`;
        UsedWords.push(userInput);
    }
}

function GameStart(GameType) {
    const startButtons = document.getElementsByClassName("startbutton");
    for (let i = 0; i < startButtons.length; i++) {
        startButtons[i].style.display = "none";
    }

    console.log("Game Started");
    if (GameType === "Speed Vocab") {
        document.getElementById("GameArea").innerHTML = `
            <div class='Timer' id="Timer">Time: ${Timer}</div>
            <div class='Score' id="Score">Score: ${Score}</div>
            <input class='Input' onpaste="return false;" ondrop="return false;" type="text" id="UserInput" placeholder="Type the word here" />
        `;

        const userInputElement = document.getElementById("UserInput");
        userInputElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                SubmitWord();
            }
        });

        const timerInterval = setInterval(function TimerTick() {
            if (Timer > 0) {
                Timer--;
                document.getElementById("Timer").innerText = `Time: ${Timer}`;
            } else {
                clearInterval(timerInterval);
                let currentRolls = parseInt(getCookie('Rolls') || '0', 10);
                let newRolls = currentRolls + Score;
                document.cookie = `Rolls=${newRolls}; path=/;`;
                document.getElementById("GameArea").innerHTML = `<h2>Game Over! Your score: ${Score}</h2><br><button style='text-align:center;' class="button" onclick="window.location.reload();">Play Again</button>`;
            }
        }, 1000);
    } else if (GameType === "Hangman") {
        Hangman();
    } else if (GameType === "Equicktions") {
        eQUICKtions();
        console.log("Equicktions started");
    } else if (GameType === "Study"){
        let SearchParams = new URLSearchParams(window.location.search);
        if (SearchParams.has("set")){
            StudyMode();
        }else{
            alert("You Need a Question Set for this gamemode.")
        }
    }
}
// Hangman Game Logic
function Hangman() {
    let word = '';
    let guessedLetters = [];
    let attemptsLeft = 10;

    function DisplayMan() {
        let manParts = 10 - attemptsLeft;
        let hangmanStages = ["HangmanAssets/0.jpg", "HangmanAssets/1.jpg", "HangmanAssets/2.jpg", "HangmanAssets/3.jpg", "HangmanAssets/4.jpg", "HangmanAssets/5.jpg", "HangmanAssets/6.jpg", "HangmanAssets/7.jpg", "HangmanAssets/8.jpg", "HangmanAssets/9.jpg", "HangmanAssets/10.jpg"];
        return `<img src='${hangmanStages[manParts]}' alt='Hangman Stage ${manParts}' />`;
    }

    function updateDisplay() {
        const displayWord = word.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
        const gameArea = document.getElementById("GameArea");
        gameArea.innerHTML = `
            <div class='WordBlock'>${displayWord}</div>
            <div class='hangmanDisplay' id='hangmanDisplay'>${DisplayMan()}</div>
            <div class='WordBlock'>Attempts Left: ${attemptsLeft}</div>
            <input class='Input' type="text" id="LetterInput" maxlength="1" placeholder="Guess a letter" />
            <button class="button" id="submitLetterBtn">Submit</button>
        `;

        document.getElementById("submitLetterBtn").addEventListener('click', guessLetter);
        document.getElementById("LetterInput").addEventListener('keydown', (event) => {
            if (event.key === 'Enter') guessLetter();
        });
    }

    function guessLetter() {
        const letterInput = document.getElementById("LetterInput");
        const letter = letterInput.value.toLowerCase();
        letterInput.value = '';
        if (!letter || guessedLetters.includes(letter)) return;
        guessedLetters.push(letter);
        if (!word.includes(letter)) attemptsLeft--;
        updateDisplay();

        if (attemptsLeft <= 0) {
            document.getElementById("GameArea").innerHTML = `<h2>Game Over! The word was: ${word}</h2><br><button class="button" onclick="window.location.reload();">Play Again</button>`;
        } else if (!word.split('').some(l => !guessedLetters.includes(l))) {
            document.getElementById("GameArea").innerHTML = `<h2>Congratulations! You guessed the word: ${word}</h2><br><button class="button" onclick="window.location.reload();">Play Again</button>`;
            let currentRolls = parseInt(getCookie('Rolls') || '0', 10);
            let newRolls = currentRolls + 18;
            document.cookie = `Rolls=${newRolls}; path=/;`;
        }
    }
    
    const wordsArray = Array.from(englishWords);
    word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    if (!word) {
        document.getElementById("GameArea").innerHTML = "<h2>Failed to load a word. Please try again.</h2>";
        return;
    }
    console.log("Starting Hangman with word:", word);
    updateDisplay();
}

// --- eQUICKtions Game Logic ---
function RI(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function eQUICKtions() {
    if (window.GameBoard.length === 0) {
        window.GameBoard = [RI(0, 100), RI(0, 100), RI(0, 100), RI(0, 100), RI(0, 100), RI(0, 100), RI(0, 100), RI(0, 100), RI(0, 100)];
    }

    function Update() {
        document.getElementById("GameArea").innerHTML = `
            <div class='EquationDisplay'>Equation: ${CurrentEquation}</div>
            <div class='EquationDisplay'>Time: ${EquationTimer}</div>
            <div class='EquationDisplay'>Score: ${EquicktionsScore}</div>
            <div class='eQUICKtionsGrid'>
                <div class='eQUICKtionsCellTop' onclick='CurrentEquation += GameBoard[0]; Update();'>${GameBoard[0]}</div>
                <div class='eQUICKtionsCellTop' onclick='CurrentEquation += GameBoard[1]; Update();'>${GameBoard[1]}</div>
                <div class='eQUICKtionsCellTop' onclick='CurrentEquation += GameBoard[2]; Update();'>${GameBoard[2]}</div>
                <br><br>
                <div class='eQUICKtionsCellMid' onclick='CurrentEquation += GameBoard[3]; Update();'>${GameBoard[3]}</div>
                <div class='eQUICKtionsCellMid' onclick='CurrentEquation += GameBoard[4]; Update();'>${GameBoard[4]}</div>
                <div class='eQUICKtionsCellMid' onclick='CurrentEquation += GameBoard[5]; Update();'>${GameBoard[5]}</div>
                <br><br>
                <div class='eQUICKtionsCellBot' onclick='CurrentEquation += GameBoard[6]; Update();'>${GameBoard[6]}</div>
                <div class='eQUICKtionsCellBot' onclick='CurrentEquation += GameBoard[7]; Update();'>${GameBoard[7]}</div>
                <div class='eQUICKtionsCellBot' onclick='CurrentEquation += GameBoard[8]; Update();'>${GameBoard[8]}</div>
            </div>
            <div class='OperationInput'>
                <button class='button' onclick="CurrentEquation += '+'; Update();">+</button>
                <button class='button' onclick="CurrentEquation += '-'; Update();">-</button>
                <button class='button' onclick="CurrentEquation += '*'; Update();">*</button>
                <button class='button' onclick="CurrentEquation += '/'; Update();">/</button>
                <button class='button' onclick="CurrentEquation += '='; Update();">=</button>
                <br>
                <button class='button' onclick="CurrentEquation = ''; Update();">Clear</button>
            </div>
            <button class="button" onclick="SubmitEquation()">Submit</button>
        `;
    }

    EquationTimer = 60;
    const EquationInterval = setInterval(function EquationTimerTick() {
        EquationTimer -= 1;
        Update();
        if (EquationTimer <= 0) {
            clearInterval(EquationInterval);
            document.getElementById("GameArea").innerHTML = `<h2>Game Over! Your score: ${EquicktionsScore}</h2><br><button style='text-align:center;' class="button" onclick="window.location.reload();">Play Again</button>`;
            let currentRolls = parseInt(getCookie('Rolls') || '0', 10);
            let newRolls = currentRolls + (EquicktionsScore * 128);
            document.cookie = `Rolls=${newRolls}; path=/`;
        }
    }, 1000);

    function SubmitEquation() {
        if (CurrentEquation.length <= 3) {
            alert("Equation too short!");
            return;
        }

        try { // **FIXED: ADDED OPENING BRACE FOR 'try'**
            const parts = CurrentEquation.split('=');
            if (parts.length !== 2) {
                alert("Invalid equation format. Please use '=' to separate the expression and the result.");
                return;
            }
            const expression = parts[0];
            const result = parseFloat(parts[1]);
            const evaluatedResult = eval(expression); // Note: eval() is risky but used here as per original code.
            if (evaluatedResult === result) {
                alert("Correct!");
                EquicktionsScore += 1;
                EquationTimer += 30;
                for (let i = 0; i < 9; i++) GameBoard[i] = RI(0, 100);
            } else {
                alert(`Incorrect. The correct result for ${expression} is ${evaluatedResult}`);
            }
            CurrentEquation = '';
            Update();
        } catch (error) { // **FIXED: MOVED 'catch' TO CORRECTLY FOLLOW 'try'**
            alert("Error evaluating equation: " + error.message);
        }
    }
    
    // Make functions available to be called from HTML
    window.SubmitEquation = SubmitEquation;
    window.Update = Update;

    Update(); // Initial call to draw the game
}

function ImportSet(SetString){
    let QS = SetString.split(";;");
    for (i=0; i < QS.length; i++){
        QS[i] = QS[i].split("**");
        QS[i].pop();
    }
    QS.pop();
    console.log(QS);
    return QS;
}


function ShowQuestion(){
    let Question;
    const SearchParams = new URLSearchParams(window.location.search);
    const QuestionString = SearchParams.get('set');
    const QuestionSet = ImportSet(QuestionString);
    function Show(){
        try{
    Question = QuestionSet[RI(0,QuestionSet.length)]
    document.getElementById("GameArea").innerHTML = `
        <div id="Question" type="text" class="WordBlock" style="padding: 100px; font-size: large;">
          ${Question[0]}
        </div>
        <br>
        <button id="A1" type="text" class="BlueBlock" onclick="window.Click('A1')" style="padding: 25px; font-size: medium; margin: 15px;">
          ${Question[1]}
        </button>
        <button id="A2" type="text" class="BlueBlock" onclick="window.Click('A2')" style="padding: 25px; font-size: medium; margin: 15px;">
          ${Question[2]}
        </button>
        <br>
        <button id="A3" type="text" class="BlueBlock" onclick="window.Click('A3')" style="padding: 25px; font-size: medium; margin: 15px;">
          ${Question[3]}
        </button>
        <button id="A4" type="text" class="BlueBlock" onclick="window.Click('A4')" style="padding: 25px; font-size: medium; margin: 15px;">
          ${Question[4]}
        </button>
    `}catch(error){
        Show();
    }}
    Show();
    function Correct(){
        console.log("correct");
        window.ISINQUESTION = false;
        document.getElementById("GameArea").innerHTML = "<h1>Loading...</h1>"
    }
    function Incorrect(){
        Show();
    }
    function Click(string){
        if (string === "A1"){
            if (Question[5] === "true"){
                Correct();
            }else{
                Incorrect();
            }
        }
        if (string === "A2"){
            if (Question[6] === "true"){
                Correct();
            }else{
                Incorrect();
            }
        }
        if (string === "A3"){
            if (Question[7] === "true"){
                Correct();
            }else{
                Incorrect();
            }
        }
        if (string === "A4"){
            if (Question[8] === "true"){
                Correct();
            }else{
                Incorrect();
            }
        }
    }
    window.Click = Click;
}

function StudyMode(){
    let Score = 0;
    function CorrectAnswer(){
        Score++
        document.getElementById("GameArea").innerHTML = `<h1 class='BlueBlock'>Score:${Score}</h1>`;
        setTimeout(ShowQuestion, 2000);
        window.ISINQUESTION = true;
        interval = setInterval(Check, 100)
    }
    function Check(){
        console.log("Checking")
        if (window.ISINQUESTION === false){
            
            console.log("Found True")
            clearInterval(interval)
            CorrectAnswer();
        }
    }
    let interval = setInterval(Check, 100)
    ShowQuestion();
}

function QuestForWood(){
    function Game(){
        
        ShowQuestion();
        window.ISINQUESTION = true;
        interval = setInterval(Check, 100)
    }
    let Score = 0;
    function CorrectAnswer(){
        Score++
        Game();
    }
    function Check(){
        console.log("Checking")
        if (window.ISINQUESTION === false){
            
            console.log("Found True")
            clearInterval(interval)
            CorrectAnswer();
        }
    }
    let interval = setInterval(Check, 100)
    ShowQuestion();
}