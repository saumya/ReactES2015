// Application Entry
var React = require('react');
var ReactDOM = require('react-dom');
var CompOne = require('./components/CompOne.react');
//var CompTwo = require('./components/CompTwo.react'); // legacy export : module.exports = CompTwo;
import CompTwo from './components/CompTwo.react'; // ES 2015 export : export default CompTwo;

// Render the Application
ReactDOM.render(
  <div>
  	<h3>React, Babel, ES 2015, Webpack!</h3>
  	<CompOne />
  	<CompTwo name="ES 2015" />
  </div>,
  document.getElementById('recatApp')
);