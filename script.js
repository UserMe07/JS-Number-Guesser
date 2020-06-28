let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
};

function compareGuesses(humanGuess, computerGuess, targetNumber){
  let targetDifference1 = Math.abs(humanGuess - targetNumber);
  let targetDifference2 = Math.abs(computerGuess - targetNumber);
  let closestGuess = ( targetDifference1 > targetDifference2 );
  
  return (targetDifference1 == targetDifference2) ? true : closestGuess;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  }
  else if (winner === 'computer') {
    computerScore++;
  }
  else {
    console.log('Error!');
  }
};

function advanceRound() {
  currentRoundNumber++;
};
