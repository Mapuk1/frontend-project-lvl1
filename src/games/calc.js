import game from '../index.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomIntInclusive = (min, max) => {
  const num1 = Math.ceil(min);
  const num2 = Math.floor(max);
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};
const getExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};
const getGameData = () => {
  const num1 = getRandomIntInclusive(0, 10);
  const num2 = getRandomIntInclusive(0, 10);
  const indexOperator = getRandomIntInclusive(0, 2);
  const operator = operators[indexOperator];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(getExpression(num1, num2, operator));
  return [question, answer];
};
const brainCalc = () => game(rule, getGameData);

export default brainCalc;
