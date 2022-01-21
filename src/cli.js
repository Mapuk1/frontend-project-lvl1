import readLineSync from 'readline-sync';

const greetUser = () => {
  const welcome = 'Welcome to the Brain Games!';
  console.log(welcome);
  const question = 'May I have your name?';
  const userName = readLineSync.question(`${question} `);
  const greeting = `Hello, ${userName}`;
  console.log(greeting);
};
export default greetUser;
