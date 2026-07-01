let playerScore = 0;
let computerScore = 0;

const results = document.getElementById("results");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection) {

    // Stop the game if someone already won
    if (playerScore === 5 || computerScore === 5) {
        return;
    }

    const computerSelection = getComputerChoice();

    let message = "";

    if (playerSelection === computerSelection) {
        message = `Tie! Both chose ${playerSelection}.`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        message = `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        computerScore++;
        message = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

    results.innerHTML = `
        <p>${message}</p>
        <p>Player: ${playerScore} | Computer: ${computerScore}</p>
    `;

    if (playerScore === 5) {
        results.innerHTML += "<h2>🎉 You Won the Game!</h2>";
    } else if (computerScore === 5) {
        results.innerHTML += "<h2>💻 Computer Won the Game!</h2>";
    }
}

// Event Listeners
document.getElementById("rock").addEventListener("click", function () {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playRound("scissors");
});