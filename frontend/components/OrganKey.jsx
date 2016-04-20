var React = require('react'),
    KeyActions = require('../actions/KeyAction'),
    KeyStore = require('../stores/KeyStore'),
    Note = require('../util/Note.js'),
    Tones = require('../constants/Tones.js');

var OrganKey = React.createClass({
  getInitialState: function (){
    this.note = new Note(Tones[this.props.keyNote]);
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
    if (keys.indexOf(this.props.keyNote) !== -1) {
      this.setState({playing: true});
    } else {
      this.setState({playing: false});
    }
  },

  componentDidMount: function () {
    KeyStore.addListener(this.handleNote);
  },

  componentWillUnmount: function () {
    KeyStore.removeListener(this.handleNote);
  },

  render: function () {
    var keyClass;
    if (this.state.playing) {
      console.log("starting note");
      this.startNote();
      keyClass = "pressed";
    } else {
      console.log("stopped note");
      this.stopNote();
      keyClass = "released";
    }

    return (
      <div className={keyClass}>
          {this.props.keyNote}
      </div>
    );
  }

});

module.exports = OrganKey;
