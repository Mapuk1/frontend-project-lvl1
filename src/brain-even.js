import readLineSync from 'readline-sync';

const getRandomIntInclusive = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};
const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const welcome = 'Welcome to the Brain Games!';
  console.log(welcome);
  const question = 'May I have your name?';
  const userName = readLineSync.question(`${question} `);
  const greeting = `Hello, ${userName}`;
  console.log(greeting);
  console.log(rule);

  for (let step = 1; step <= 3; step += 1) {
    const randomNumber = getRandomIntInclusive(1, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      const wrong = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}`;
      return console.log(wrong);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}`);
};
export default brainEven;
