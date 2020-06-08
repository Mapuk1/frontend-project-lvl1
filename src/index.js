import readlineSync from 'readline-sync';

const numberOfQuestion = 3;

export default (description, gameData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(description);

  const game = () => {
    for (let i = 0; i < numberOfQuestion; i += 1) {
      const [question, correctAnswer] = gameData();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (correctAnswer !== userAnswer) {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
        return console.log(`Let's try again, ${userName}`);
      }
      console.log('Correct!');
    }
    return console.log(`Congratulations, ${userName}!`);
  };
  game();
};
