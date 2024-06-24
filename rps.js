let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("CONGRATULATIONS!!! YOU WIN!!!!");
    }
    else if (humanScore < computerScore) {
        console.log("SORRY.. YOU LOSE..");
    }
    else {
        console.log("YOU TIED???")
    }

    console.log(humanScore);
    console.log(computerScore);
}


function playRound(humanChoice, computerChoice) {
    let human = humanChoice;
    let cpu = computerChoice;

    while (1) {
        if (human === "ROCK") {
            if (cpu === "SCISSORS") {
                console.log("You Win! Rock Beats Scissors");
                humanScore = humanScore + 1;
                break;
            }
            else if (cpu === "PAPER") {
                console.log("You Lose! Rock Loses To Paper");
                computerScore = computerScore + 1;
                break;
            }
            else {
                console.log("Tie! Try Again");
                human = getHumanChoice();
                cpu = getComputerChoice();
            }
        }
        else if (human === "PAPER") {
            if (cpu === "SCISSORS") {
                console.log("You Lose! Paper Loses To Scissors");
                computerScore = computerScore + 1;
                break;
            }
            else if (cpu === "PAPER") {
                console.log("Tie! Try Again");
                human = getHumanChoice();
                cpu = getComputerChoice();
            }
            else {
                console.log("You Win! Paper Beats Rock");
                humanScore = humanScore + 1;
                break;
            }
        }
        else if (human === "SCISSORS") {
            if (cpu === "SCISSORS") {
                console.log("Tie! Try Again");
                human = getHumanChoice();
                cpu = getComputerChoice();
            }
            else if (cpu === "PAPER") {
                console.log("You Win! Scissors Beats Paper");
                humanScore = humanScore + 1;
                break;
            }
            else {
                console.log("You Lose! Scissors Loses To Rock");
                computerScore = computerScore + 1;
                break;
            }
        }
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        return "ROCK";
    }
    if (choice === 1) {
        return "PAPER";
    }
    if (choice === 2) {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    while(1) {
        let choice = prompt("PICK YOUR CHOICE: ROCK, PAPER, OR SCISSORS");
        choice = choice.toUpperCase();

        if (choice === "ROCK" || choice === "R") {
            return "ROCK";
        }
        else if (choice === "PAPER" || choice === "P") {
            return "PAPER";
        }
        else if (choice === "SCISSORS" || choice === "S") {
            return "SCISSORS";
        }
    }
}

// console.log(getComputerChoice(3));
// console.log(getComputerChoice(3));
// console.log(getComputerChoice(3));
// console.log(getComputerChoice(3));
// console.log(getHumanChoice());
// playRound(getHumanChoice(), getComputerChoice());
// console.log(humanScore);
// console.log(computerScore);
playGame();

