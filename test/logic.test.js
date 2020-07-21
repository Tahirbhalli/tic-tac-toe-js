const game = require('../script/logic');

test('is winner', () => {
  expect(game.isWinner([1, 2, 3])).toBe(true);
});
test('not winner', () => {
  expect(game.isWinner([1, 4, 3])).toBe(false);
});
