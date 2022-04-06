
function computerPlay(){
  const computerChoice = ['Rock', 'Paper', 'Scissors'];
  const i = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[i];
}

alert(computerPlay());
