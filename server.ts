import net, {Socket} from 'net';

const handleConnection = (socket: Socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (data: Buffer) => {
    console.log(data);
  });
  socket.write('Hello, client!\n');
  socket.end();
};

const server = net.createServer(handleConnection);

server.listen(4000, '127.0.0.1');