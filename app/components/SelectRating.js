var React = require('react');
var PropTypes = React.PropTypes;

function SelectRating (props) {
  return (
    <div className="select-container">

      <select value={props.sortByRating} onChange={props.onChange}>
        <option value="all">Show all reviews</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
  )
}

SelectRating.propTypes = {
  sortByRating: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

module.exports = SelectRating;