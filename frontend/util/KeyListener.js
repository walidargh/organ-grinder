var KeyAction = require('../actions/KeyAction');
var Notes = require('../util/Note.js');
var Tones = require('../constants/Tones.js');
var mapping = {
  67: "c0",
  68: "d0",
  69: "e0",
  70: "f0",
  71: "g0",
  65: "a0",
  66: "b0",
};

var keyUp = $(document).keyup(function (e) {
//create an action --> dispatched to store --> remove key, and KeyStore.emitchange --> view play sound
  var key = mapping[e.keyCode];
  var freq = Tones[key];
  var note = new Notes(Tones[key]);
  console.log(freq);
  console.log(key);
  console.log(note);
  note.start();
  KeyAction.keyReleased(key);
});

var keyDown = $(document).keydown(function (e) {
  var key = mapping[e.keyCode];
  KeyAction.keyPressed(key);
});

module.exports = {keyDown: keyDown, keyUp: keyDown};
