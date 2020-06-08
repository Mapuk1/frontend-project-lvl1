import game from '../index.js';
import giveRandomNum from '../randomNum.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  const getGameData = () => {
    const question = giveRandomNum(0, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, String(answer)];
  };
  game(description, getGameData);
};
