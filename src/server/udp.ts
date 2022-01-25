
import udp from 'dgram';
import { AddressInfo } from 'net';

var server = udp.createSocket('udp4');

server.on('listening', () => {
  var address = server.address();
  console.log('Server ' + address.family + ": " + address.address + ' is listening at port ' + address.port);
});

server.on('message', (msg: Buffer, info: AddressInfo) => {
  console.log('Message received: ' + msg.toString());
  console.log(`Received ${msg.length} bytes from ${info.address}:${info.port}`);
});

server.bind(4000);