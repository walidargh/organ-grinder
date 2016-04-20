var dispatcher = require('../dispatcher/Dispatcher.js'),
    Store = require('flux/utils').Store;

var _keys = [];


var KeyStore = new Store(dispatcher);

var addKey = function (key) {
  _keys.push(key);
  KeyStore.__emitChange();
};

var removeKey = function (key) {
  _keys = _keys.filter(function (k) {
    return k !== key;
  });
  KeyStore.__emitChange();
};

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    
    case 'KEY_PRESSED':
    KeyStore.addKey(payload.key);
    break;

    case 'KEY_RELEASED':
    KeyStore.removeKey(payload.key);
    break;
  }
};
