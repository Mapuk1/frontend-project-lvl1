import game from '../index.js';
import randomNum from '../randomNum.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  const gameData = () => {
    const startNum = randomNum(0, 10);
    const interval = randomNum(1, 10);
    const arr = [];
    arr.push(startNum);
    const lengthOfProgression = 10;
    const hidden = randomNum(0, lengthOfProgression - 1);

    for (let i = 1; i < lengthOfProgression; i += 1) {
      arr.push(arr[i - 1] + interval);
    }
    const newArr = [...arr];
    const answer = newArr.splice(hidden, 1, '..');
    const str = newArr.toString().replace(/,/gi, ' ');
    const question = str;
    return [question, String(answer)];
  };
  game(rules, gameData);
};
