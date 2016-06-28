var React = require('react');

var BorderDisplay = React.createClass({

  render: function(){
    console.log(this.props.selected);
    return(
      <div>
        <h4>{this.props.selected.nativeName}</h4>
        <h5>Capital: {this.props.selected.capital}</h5>
        <h5>Population: {this.props.selected.population.toLocaleString()}</h5>
      </div>
    )
  }

});

module.exports = BorderDisplay;