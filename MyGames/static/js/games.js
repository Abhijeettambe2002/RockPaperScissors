document.addEventListener("DOMContentLoaded", function() {
    const options = ["rock", "paper", "scissor"];
    let playerScore = 0;
    let computerScore = 0;
    let round_count = 0;
    let targetRounds = 0;
    final_score = 0;
    let rock = document.querySelector("#rockBtn");
    let paper = document.querySelector("#paperBtn");
    let scissor = document.querySelector("#scissorBtn");
    let finalScore = document.querySelector("#finalScore");
    let submitBtn = document.querySelector("#submitBtn");
    let player = document.querySelector("#playerScore");
    let computer = document.querySelector("#computerScore");
    let reset = document.querySelector("#resetBtn");
    let hard = document.querySelector(".Hard_Mode"); 
    let medium = document.querySelector(".Medium_Mode");
    let easy = document.querySelector(".Easy_Mode"); 
    let result = document.getElementById("result");
    let roundsRemaining = document.getElementById("roundsRemaining");
    let finalScoreDisplay = document.querySelector("#finalScoreDisplay");


    function updateScores() {
        player.innerText = `Player Score: ${playerScore}`;
        computer.innerText = `Computer Score: ${computerScore}`;
    }

    function updateRoundsRemaining() {
        if (targetRounds > 0) {
            roundsRemaining.innerText = `Rounds remaining: ${targetRounds - round_count}`;
        } else {
            roundsRemaining.innerText = "";
        }
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        round_count = 0;
        updateScores();
        updateRoundsRemaining();
    }

    function hardMode() {
        resetGame();
        targetRounds = 3;
        result.innerText = "Hard Mode activated.";
        updateRoundsRemaining();
        enableGameButtons();
    }

    function mediumMode() {
        resetGame();
        targetRounds = 5;
        result.innerText = "Medium Mode activated.";
        updateRoundsRemaining();
        enableGameButtons();
    }

    function easyMode() {
        resetGame();
        targetRounds = 6;
        result.innerText = "Easy Mode activated.";
        updateRoundsRemaining();
        enableGameButtons();
    }

    function checkGameOver() {
        if (targetRounds > 0) {
            if (round_count >= targetRounds) {
                if (playerScore > computerScore) {
                    final_score++;
                    console.log( final_score);
                    console.log('yes:');
                    finalScoreDisplay.innerText = `Your Score:${final_score}`; 

                    result.innerText = "You win the game!";
                } else if (playerScore < computerScore) {
                    result.innerText = "Computer wins the game!";
                } else {
                    result.innerText = "It's a tie!";
                }
                disableGameButtons();
            }
        }
    }

    function disableGameButtons() {
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }

    function enableGameButtons() {
        rock.disabled = false;
        paper.disabled = false;
        scissor.disabled = false;
    }

    // Disable game buttons initially and prompt user to choose a mode
    disableGameButtons();
    result.innerText = "Please choose a mode to start the game.";

    submitBtn.addEventListener("click", () => {
        scoreInput.value = final_score
        console.log('Score to be submitted:', scoreInput.value);
    });


    rock.addEventListener("click", () => {
        let computerChoice = options[Math.floor(Math.random() * options.length)];
        let playerChoice = "rock";
        if (computerChoice === "scissor") {
            playerScore++;
            result.innerText = "You win this round!";
        } else if (computerChoice === "paper") {
            computerScore++;
            result.innerText = "Computer wins this round!";
        } else {
            result.innerText = "It's a tie!";
        }
        round_count++;
        updateScores();
        updateRoundsRemaining();
        checkGameOver();
    });

    paper.addEventListener("click", () => {
        let computerChoice = options[Math.floor(Math.random() * options.length)];
        let playerChoice = "paper";
        if (computerChoice === "rock") {
            playerScore++;
            result.innerText = "You win this round!";
        } else if (computerChoice === "scissor") {
            computerScore++;
            result.innerText = "Computer wins this round!";
        } else {
            result.innerText = "It's a tie!";
        }
        round_count++;
        updateScores();
        updateRoundsRemaining();
        checkGameOver();
    });

    scissor.addEventListener("click", () => {
        let computerChoice = options[Math.floor(Math.random() * options.length)];
        let playerChoice = "scissor";
        if (computerChoice === "paper") {
            playerScore++;
            result.innerText = "You win this round!";
        } else if (computerChoice === "rock") {
            computerScore++;
            result.innerText = "Computer wins this round!";
        } else {
            result.innerText = "It's a tie!";
        }
        round_count++;
        updateScores();
        updateRoundsRemaining();
        checkGameOver();
    });

    if (hard) {
        hard.addEventListener("click", hardMode);
    }

    if (medium) {    
        medium.addEventListener("click", mediumMode);
    }

    if (easy) {    
        easy.addEventListener("click", easyMode);
    }

    reset.addEventListener("click", () => {
        resetGame();
        result.innerText = "Game reset.";
        enableGameButtons(); // Enable game buttons when game is reset
    });
});