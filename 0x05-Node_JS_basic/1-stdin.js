// writes to stdout and receives input from stdin

process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
