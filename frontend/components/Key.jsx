var React = require('react'),
    KeyActions = require('../actions/KeyAction'),
    KeyStore = require('../store/KeyStore'),
    Note = require('../util/Note.js');

var Key = React.createClass({
  getInitialState: function(){
    return {keys: []};
  },

  startNote: function () {

  },

  endNote: function () {

  },

  componentDidMount: function () {
    KeyStore.addListener(startNote);
  }
});
