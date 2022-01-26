import readLineSync from 'readline-sync';

const welcome = 'Welcome to the Brain Games!';
const nameQuestion = 'May I have your name?';

const game = (rule, gameData, steps = 3) => {
  console.log(welcome);

  const userName = readLineSync.question(`${nameQuestion} `);
  const greeting = `Hello, ${userName}`;
  console.log(greeting);
  console.log(rule);

  for (let step = 1; step <= steps; step += 1) {
    const [question, correctAnswer] = gameData();

    console.log(`Question: ${question}`);

    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      const wrong = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`;
      return console.log(wrong);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default game;
