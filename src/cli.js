import readlineSync from 'readline-sync';

export default (greet) => {
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
}