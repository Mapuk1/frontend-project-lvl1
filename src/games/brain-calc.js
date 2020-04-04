import game from '../index.js';
import giveRandomNum from '../randomNum.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const gameData = () => {
    const operations = ['*', '+', '-'];
    const num1 = giveRandomNum();
    const num2 = giveRandomNum();
    const operation = operations[giveRandomNum(0, operations.length - 1)];
    const question = `${num1} ${operation} ${num2}`;
    const answer = () => {
      if (operation === '*') {
        return num1 * num2;
      } if (operation === '+') {
        return num1 + num2;
      }

      return num1 - num2;
    };

    return [question, answer()];
  };

  game(rules, gameData);
};
