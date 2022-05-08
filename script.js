// GRABBING VARIABLES

const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("round-result");
const possibleSelections = document.querySelectorAll('.selection')
const playerPoints = document.getElementById('player-points')
const computerPoints = document.getElementById("computer-points");
let playerChoice
let computerChoice
let resultRound
let countFivePlayer = 0
let countFiveComputer = 0
let playerWinsRound = false
let computerWinsRound = false

// EVENTS
possibleSelections.forEach(possibleSelection => possibleSelection.addEventListener('click', (e) => {
  playerChoice = e.target.id 
  // console.log(playerChoice)
  playerChoiceDisplay.textContent = playerChoice
  computerPlay()
  playRound()
  currentScoreCalc()
}))

// computer chooses
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
  computerChoiceDisplay.textContent = computerChoice
}

// plays a round
function playRound() {
  console.log(playerChoice)
  console.log(computerChoice)
  if (playerChoice === "rock" && computerChoice === "rock") {
    resultRound = "It's a tie!";
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    resultRound = "It's a tie!";
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    resultRound = "It's a tie!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    resultRound = "You lose, paper beats rock!";
    computerWinsRound = true
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    resultRound = "You win, rocks beats paper!";
    playerWinsRound = true
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    resultRound = "You win, paper beats rock!";
    playerWinsRound = true
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    resultRound = "You lose! Scissors beat paper!";
    computerWinsRound = true
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    resultRound = "You win! Scissors beat paper!";
    playerWinsRound = true
    console.log(playerWinsRound)
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    resultRound = "You lose! Rock beats scissors!";
    computerWinsRound = true
  }

resultDisplay.textContent = resultRound
}

function currentScoreCalc() {
  if (computerWinsRound) {
    countFiveComputer += 1
    computerPoints.textContent = countFiveComputer
    computerWinsRound = false
  }
  else if (playerWinsRound) {
    countFivePlayer += 1
    playerPoints.textContent = countFivePlayer
    playerWinsRound = false
  }
}