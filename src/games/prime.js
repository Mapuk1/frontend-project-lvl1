
import randomNum from '../randomNum.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let div = 2; div <= num / 2; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};
const getGameData = () => {
  const question = randomNum(-10, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [String(question), answer];
};
export default () => runGame(description, getGameData);
