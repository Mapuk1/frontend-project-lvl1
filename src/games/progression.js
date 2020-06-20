import runGame from '../index.js';
import randomNum from '../randomNum.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const makeProgression = (startNum, interval, length) => {
  const arr = [];
  for (let step = 0; step < length; step += 1) {
    arr.push(startNum + interval * step);
  }
  return arr;
};
const getGameData = () => {
  const firstNum = randomNum(0, 10);
  const interval = randomNum(1, 10);
  const progression = makeProgression(firstNum, interval, lengthOfProgression);
  const indexOfHiddenElement = randomNum(0, lengthOfProgression - 1);
  const answer = progression.splice(indexOfHiddenElement, 1, '..');
  const question = progression.join(' ');
  return [question, String(answer)];
};
export default () => runGame(description, getGameData);
