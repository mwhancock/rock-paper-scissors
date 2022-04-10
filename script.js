

function computerPlay(){
  const options = ['rock', 'paper', 'scissors'];
  let computerChoice = Math.floor(Math.random() * options.length);
  return options[computerChoice];
}

function playerChoice(){
  return prompt('Please choose: rock, paper, or scissors.')
};


function playRound(cs, ps){
if (cs === 'rock' && ps ==='paper'){
  console.log('You win! Paper beats rock!');
  return 'win';
} else if (cs === 'paper' && ps === 'rock'){
  console.log('You lose! Paper beats rock!');
  return 'lose';
} else if (cs === 'scissors' && ps === "rock"){
  console.log('You win! Rock beats scissors!');
  return 'win';
} else if (cs === 'rock' && ps === 'scissors'){
  console.log('You lose! Rock beats scissors!');
  return 'lose';
} else if (cs === 'paper' && ps === 'scissors'){
  console.log('You win! Scissors beat paper!');
  return 'win';
} else if (cs === 'scissors' && ps === 'paper'){
  console.log('You lose! Scissors beat paper!');
  return 'lose';
}else if (cs === ps){
  console.log('You tied! Try again!');
  return 'tie';
}
}

let comp = 0;
let player = 0;


function game(round){
  if (round === 'win'){
    player++;
  }else if (round === 'lose'){
    comp++;
  }else if (round === 'tie'){
    return;
  }
  console.log(`Computer Boy has ${comp} wins, you have ${player} wins.`);
  }


for (let i = 0; i < 5; i++){
  let playerSelection = playerChoice();
  let computerSelection = computerPlay();
  console.log(game(playRound(computerSelection, playerSelection)));
  if(comp === 3 || player === 3){
    break;
  }
}
