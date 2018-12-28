const express = require('express');
const app = express();
const ips = require('./ips.js');
const TPLight = require('./lights/tplink.js');

const LivingRoom = new TPLight(ips.livingRoom);

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });



app.listen(3000);
