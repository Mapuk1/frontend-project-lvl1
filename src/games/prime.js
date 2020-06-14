
import randomNum from '../randomNum.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkNumber = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const getGameData = () => {
    const question = randomNum(2, 1000);
    const answer = checkNumber(question) ? 'yes' : 'no';
    return [question, String(answer)];
  };
  runGame(description, getGameData);
};
