import game from '../index.js';
import giveRandomNum from '../randomNum.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const gameData = () => {
    const operations = ['*', '+', '-'];
    const num1 = giveRandomNum(0, 100);
    const num2 = giveRandomNum(0, 100);
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

    return [question, String(answer())];
  };

  game(rules, gameData);
};
