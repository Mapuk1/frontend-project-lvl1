import game from '../index.js';

const getRandomIntInclusive = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};
const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = getRandomIntInclusive(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const brainEven = () => game(rule, getGameData);

export default brainEven;
