const express = require('express');
const app = express();
const TPLSmartDevice = require('tplink-lightbulb');
const ips = require('./ips.js');

console.log(ips);
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });



app.listen(3000);
