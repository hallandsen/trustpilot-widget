var React = require('react');
var PropTypes = React.PropTypes;


function Stars (props) {
  return (
    <div className="stars-container">
      <img src={'../../img/' + props.stars + '.png'} className="stars"/>
    </div>
  )
};

Stars.propTypes = {
  stars: PropTypes.string.isRequired,
}

module.exports = Stars;