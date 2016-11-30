var React = require('react');
var PropTypes = React.PropTypes;
var Stars = require('./Stars');


function Header (props) {

  var sum = 0;
  var acumulator = props.reviewData.map(function(review, i) {
    sum += parseInt(review.starRating)
  });
  var avg = sum/props.reviewData.length;
  var reviewCount = props.reviewData.length;

  return (
    <div className="header">
      <img src="../../img/trustpilot.jpeg" />
      <Stars stars={JSON.stringify(Math.round(avg))} />
      <div className="review-score">Average score: {avg} | {reviewCount} reviews</div>
    </div>
  )
};

Header.propTypes = {

}

module.exports = Header;