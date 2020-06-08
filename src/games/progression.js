import game from '../index.js';
import randomNum from '../randomNum.js';

export default () => {
  const description = 'What number is missing in the progression?';

  const getGameData = () => {
    const firstNum = randomNum(0, 10);
    const interval = randomNum(1, 10);
    const arr = [];
    const lengthOfProgression = 10;
    const hidden = randomNum(0, lengthOfProgression - 1);

    for (let i = 0; i < lengthOfProgression; i += 1) {
      arr.push(firstNum + interval * i);
    }
    const newArr = [...arr];
    const answer = newArr.splice(hidden, 1, '..');
    const str = newArr.toString().replace(/,/gi, ' ');
    const question = str;
    return [question, String(answer)];
  };
  game(description, getGameData);
};
