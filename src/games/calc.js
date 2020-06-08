import game from '../index.js';
import giveRandomNum from '../randomNum.js';

export default () => {
  const description = 'What is the result of the expression?';
  const getGameData = () => {
    const operations = ['*', '+', '-'];
    const num1 = giveRandomNum(0, 100);
    const num2 = giveRandomNum(0, 100);
    const operation = operations[giveRandomNum(0, operations.length - 1)];
    const question = `${num1} ${operation} ${num2}`;

    const getAnswer = () => {
      switch (operation) {
        case '*':
          return num1 * num2;

        case '+':
          return num1 + num2;

        case '-':
          return num1 - num2;

        default:
          return null;
      }
    };
    return [question, String(getAnswer())];
  };

  game(description, getGameData);
};
