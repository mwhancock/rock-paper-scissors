

function computerPlay(){
  const options = ['rock', 'paper', 'scissors'];
  let computerChoice = Math.floor(Math.random() * options.length);
  return options[computerChoice];
}


let computerSelection = computerPlay();
let playerSelection = prompt('Choose: rock, paper, or scissors').toLowerCase();

function playRound(x, y){
if (x === 'rock' && y ==='paper'){
  return 'You win! Paper beats rock!';
} else if (x === 'paper' && y === 'rock'){
  return 'You lose! Paper beats rock!';
} else if (x === 'scissors' && y === "rock"){
  return 'You win! Rock beats scissors!';
} else if (x === 'rock' && y === 'scissors'){
  return 'You lose! Rock beats scissors!';
} else if (x === 'paper' && y === 'scissors'){
  return'You win! Scissors beat paper!';
} else if (x === 'scissors' && y === 'paper'){
  return 'You lose! Scissors beat paper!';
}else if (x === y){
  return 'You tied! Try again!';
}
}

function game(round){
  let comp = 0;
  let player = 0;
  for (let i = 0; i < 3; i++){
    console.log(round);
  }
}

console.log(game(playRound()));
