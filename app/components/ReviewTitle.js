var React = require('react');
var PropTypes = React.PropTypes;


function ReviewTitle (props) {
  return (
    <div className="review-title">
      {props.title}
    </div>
  )
};

ReviewTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

module.exports = ReviewTitle;