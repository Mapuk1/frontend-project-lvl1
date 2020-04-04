
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  console.log(rules);

  // eslint-disable-next-line max-len
  const getRandomIntInclusive = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
  // Цикл вопросов до 3-х включительно.
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomIntInclusive();
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${userName}`);
      break;
    } else {
      console.log('Correct!');
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
