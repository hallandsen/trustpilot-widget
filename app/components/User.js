var React = require('react');
var PropTypes = React.PropTypes;


function User (props) {
  var location = props.location
  if (props.location.length > 0) {
    location = " - " + props.location
  } else {
   location = ""
  }
  return (
    <div className="user-container">
      {props.name}
      {location}
    </div>
  )
};

User.propTypes = {
  name: PropTypes.string.isRequired,
}

module.exports = User;