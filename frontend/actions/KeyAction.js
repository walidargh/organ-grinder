var dispatcher = require('../dispatcher/Dispatcher');

var KeyAction = {
  keyPressed: function(key){
    dispatcher.dispatch({
      actionType: "KEY_PRESSED",
      key: key
    });
  },

  keysPressed: function(keys){
    dispatcher.dispatch({
      actionType: "KEYS_PRESSED",
      key: keys
    });
  },

  keyReleased: function(key){
    dispatcher.dispatch({
      actionType: "KEY_RELEASED",
      key: key
    });
  }
};

module.exports = KeyAction;
