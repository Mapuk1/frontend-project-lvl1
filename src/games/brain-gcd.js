import game from '../index.js';
import randomNum from '../randomNum.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const gameData = () => {
    const num1 = randomNum(1, 100);
    const num2 = randomNum(1, 100);

    const gcd = (num, divisor) => {
      if (num % divisor === 0) {
        return divisor;
      }
      return gcd(divisor, num % divisor);
    };
    const question = `${num1} ${num2}`;
    const answer = gcd(num1, num2);
    return [question, String(answer)];
  };
  game(rules, gameData);
};
