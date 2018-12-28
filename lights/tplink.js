const TPLSmartDevice = require('tplink-lightbulb');

class TPLight extends TPLSmartDevice {
  constructor(ip) {
    // call the TPLSmartDevice constructor
    super(ip);
    this.state = {};
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

  turnOn() {
    this._postCommand({
      'on_off': 1,
      'transition_period': 0
    });
    this.state.on_off = 1
  }

}

module.exports = TPLight;
