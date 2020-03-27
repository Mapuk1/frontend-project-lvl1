import readlineSync from 'readline-sync';

export default (rules, gameData) => {
	console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const numberOfQuestion = 3;

  const game = (i = 0) => {
		if (i === numberOfQuestion) {
     return console.log(`Congratulations, ${userName}!`);
    }
		const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
 
    if (String(correctAnswer) !== userAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${userName}`);
    } else {
        console.log('Correct!');
		}  
    return game(i += 1);
	};

game();				
};
