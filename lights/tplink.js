const TPLSmartDevice = require('tplink-lightbulb');

class TPLight extends TPLSmartDevice {
  constructor(ip) {
    // call the TPLSmartDevice constructor
    super(ip);
  }

  _postCommand(commandStr) {
    this.send({
      'smartlife.iot.smartbulb.lightingservice': {
        'transition_light_state': {
          commandStr
        }
      }
    }).then(response => {
      console.log(response);
    }).catch(e => console.log(e));
  }


}
