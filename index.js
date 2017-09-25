var prompt = require('prompt');

class TixTacToe {
  constructor(playerOne, playerTwo) {
    this.board = [['-','-','-'],
                  ['-','-','-'],
                  ['-','-','-']
                ];
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.turn = 0;

  }
  showBoard () {
    console.log(this.board[0].join('|'));
    console.log(this.board[1].join('|'));
    console.log(this.board[2].join('|'));
  }
  validMove(row, col) {
    return this.board[row][col] === '-' ? true : false;
  }
  gameOver(){
    return this.turn === 8;
  }
  move(row, col){
    let player = this.turn % 2 === 0 ? 'X' : 'O';
    if(validMove(row, col)){
      this.board[row][col] = player;
    }
    this.turn += 1;
  }
  currentPlayer(){
    return this.turn % 2 === 0 ? this.playerOne : this.playerTwo;
  }
}


prompt.start();

prompt.get(['playerOne','playerTwo'], (err, results) => {
  var ticTax = new TixTacToe(results.playerOne, results.playerTwo);
  ticTax.showBoard();
  console.log(ticTax.gameOver());
  while(!ticTax.gameOver()){
    console.log(`${TixTacToe.currentPlayer} its your turn please make a move`);
    prompt.get(['row','col'],
      (err, results) => {
        console.log(results.row, results.col);
      })
  }
});
