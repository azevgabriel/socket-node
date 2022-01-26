import { createConnection, getConnectionOptions } from 'typeorm';

getConnectionOptions().then(connectionOptions => {
  createConnection(connectionOptions);
});