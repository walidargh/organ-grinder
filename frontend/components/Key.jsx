var React = require('react'),
    KeyActions = require('../actions/KeyAction'),
    KeyStore = require('../store/KeyStore'),
    Note = require('../util/Note.js'),
    Tones = require('../constants/Tones.js');

var Key = React.createClass({
  getInitialState: function (){
    return {playing: false};
  },
  startNote: function () {

    this.note.start();
  },

  stopNote: function () {
    this.note.stop();
  },

  handleNote: function () {
    var keys = KeyStore.allKeys();
    console.log('handling it');
    if (keys.indexOf(this.props.keyNote !== -1)) {
      this.setState({playing: true});
    } else {
      this.setState({playing: false});
    }
  },

  componentDidMount: function () {
    console.log('mounted it');
    this.note = new Note(Tones[this.props.keyNote]);
    KeyStore.addListener(this.handleNote);
  },

  render: function () {

    if (this.playing) {
      console.log('playing it');
      this.startNote();
    } else {
      this.stopNote();
    }

    return (
      <div>

      </div>
    );
  }

});
