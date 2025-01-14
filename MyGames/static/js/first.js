document.addEventListener("DOMContentLoaded", function() {
    const options = ["rock", "paper", "scissor"];
    let playerScore = 0;
    let computerScore = 0;

    let rock = document.querySelector("#rockBtn");
    let paper = document.querySelector("#paperBtn");
    let scissor = document.querySelector("#scissorBtn");
    let scoreInput = document.querySelector("#scoreInput");
    let submitBtn = document.querySelector("#submitBtn");
    let player = document.querySelector("#playerScore");
    let computer = document.querySelector("#computerScore");
    let reset = document.querySelector("#resetBtn");

    function updateScores() {
        player.innerText = `Player Score: ${playerScore}`;
        computer.innerText = `Computer Score: ${computerScore}`;
    }

    submitBtn.addEventListener("click", () => {
        scoreInput.value = playerScore
        console.log('Score to be submitted:', scoreInput.value);
    });

    rock.addEventListener("click", () => {
        let computerChoice = options[Math.floor(Math.random() * options.length)];
        let playerChoice = "rock";
        if (computerChoice === "scissor") {
            playerScore++;
        } else if (computerChoice === "paper") {
            computerScore++;
        }
        updateScores();
    });

    paper.addEventListener("click", () => {
        let computerChoice = options[Math.floor(Math.random() * options.length)];
        let playerChoice = "paper";
        if (computerChoice === "rock") {
            playerScore++;
        } else if (computerChoice === "scissor") {
            computerScore++;
        }
        updateScores();
    });

    scissor.addEventListener("click", () => {
        let computerChoice = options[Math.floor(Math.random() * options.length)];
        let playerChoice = "scissor";
        if (computerChoice === "paper") {
            playerScore++;
        } else if (computerChoice === "rock") {
            computerScore++;
        }
        updateScores();
    });

    reset.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        updateScores();
        document.getElementById("result").innerText = "Game reset.";
    });
});
