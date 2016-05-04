var React = require('react');
var Styles = require('../styles/index');

var Home = React.createClass({
  render: function () {
    return (
      <div style={Styles.homeBg}>
      <h1 stle={Styles.homeHeader}> Enter a city and state </h1>
      </div>
    )
  }
});

module.exports = Home;
