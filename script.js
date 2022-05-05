const buttons = document.querySelectorAll('[data-selection]');
const computerScore = document.querySelector('[data-counter-comp]')
const playerScore = document.querySelector('[data-counter-player]')
let results = document.querySelector('h1')
const SELECTIONS = [
  {
    name: 'rock',
    beats: 'scissors'
  },
  {
    name: 'paper',
    beats: 'rock'
  },
  {
    name: 'scissors',
    beats: 'paper'
  }
]

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const selectionName = button.dataset.selection;
    const selection = SELECTIONS.find(btn => btn.name === selectionName);
    makeSelection(selection);
  });
});

function incrementScore(scoreSpan){
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function makeSelection(selection){
  const computerChoice = computerSelection();
  const yourWinner = isWinner(selection, computerChoice);
  const computerWinner = isWinner(computerChoice, selection);
  addLoss(computerChoice, computerWinner, selection);
  addWin(selection, yourWinner, computerChoice);
  addTie(selection, computerChoice);
  gameEnd(computerScore, playerScore);
  if (computerWinner) incrementScore(computerScore);
  if (yourWinner) incrementScore(playerScore);
}

function gameEnd(cs, ps){
  if(cs == 5){
    results.innerText = `Computer Boy won the game, better luck next time!`
  }else if(ps == 5){
    results.innerText = `Congratulations, you won! `
  }
}

function addWin(selection, winner, opponent){
  if (winner) results.innerText = `You win, ${selection.name} beats ${opponent.name}!`;
}

function addLoss(selection, winner, opponent){
  if (winner) results.innerText = `You lose, ${selection.name} beats ${opponent.name}!`;
}

function addTie(selection, opponent){
  if(selection === opponent) results.innerText = `You tied, try again!`;
}

function isWinner(selection, opponent){
  return selection.beats === opponent.name;
}

function computerSelection(){
  const computerChoice = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[computerChoice]
}
