import udp from 'dgram';
import { createInterface } from 'readline';

var client = udp.createSocket('udp4');

// create readline interface
var rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Enter your message: ');
console.log('Type "exit" to exit or "help" to see the list of commands\n');

rl.addListener('line', function (line) {
  if (line === 'exit') {
    rl.close();
  } else if (line === 'help') {
    console.log('Available commands:');
    console.log('exit - to exit');
    console.log('help - to see the list of commands');
    console.log('addTheme "example" - to add a new theme\n');
  }
  client.send(line, 0, line.length, 4002, 'localhost', function (err, bytes) {
    if (err) throw err;
  });
});