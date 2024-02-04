// writes to stdout and receives input from stdin

process.stdin.setEncoding('utf-8');
console.log("Welcome to Holberton School, what is your name?");
process.stdin.on("readable", () => {
  const inp = process.stdin.read();
  console.log(`Your name is: ${inp}`);
});

process.on("close", (code) => {
    console.log('This important software is now closing');
});
