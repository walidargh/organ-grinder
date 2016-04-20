Note = require('./util/Note');
KeyAction = require('./actions/KeyAction');
KeyListener = require('./util/KeyListener');
ReactDOM = require('react-dom');
React = require('react');
Organ = require('./components/Organ');

$(document).ready( function () {
  ReactDOM.render(
    <Organ />, document.getElementById("content")
  );}
);
