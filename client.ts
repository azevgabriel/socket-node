import net from 'net';
import readline from 'readline';

const client = new net.Socket();
client.connect(4000, '127.0.0.1', () => {
  console.log('Connected');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('line', (line: string) => {
    client.write(line);
  });
});
  

