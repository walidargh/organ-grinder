var dispatcher = require('../dispatcher/Dispatcher');

var KeyAction = {
  keyPressed: function(key){
    console.log("Key is Pressed");
    dispatcher.dispatch({
      actionType: "KEY_PRESSED",
      key: key
    });
  },

  keyReleased: function(key){
    console.log("key is released");
    dispatcher.dispatch({
      actionType: "KEY_RELEASED",
      key: key
    });
  }
};

module.exports = KeyAction;
