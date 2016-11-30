var React = require('react');
var ReactDOM = require('react-dom');
var Widget = require('./components/Widget');
require('./components/Widget.scss');

var App = React.createClass({

  render: function () {
    return (
      <div id="widget-container">
        <Widget />
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);