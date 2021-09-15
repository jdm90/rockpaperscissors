let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'a BOMB') {
    playerScore++;
    return 'Cheat code activated...MASS DESTRUCTION! You won!';
  }
  if (userChoice === computerChoice) {
    return 'You tied the computer.';
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      return 'The computer won!';
    } else {
      playerScore++;
      return 'You won!';
    }
  };
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerScore++;
      return 'The computer won!';
    } else {
      playerScore++;
      return 'You won!';
    }
  };
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      return 'The computer won!';
    } else {
      playerScore++;
      return 'You won!';
    }
  };
};


function cheatCode() {
  let userChoice = prompt('Enter the secret cheat code.');
  if (userChoice === 'bomb') {
    let userChoice = 'a BOMB';
    let computerChoice = getComputerChoice();
    document.querySelector('#uChoice').innerHTML = `You threw ${userChoice}.`;
    document.querySelector('#cChoice').innerHTML = `The computer threw ${computerChoice}.`;
    document.querySelector('#winner').innerHTML = determineWinner(userChoice, computerChoice);
    document.querySelector('#score').innerHTML = `PLAYER SCORE: ${playerScore} || COMPUTER SCORE: ${computerScore}`;
  } else {
    alert('Try again buster!');
  }
};

function playGameRock() {
  let userChoice = 'rock';
  let computerChoice = getComputerChoice();
  document.querySelector('#uChoice').innerHTML = `You threw ${userChoice}.`;
  document.querySelector('#cChoice').innerHTML = `The computer threw ${computerChoice}.`;
  document.querySelector('#winner').innerHTML = determineWinner(userChoice, computerChoice);
  document.querySelector('#score').innerHTML = `PLAYER SCORE: ${playerScore} || COMPUTER SCORE: ${computerScore}`;
};

function playGamePaper() {
  let userChoice = 'paper';
  let computerChoice = getComputerChoice();
  document.querySelector('#uChoice').innerHTML = `You threw ${userChoice}.`;
  document.querySelector('#cChoice').innerHTML = `The computer threw ${computerChoice}.`;
  document.querySelector('#winner').innerHTML = determineWinner(userChoice, computerChoice);
  document.querySelector('#score').innerHTML = `PLAYER SCORE: ${playerScore} || COMPUTER SCORE: ${computerScore}`;
};

function playGameScissors() {
  let userChoice = 'scissors';
  let computerChoice = getComputerChoice();
  document.querySelector('#uChoice').innerHTML = `You threw ${userChoice}.`;
  document.querySelector('#cChoice').innerHTML = `The computer threw ${computerChoice}.`;
  document.querySelector('#winner').innerHTML = determineWinner(userChoice, computerChoice);
  document.querySelector('#score').innerHTML = `PLAYER SCORE: ${playerScore} || COMPUTER SCORE: ${computerScore}`;
};

function resetScore() {
  window.location.reload();
  /*
  let playerScore = 0;
  let computerScore = 0;
  document.querySelector('#score').innerHTML = `PLAYER SCORE: ${playerScore} || COMPUTER SCORE: ${computerScore}`;
  */
};

