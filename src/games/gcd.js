import game from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 !== 0) {
    return getGcd(num2 % num1, num1);
  }
  return num2;
};

const getRandomIntInclusive = (min, max) => {
  const num1 = Math.ceil(min);
  const num2 = Math.floor(max);
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
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
