var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./config/routes');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div> words </div>
    )
  }
});

ReactDOM.render(
  Routes, document.getElementById('app')
);
