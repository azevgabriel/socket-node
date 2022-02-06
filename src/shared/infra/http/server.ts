import { server } from "./app";
import { serverUdp } from "./udp";

const port = process.env.PORT || 4001;
const portUdp = Number(process.env.PORT_UDP) || 4002;

server.listen(port, () => console.log(`Listening on port ${port}`));
serverUdp.bind(portUdp, () => console.log(`Listening on port ${portUdp}`));