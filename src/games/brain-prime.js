
import randomNum from '../randomNum.js';
import game from '../index.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameData = () => {
    const question = randomNum(2, 1000);

    const answer = (num) => {
      for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    return [question, answer(question)];
  };
  game(rules, gameData);
};
