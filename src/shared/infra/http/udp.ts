import dgram from "dgram";
import { AddThemeToNoteController } from '../../../modules/notes/useCases/addThemeToNote/AddThemeToNoteController';

const serverUdp = dgram.createSocket('udp4');
const addThemeToNoteController = new AddThemeToNoteController();

serverUdp.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  serverUdp.close();
});

serverUdp.on('message', async (msg, rinfo) => {
  const data = msg.toString();
  const [command, nameTheme] = data.split(' ');
  if(command === 'addTheme'){
    await addThemeToNoteController.handle(nameTheme);
    serverUdp.send('Theme added', 0, 'Theme added'.length, rinfo.port, rinfo.address);
  }
});

serverUdp.on('listening', () => {});

export { serverUdp };