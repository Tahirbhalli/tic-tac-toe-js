const game = require('../script/logic');

test('is winner', () => {
  expect(game.isWinner([1, 2, 3])).toBe(true);
});
test('not winner', () => {
  expect(game.isWinner([1, 4, 3])).toBe(false);
});
test('draw', () => {
  const cells = [];
  for (let index = 0; index < 9; index += 1) {
    const c = document.createElement('div');
    c.innerText = 'X';
    cells.push(c);
  }
  expect(game.isDraw(cells)).toBe(true);
});
