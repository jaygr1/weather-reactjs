var React = require('react');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
      <h1>Hello Jay </h1>
      {this.props.children}
      </div>
    )
  }
});

module.exports = HelloWorld;
