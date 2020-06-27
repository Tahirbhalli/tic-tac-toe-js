/* eslint-disable no-unused-vars */

const game = (() => {
  const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

  const isWinner = (moves) => {
    for (const comb of winCombinations) {
      const intersection = moves.filter(value => comb.includes(value)).sort();

      if (JSON.stringify(intersection) === JSON.stringify(comb)) {
        return true;
      }
    }

    return false;
  };

  return {
    isWinner
  };
})();
