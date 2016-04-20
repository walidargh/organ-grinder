var React = require('react'),
    OrganKey = require('./OrganKey'),
    Tones = require('../constants/Tones');

var Organ = React.createClass({
  render: function () {

    var keys = Object.keys(Tones).map(function (tone, id) {
          return <OrganKey key={id} keyNote={tone} />;
        });

    return (
      <div>
        {keys}
      </div>
    );
  }
});

module.exports = Organ;
