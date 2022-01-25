import udp from 'dgram';

var client = udp.createSocket('udp4');
var data1 = Buffer.from('Hello World!');
var data2 = Buffer.from(' By: Gabriel');

client.send(
  [data1,data2],
  4000,
  '127.0.0.1',
  function(error: any) {
    if(error){
      client.close();
    }else{
      console.log('Send success.');
    }
  }
);