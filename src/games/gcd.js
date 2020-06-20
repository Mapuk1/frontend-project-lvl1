import runGame from '../index.js';
import randomNum from '../randomNum.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num, divisor) => {
  if (num % divisor === 0) {
    return divisor;
  }
  return getGCD(divisor, num % divisor);
};
const getGameData = () => {
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [question, String(answer)];
};
export default () => runGame(description, getGameData);
