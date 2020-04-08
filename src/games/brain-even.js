import game from '../index.js';
import giveRandomNum from '../randomNum.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const gameData = () => {
    const question = giveRandomNum(0, 100);
    const answer = (question % 2 === 0) ? 'yes' : 'no';
    return [question, String(answer)];
  };
  game(rules, gameData);
};
