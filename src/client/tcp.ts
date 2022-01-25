import net from 'net';
import readline from 'readline';

const client = new net.Socket();
client.connect(5555, '0.0.0.0', () => {
  console.log('Connected');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('line', (line: string) => {
    client.write(line);
  });
});


  

