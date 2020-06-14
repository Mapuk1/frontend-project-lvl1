import runGame from '../index.js';
import randomNum from '../randomNum.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const runProgression = (num, interval, step) => num + interval * step;

export default () => {
  const getGameData = () => {
    const firstNum = randomNum(0, 10);
    const interval = randomNum(1, 10);
    const arr = [];
    const hidden = randomNum(0, lengthOfProgression - 1);

    for (let step = 0; step < lengthOfProgression; step += 1) {
      arr.push(runProgression(firstNum, interval, step));
    }
    const newArr = [...arr];
    const answer = newArr.splice(hidden, 1, '..');
    const str = newArr.toString().replace(/,/gi, ' ');
    const question = str;
    return [question, String(answer)];
  };
  runGame(description, getGameData);
};
