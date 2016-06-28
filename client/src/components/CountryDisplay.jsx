var React = require('react');

var CountryDisplay = React.createClass({

  handleChange: function(e) {
    e.preventDefault();
    var countryCode = e.target.value;
    this.props.setSubCountry(countryCode);
  },

  render: function(){
    var borderingArray = this.props.selected.borders.map(function(country, index){
      return(
        <option value={this.props.selected.borders[index]} key={this.props.selected.borders[index]}>{this.props.selected.borders[index]}</option>
      )
    }.bind(this));

    return(
      <div>
        <h5>You have selected:</h5>
        <h4>{this.props.selected.nativeName}</h4>
        <h5>Capital: {this.props.selected.capital}</h5>
        <h5>Population: {this.props.selected.population.toLocaleString()}</h5>
        <h5>Bordered by:</h5>
          <select onChange={this.handleChange}>
            {borderingArray}
          </select>
      </div>
    )
  }

});

module.exports = CountryDisplay;