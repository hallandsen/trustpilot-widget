var React = require('react');
var PropTypes = React.PropTypes;


var ReviewContent = React.createClass({
  render: function () {
    var shortedContent = this.props.content.substring(0, 230);
    var renderContent;

    if (this.props.isExpanded || this.props.content.length > 230) {
      renderContent = this.props.content
    } else if(this.props.content.length < 230) {
      renderContent = this.props.content.substring(0, 230)
    }

    return (
    <div className={'review-content' + (this.props.isExpanded? ' review-content-expand' : ' collapsed')} >
      {renderContent}
    </div>
    )
  }
});

ReviewContent.propTypes = {
  content: PropTypes.string.isRequired,
}

module.exports = ReviewContent;