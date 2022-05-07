function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let item = choices[randomIndex];
  return item;
}

function playerPlay() {
  let playerHand = prompt("Choose rock, paper or scissors:");
  playerHand = playerHand.toLowerCase();
  // console.log(playerChoice);
  return playerHand;
}

let compChoice = "";
let playerChoice = "";

function playRound(playerChoice, compChoice) {
  let resultRound = "";
  // compChoice = computerPlay();
  // playerChoice = playerPlay()
  // console.log(compChoice);
  // console.log(playerChoice)
  if (playerChoice === "rock" && compChoice === "rock") {
    resultRound = "It's a tie";
  } else if (playerChoice === "paper" && compChoice === "paper") {
    resultRound = "It's a tie";
  } else if (playerChoice === "scissors" && compChoice === "scissors") {
    resultRound = "It's a tie";
  } else if (playerChoice === "rock" && compChoice === "paper") {
    resultRound = "You lose, paper beats rock!";
  } else if (playerChoice === "rock" && compChoice === "scissors") {
    resultRound = "You win, rocks beats paper!";
  } else if (playerChoice === "paper" && compChoice === "rock") {
    resultRound = "You win, paper beats rock!";
  } else if (playerChoice === "paper" && compChoice === "scissors") {
    resultRound = "You lose! Scissors beat paper!";
  } else if (playerChoice === "scissors" && compChoice === "paper") {
    resultRound = "You win! Scissors beat paper!";
  } else if (playerChoice === "scissors" && compChoice === "rock") {
    resultRound = "You lose! Rock beats scissors!";
  } else {
    resultRound = "Please enter a valid item.";
  }
  return resultRound;
}

// console.log(playRound(playerChoice, compChoice))

function game() {
  // for (let i = 0; i < 5; i++) {
  //   playerChoice = playerPlay();
  //   compChoice = computerPlay();

  //   // can use console.log to print result on console instead of alert as well, but result becomes visible after the last input from user
  //   alert(playRound(playerChoice, compChoice));
  // }
  // playerChoice = playerPlay()
  // compChoice = computerPlay()
  // alert(playRound(playerChoice, compChoice));
}
game();
