var React = require('react');
var PropTypes = React.PropTypes;
var User = require('./User');
var Stars = require('./Stars');
var ReviewTitle = require('./ReviewTitle');
var ReviewContent = require('./ReviewContent');
var ReadMore = require('./ReadMore');

var Review = React.createClass({
  render: function () {
    var isExpanded = this.props.isExpanded.includes(this.props.identificator);
    var showReadMore = false;
    if (this.props.reviewBody.length > 230 && !isExpanded) {
      showReadMore = true;
    }

    return (
      <div className="review-container">
        <Stars stars={this.props.starRating} />
        <ReviewTitle title={this.props.reviewTitle} />
        <User
          name={this.props.fullName}
          location={this.props.location} />
        <ReviewContent
          content={this.props.reviewBody}
          identificator={this.props.identificator}
          isExpanded={isExpanded} />
        <ReadMore
          showReadMore={showReadMore}
          identificator={this.props.identificator}
          expandReview={this.props.expandReview} />
      </div>
    )
  }
});

Review.propTypes = {
  reviewTitle: PropTypes.string.isRequired,
  starRating: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  reviewBody: PropTypes.string.isRequired,
  identificator: PropTypes.number.isRequired,
  isExpanded: PropTypes.array.isRequired
}

module.exports = Review;
