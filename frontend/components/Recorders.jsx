var React = require('react'),
    KeyStore = require('../stores/KeyStore'),
    Track = require('../utils/Track');

var Recorder = React.createClass({
  getInitialState: function (){
    return {isRecording: false, track: new Track()};
  },

  updateTracks: function () {
    var notes = KeyStore.allKeys();
    var newTracks = this.state.track.addNote();
    this.setState({track: newTracks});
  },

  componentDidMount: function () {
    KeyStore.addListener(this.handler);
  },

  render: function () {

  }
});
