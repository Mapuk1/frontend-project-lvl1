import runGame from '../index.js';
import giveRandomNum from '../randomNum.js';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`Unknown order state': '${operation}'!`);
  }
};
const description = 'What is the result of the expression?';
const operations = ['*', '+', '-'];

const getGameData = () => {
  const num1 = giveRandomNum(0, 100);
  const num2 = giveRandomNum(0, 100);
  const operation = operations[giveRandomNum(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const answer = calculate(num1, num2, operation);
  return [question, String(answer)];
};

export default () => runGame(description, getGameData);
