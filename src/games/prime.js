import getRandomIntInclusive from '../math.js';
import game from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const num = getRandomIntInclusive(0, 100);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};
const brainProgression = () => game(rule, getGameData);

export default brainProgression;
