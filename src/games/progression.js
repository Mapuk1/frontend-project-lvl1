import getRandomIntInclusive from '../math.js';
import game from '../index.js';

const rule = 'What number is missing in the progression?';

const getGameData = () => {
  const progression = getRandomIntInclusive(5, 10);
  const startValue = getRandomIntInclusive(0, 20);
  const line = [];
  const increaseCurrent = getRandomIntInclusive(2, 5);

  for (let i = 0; i < progression; i += 1) {
    const result = startValue + (increaseCurrent * i);
    line.push(result);
  }

  const hiddenValueIndex = getRandomIntInclusive(0, line.length - 1);
  const answer = String(line[hiddenValueIndex]);
  line[hiddenValueIndex] = '..';

  const question = line.join(' ');
  return [question, answer];
};
const brainProgression = () => game(rule, getGameData);

export default brainProgression;
