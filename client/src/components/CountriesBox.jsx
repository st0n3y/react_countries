var React = require('react');
var CountrySelector = require('./CountrySelector.jsx');
var CountryDisplay = require('./CountryDisplay.jsx');
var BorderDisplay = require('./BorderDisplay.jsx');
// var RegionSelector = require('./RegionSelector.jsx');
var _ = require('lodash');

var CountriesBox = React.createClass({
  getInitialState: function(){
    return {
      // regions: [], 
      countries: [], 
      displayCountry: null,
      displayBorder: null
    }
  },

  setDisplayCountry: function(country){
    this.setState({displayCountry: country})
  },

  setSelectedSubCountry: function(countryCode){
    var subCountry = (this.state.countries.filter(function(country){
      return country.alpha3Code === countryCode
    }))[0];
    this.setState({displayBorder: subCountry})
  },

  componentDidMount: function(){
    console.log("CDM was called");
    var url = "https://restcountries.eu/rest/v1/all"
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({countries: data})
      // var regionArray = data.map(function(country){
      //   return country.region
      // });
      // var uniqueRegionArray = _.uniq(regionArray);
      // this.setState({regions: uniqueRegionArray});
    }.bind(this);
    request.send();
  },

  render: function(){
    var displayElement = <h4>No country selected</h4>
    if(this.state.displayCountry){
      displayElement = <CountryDisplay setSubCountry={this.setSelectedSubCountry} selected={this.state.displayCountry}/>
    }
    var displayElement2 = <h4></h4>
    if(this.state.displayBorder){
      displayElement2 = <BorderDisplay selected={this.state.displayBorder}/>
    }
    return (
      <div>
        <h4 id="page-title">Countryphile</h4>
       
        <CountrySelector 
          countries={this.state.countries} 
          onSelectCountry={this.setDisplayCountry}
        />
        {displayElement}
        {displayElement2}
      </div>
    )
  }
});

module.exports = CountriesBox;