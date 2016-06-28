var React = require('react');

var CountryDisplay = React.createClass({
  render: function(){
    var borderingArray = this.props.selected.borders.map(function(country, index){
      if(this.props.selected.borders){
        return(
          <li>
            {this.props.selected.borders[index]}
          </li>
        )
      } else {
        return <h5>It's an island, ya tumshie.</h5>
      }
    }.bind(this));
    return(
      <div>
        <h5>You have selected:</h5>
        <h4>{this.props.selected.nativeName}</h4>
        <h5>Capital: {this.props.selected.capital}</h5>
        <h5>Population: {this.props.selected.population}</h5>
        <h5>Bordered by:</h5>
          <ul>
            {borderingArray}
          </ul>
      </div>
    )
  }

});

module.exports = CountryDisplay;