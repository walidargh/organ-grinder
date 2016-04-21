var dispatcher = require('../dispatcher/Dispatcher.js'),
    Store = require('flux/utils').Store;

var _keys = [];


var KeyStore = new Store(dispatcher);

KeyStore.allKeys = function () {
  return _keys.slice();
};

var addKey = function (key) {
  if (_keys.indexOf(key) === -1){
    _keys.push(key);
    KeyStore.__emitChange();
  }
};

var removeKey = function (key) {
  _keys = _keys.filter(function (k) {
    return k !== key;
  });
  KeyStore.__emitChange();
};

var addKeys = function (keys) {
  keys.forEach(function (key) {
    addKey(key);
  });
};

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case 'KEY_PRESSED':
    addKey(payload.key);
    break;

    case 'KEY_RELEASED':
    removeKey(payload.key);
    break;

    case 'KEYS_PRESSED':
    addKeys(payload.key);
    break;
  }
};

module.exports = KeyStore;
