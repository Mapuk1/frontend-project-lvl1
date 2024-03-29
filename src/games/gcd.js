import game from '../index.js';
import getRandomIntInclusive from '../math.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 !== 0) {
    return getGcd(num2 % num1, num1);
  }
  return num2;
};

const getGameData = () => {
  const num1 = getRandomIntInclusive(1, 100);
  const num2 = getRandomIntInclusive(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};

const gcd = () => game(rule, getGameData);

export default gcd;
