/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

function gamePlay() {
  const player1 = Player('X')
  const player2 = Player('O')
  // turns
  // let a = 0;
  // const turns = ['X', 'O'];
  let turn = 'X';
  // players turns

  const board = document.getElementById('board');
  const cells = board.children;
  for (let i = 0; i < cells.length; i += 1) {
    const cell = cells[i];
    cell.addEventListener('click', () => {
      if (cell.innerText !== '') {
        return;
      }
      cell.innerText = turn;
      board.classList.toggle('player-2');
      board.classList.toggle('player-1');
      // a += 1;
      if (turn === 'X') {
        player1.moves.push(i);
        turn = 'O'
      } else {
        player2.moves.push(i);        
        turn = 'X'
      }

      if (game.isWinner(player1.moves)) {
        alert('Player 1 has won!');
        // break;
      }
      
      if (game.isWinner(player2.moves)) {
        alert('Player 2 has won!');
        // break;
      }

      if (game.isDraw(cells)) {
        alert('The game is draw');
        // break;
      }
    });
  }

  
}


