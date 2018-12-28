const express = require('express');
const app = express();
const TPLSmartDevice = require('tplink-lightbulb');


const scan = TPLSmartDevice.scan()
  .on('light', light => {
    light.power(false)
      .then(status => {
        console.log(status)
        scan.stop()
      })
  })
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });



app.listen(3000);
