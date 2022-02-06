import dgram from "dgram";

const serverUdp = dgram.createSocket('udp4');

serverUdp.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  serverUdp.close();
});

serverUdp.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

serverUdp.on('listening', () => {
  const address = serverUdp.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

export { serverUdp };