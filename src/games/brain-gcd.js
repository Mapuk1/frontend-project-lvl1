import game from '../index.js'
import randomNum from '../randomNum.js'

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const gameData = () => {
    const num1 = randomNum();
    const num2 = randomNum();
  
    const gcd = (num, divisor) => {
      if (num % divisor === 0) {
        return divisor;
      }
      return gcd(divisor, num % divisor);
    }
    const question = `${num1} ${num2}`;
    const answer = gcd(num1, num2);
    return [question, answer];
  };
  game(rules, gameData);
};
