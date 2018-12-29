const TPLSmartDevice = require('tplink-lightbulb');
const hexToHsl = require('hex-to-hsl');

class TPLight extends TPLSmartDevice {
  constructor(ip) {
    // call the TPLSmartDevice constructor
    super(ip);
    this.state = {
      on_off: null,
      color: {
        hue: null,
        sat: null,
        temp: null,
        brightness: null
      }
    };
    this.info().then(info => {
      this.state = {
        on_off: info.light_state.on_off,
        color: {
          hue: info.light_state.hue,
          sat: info.light_state.saturation,
          temp: info.light_state.color_temp,
          brightness: info.light_state.brightness
        }
      }
    }).catch(e => {
      console.log(e);
    });
  }

  _postCommand(commandObj) {
    this.send({
      'smartlife.iot.smartbulb.lightingservice': {
        'transition_light_state': commandObj
      }
    }).then(response => {
      console.log(response);
    }).catch(e => console.log(e));
  }

  turnOn(trans = 0) {
    this._postCommand({
      'on_off': 1,
      'transition_period': trans
    });
    this.state.on_off = 1
  }

  toHSB(hue, sat, bright, trans = 0) {
    this._postCommand({
      'hue': hue,
      'saturation': sat,
      'brightness': bright,
      'transition_period': trans
    })
    this.state.color.hue = hue;
    this.state.color.sat = sat;
    this.state.color.brightness = bright
  }

  toHex(hexStr, trans = 0) {
    const hslArr = hexToHsl(hexStr);
    this.toHSB(hslArr[0], hslArr[1], hslArr[2], trans);
  }

  toRandomColor(trans = 0) {
    const hue = this._randomNum(0, 255);
    const sat = this._randomNum(0, 100);
    const brightness = this._randomNum(0, 100);

    this.toHSB(hue, sat, brightness, trans);
  }

  _randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

}

module.exports = TPLight;
