var React = require('react');
var Review = require('./Review');

var Reviews = React.createClass({
  render: function () {
    var renderReviews = this.props.reviewData.map(function(review, i) {
      if (this.props.sortValue === 'all' || this.props.sortValue === review.starRating) {
        return (
            <Review
              fullName={review.fullName}
              location={review.location}
              starRating={review.starRating}
              reviewTitle={review.reviewTitle}
              reviewBody={review.reviewBody}
              identificator={i}
              isExpanded={this.props.isExpanded}
              expandReview={this.props.expandReview} />
        )
      }
    }.bind(this));

    return (
      <div className="reviews-container">
          {renderReviews}
      </div>
    )
  }
});

module.exports = Reviews;