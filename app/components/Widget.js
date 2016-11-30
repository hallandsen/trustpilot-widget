var React = require('react');
var Header = require('./Header');
var Reviews = require('./Reviews');
var SelectRating = require('./SelectRating')

var Widget = React.createClass({

  getInitialState: function () {
    return {
      reviewData: [],
      sortByRating: 'all',
      isExpanded: []
    }
  },
  //simulating api call
  componentDidMount: function () {
    this.setState({
      reviewData: reviewsArr
    })
  },

  sortReviews: function (event) {
    this.setState({
      sortByRating: event.target.value
    })
  },

  expandReview: function (review) {
    var isExpanded = this.state.isExpanded.slice();
    isExpanded.push(review)
    this.setState({
      isExpanded: isExpanded
    })
  },

  render: function () {
    return (
      <div id="widget">
        <Header reviewData={this.state.reviewData} />
        <SelectRating
          sortByRating={this.state.sortByRating}
          onChange={this.sortReviews}/>
        <Reviews
          reviewData={this.state.reviewData}
          sortValue={this.state.sortByRating}
          isExpanded={this.state.isExpanded}
          expandReview={this.expandReview} />
      </div>
    )
  }
});

module.exports = Widget;

//DATA:

var reviewsArr = [
  {
    "firstName":"Simon",
    "lastName":"Lock",
    "fullName":"Simon Lock",
    "location":"Kolding",
    "reviewTitle":"Super quality.. I will show here again!",
    "reviewBody":"Super nice quality, fast devilery, good prices. I will shop here again!",
    "starRating":"5"
  },
  {
    "firstName":"Gav",
    "lastName":"",
    "fullName":"Gav",
    "location":"",
    "reviewTitle":"Princely Sum",
    "reviewBody":"A decent local curry house in Faversham, Kent known for its Elvis nights.",
    "starRating":"4"
  },
  {
    "firstName":"Justin",
    "lastName":"Wright",
    "fullName":"Justin Wright",
    "location":"London, GB",
    "reviewTitle":"Good Services",
    "reviewBody":"A decent place to introduce your taste buds to fiery Indian fare",
    "starRating":"3"
  },
  {
    "firstName":"Erika",
    "lastName":"Wolfe",
    "fullName":"Erika Wolfe",
    "location":"Gothenburg, SE",
    "reviewTitle":"Nightmare experience - no product, no communication, no refund; improved by rapid resolution",
    "reviewBody":"In early 2012, I ordered a set of chairs from Infurn. I thought that by ordering in March, I would have what I needed by November, certainly. I wanted the perfect chairs for my house, and really did not NEED them before the annual Thanksgiving dinner (the only time of year I have a need for a whole lot of chairs at one time). I played it safe, I thought, by ordering so far in advance. Week after week, month after month, Infurn's website kept updating the status of the order so that the chairs' arrival would be further and further in the distant future. Finally when the week of Thanksgiving arrived, and I had had contact with their customer service in early November (and their only clueless reply was to say, 'We had manufacturing problems; let's hope the chairs arrive this week as scheduled.'), I still had no chairs, had to go out and buy some other chairs and still had no clue when the Infurn chairs might arrive. At some point I finally just requested a refund because Infurn could neither deliver my chairs nor give me a solid date about when I might receive them when I inquired about a delivery date. They finally offered me a refund - which I accepted on 14 December 2012.",
    "starRating":"2"
  },
  {
    "firstName":"Hugo",
    "lastName":"Beja",
    "fullName":"Hugo Beja",
    "location":"Praia Da Barra, PT",
    "reviewTitle":"FRAUD",
    "reviewBody":"I've been patiently waiting for a miracle to happen with our order AU-316084, 12 Chairs!! First the delays, lots and lots of delays with no apparent reason... after they send just 1/2 of the order and say it's all... So we bought 'Pairs' of chairs... we paid for 5 PAIRS and received 5 chairs!!! The other 2, the rocket chairs we never receive.... Communication ZERO, they simply ignore the e-mails... when they did respond they asked us to prove our order to be pairs!!! LOL and just stopped communicating... their website is constantly down... probably to make lose interest and rest your forces to recover what you paid for!!",
    "starRating":"1"
  },
];