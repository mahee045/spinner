process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write('\n'); // To add a newline at the end
}, delay);