// var React = require('react');

// var RegionSelector = React.createClass({
//   getInitialState: function(){
//     return {selectedIndex: null}
//   },

//   handleChange: function(e){
//     e.preventDefault();
//     var newIndex = e.target.value;
//     this.setState({selectedIndex: newIndex});
//     var selectedRegion = this.props.regions[newIndex];
//     this.props.onSelectRegion(selectedRegion);
//   },

//   render: function(){
//     var options = this.props.regions.map(function(region, index){
//       return <option value={index}>{region}</option>
//     });

//     return (
//       <select value={this.state.selectedIndex} onChange={this.handleChange}>
//         {options}
//       </select>
//     )
//   }
// });

// module.exports = RegionSelector;