// file for testing methods

const ips = require('./ips.js');
const TPLight = require('./lights/tplink.js');

const livingroom = new TPLight(ips.livingRoom);
livingroom.turnOn();
//livingroom.toHSB(150, 100, 50, 2000);
livingroom.toHex('#64a857')
