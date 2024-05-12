#!/usr/bin/env node
import readlineSync from 'readline-sync';

import greeting from './brain-games.js';

greeting();

const playGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = (Math.floor(Math.random() * 100) + 1);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = 'yes';
    const inCorrectAnswer = 'no';
    if (number % 2 === 0 && userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (number % 2 !== 0 && userAnswer === inCorrectAnswer) {
      console.log('Correct!');
    } else {
      const error = "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ";
      return console.log(error + userName);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
playGame();
