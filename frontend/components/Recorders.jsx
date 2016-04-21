var React = require('react'),
    KeyStore = require('../stores/KeyStore'),
    Track = require('../utils/Track');

var Recorder = React.createClass({
  getInitialState: function (){
    return {isRecording: false, track: new Track()};
  },

  updateTrack: function () {
    var notes = KeyStore.allKeys();
    var newTrack = this.state.track.addNote();
    this.setState({track: newTrack});
  },

  componentDidMount: function () {
    KeyStore.addListener(this.updateTrack);
  },

  render: function () {
    return (
      <input type="button" value="Play"/>
    );
  }
});
