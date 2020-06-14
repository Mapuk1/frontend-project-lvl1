import runGame from '../index.js';
import giveRandomNum from '../randomNum.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameData = () => {
  const question = giveRandomNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, String(answer)];
};
export default () => runGame(description, getGameData);
