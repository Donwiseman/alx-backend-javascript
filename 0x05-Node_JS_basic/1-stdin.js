// writes to stdout and receives input from stdin

process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const inp = process.stdin.read();
  console.log(`Your name is: ${inp}`);
  process.stdin.end();
});

process.on('close', () => {
  console.log('This important software is now closing');
});
