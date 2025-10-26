console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randInt = Math.floor(Math.random() * 3)
    let computerChoice;

    switch (randInt){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper, or Scissors");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    console.log(computerChoice)
    if (humanChoice === computerChoice){
        console.log(humanChoice)
        console.log(`Tie. ${humanChoice} ties ${computerChoice}.`);
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(humanChoice)
        console.log("Win. Paper beats rock.");
    }
       else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log(humanChoice)
        console.log("Lose. Scissors loses to rock.");
    }
       else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log(humanChoice)
        console.log("Lose. Rock loses to paper.");
    }
       else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log(humanChoice)
        console.log("Win. Rock beats scissors.");
    }
        else if (humanChoice === "paper" && computerChoice === "scissors"){
            console.log(humanChoice)
        console.log("Lose. Paper loses to scissors");
    }
    else {
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    }
}

playGame();


