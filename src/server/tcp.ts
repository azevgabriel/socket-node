import net, {Socket} from 'net';

const handleConnection = (socket: Socket) => {
  console.log(`Connected Client`);
  socket.write('Hello Client');
  socket.addListener('data', (data: any) => {
    console.log(`Received data from client : ${data.toString()}`);
  });
  socket.end();
};

const server = net.createServer(handleConnection);

server.listen(5555, '0.0.0.0');