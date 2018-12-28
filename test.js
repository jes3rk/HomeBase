// file for testing methods

const ips = require('./ips.js');
const TPLight = require('./lights/tplink.js');

const livingroom = new TPLight(ips.livingRoom);
livingroom.turnOn();
