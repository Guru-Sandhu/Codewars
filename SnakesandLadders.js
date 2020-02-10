// function SnakesLadders() {
//   this._playerSquare = [];
//   this._playerSquare[0] = 0;
//   this._playerSquare[1] = 0;
//   this._player = 0;
//   this._won = false;
//   this._trap = [[2,38],[7,14],[8,31],[15,26],[21,42],[28,84],[36,44],[51,67],[71,91],[78,98],[87,94],
// [16,6],[46,25],[49,11],[62,19],[64,60],[74,53],[89,68],[92,88],[95,75],[99,80]];
// };
  
// SnakesLadders.prototype.play = function(die1, die2) {
//   if (this._won){return "Game over!"};
//   roll = die1 + die2;
//   if (roll + this._playerSquare[this._player] <= 100){
//     this._playerSquare[this._player] += roll;
//     if (this._playerSquare[this._player] === 100){this._won = true; return "Player " + parseInt(this._player+1) + " Wins!"};
//   } else {
//     this._playerSquare[this._player] = 100 - ((this._playerSquare[this._player] + roll) - 100);
//   }
//   for (t = 0; t < this._trap.length; t++) {
//     if (this._playerSquare[this._player] === this._trap[t][0]){this._playerSquare[this._player] = this._trap[t][1]};
//   }
//   message = "Player " + parseInt(this._player+1) + " is on square " + parseInt(this._playerSquare[this._player]);
//   if (die1!=die2) {if (this._player===0){this._player=1}else{this._player=0}};
//   return message;
// } 




class SnakesLadders {
  constructor() {
    this.turn = 1;
    this.player1 = 0;
    this.player2 = 0;
    this.snakes = [
      [99, 80], 
      [95,75], 
      [92,88], 
      [89,68], 
      [74,53], 
      [64,60], 
      [62,19], 
      [49,11], 
      [46,25], 
      [16,6]
    ];
    this.ladders = [
      [2,38], 
      [7,14], 
      [8,31], 
      [15,26], 
      [21,42], 
      [28,84], 
      [36,44],
      [51,67],
      [71,91],
      [78,98],
      [87,94]
    ];
  }
  play(die1, die2) {
    if (this.player1 === 100 || this.player2 === 100) {
      return "Game over!";
    }
    // die1, die2 number between 1 - 6;
    const sum = die1 + die2;
    let newTurn = this.turn === 1 ? 0 : 1; // change turns
    if (die1 === die2) { // do not change turn if die values are the same
      newTurn = newTurn === 1 ? 0 : 1;
    } 
    if (this.turn) {
      this.calculateValue(sum, "player1");
      if (this.player1 === 100) {
        return "Player 1 Wins!";
      }
      // check if player landed on ladder
      this.checkForLadder("player1");
      // check if player landed on snake
      this.checkForSnakes("player1");
      this.turn = newTurn;
      return `Player 1 is on square ${this.player1}`;
    } else {
      this.calculateValue(sum, "player2");
      if (this.player2 === 100) {
        return "Player 2 Wins!";
      }
      this.checkForLadder("player2");
      this.checkForSnakes("player2");
      this.turn = newTurn;
      return `Player 2 is on square ${this.player2}`;
    }
  }

  // player is a string of the player's key -> "player1", "player2"
  checkForLadder(player) {
    this.ladders.forEach(ladder => {
      if (this[player] === ladder[0]) {
        this[player] = ladder[1];
      }
    })
  }

  checkForSnakes(player) {
    this.snakes.forEach(snake => {
      if (this[player] === snake[0]) {
        this[player] = snake[1];
      }
    })
  }

  // sum = sum of 2 die
  // key = "player1" || "player2"
  calculateValue(diceValue, key) {
    const player = this[key];
    let sum = player + diceValue;
    if (sum > 100) {
      sum = 200 - sum; // Math to get bounced back number ex. sum of 6, player on 99, player goes to 95
    }
    this[key] = sum;
    return this[key];
  }
}

let game = new SnakesLadders();
console.log(game.play(1, 5))