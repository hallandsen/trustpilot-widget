var React = require('react');

function ReadMore (props) {
  //console.log(props.identificator, props.isExpanded)
  return (
    <div className={props.showReadMore? ' read-more' : ' hide'} onClick={props.expandReview.bind(null, props.identificator)}>
      Read more...
    </div>
  )
};

module.exports = ReadMore;