//Rock Paper Scissors
/*Let's play! You have to return which player won! In case of a draw return Draw!.*/
/*
    const rps = (p1, p2) => {
        if ((p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 ==='scissors') || (p1 ==='scissors' && p2 === 'paper')){
            return 'Player 1 won!'
        } else if ((p2 === 'paper' && p1 === 'rock') || (p2 === 'rock' && p1 ==='scissors') || (p2 ==='scissors' && p1 === 'paper')){
          return 'Player 2 won!'
        } else {
          return 'Draw!'
        }
        };
  
*/
//above is my  solution
  
//this is how it should be done
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};